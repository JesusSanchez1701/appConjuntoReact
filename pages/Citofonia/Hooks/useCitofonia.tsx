import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import InCallManager from "react-native-incall-manager";
import { mediaDevices, RTCIceCandidate, RTCPeerConnection, RTCSessionDescription } from "react-native-webrtc";
import { io } from "socket.io-client";
import { useApi } from "../../../Hooks/useApi";
import { useGenerales } from "../../../Hooks/useGenerales";
const socket = io("http://localhost:8086", {
    path: "/appConjuntosApi/socket.io"
});

// Variables globales para mantener la conexión activa entre pantallas
let globalPeerConnection: RTCPeerConnection | null = null;
let globalLocalStream: any = null;
let globalRemoteStream: any = null;
let globalOtherUserId: string | null = null;

function useCitofonia() {
    const navigation = useNavigation<any>();
    const { peticionGet } = useApi();
    const { dataUsuario } = useGenerales();

    const [listUsuarios, setListUsuarios] = useState<any[]>([]);
    const [localStream, setLocalStream] = useState<any>(globalLocalStream);
    const [remoteStream, setRemoteStream] = useState<any>(globalRemoteStream);
    const [isCalling, setIsCalling] = useState(false);

    const myUserId = useRef<string | null>(null);
    const incomingCallRef = useRef<any>(null);


    // Helpers para actualizar estado global y local simultáneamente
    const updateLocalStream = (stream: any) => {
        globalLocalStream = stream;
        setLocalStream(stream);
    };

    const updateRemoteStream = (stream: any) => {
        globalRemoteStream = stream;
        setRemoteStream(stream);
    };

    // ===============================
    // INIT
    // ===============================
    useEffect(() => {
        // Sincronizar estado al montar el hook
        setLocalStream(globalLocalStream);
        setRemoteStream(globalRemoteStream);

        const init = async () => {
            listarUsuariosConjunto();

            if (dataUsuario?.id_usuario) {
                myUserId.current = dataUsuario.id_usuario;
                socket.emit("register", dataUsuario.id_usuario);
            }
        };

        init();

        const onIncomingCall = ({ from, offer }: any) => {
            globalOtherUserId = from;
            incomingCallRef.current = { from, offer };

            Alert.alert(
                "Llamada Entrante",
                `Te está llamando: ${from}`,
                [
                    {
                        text: "Rechazar",
                        onPress: () => {
                            socket.emit("call-ended", { to: from });
                            incomingCallRef.current = null;
                        },
                        style: "cancel"
                    },
                    {
                        text: "Contestar",
                        onPress: () => {
                            contestarLlamada();
                        }
                    }
                ],
                { cancelable: false }
            );
        };

        const onCallAnswered = async ({ answer }: any) => {
            if (globalPeerConnection) {
                await globalPeerConnection.setRemoteDescription(
                    new RTCSessionDescription(answer)
                );
            }
        };

        const onIceCandidate = async ({ candidate }: any) => {
            if (globalPeerConnection && candidate) {
                await globalPeerConnection.addIceCandidate(new RTCIceCandidate(candidate));
            }
        };

        const onCallEnded = () => {
            limpiarLlamada();
            try {
                navigation.goBack();
            } catch (e) {
                console.log(e)
            }
        };

        socket.on("incoming-call", onIncomingCall);
        socket.on("call-answered", onCallAnswered);
        socket.on("ice-candidate", onIceCandidate);
        socket.on("call-ended", onCallEnded);

        return () => {
            socket.off("incoming-call", onIncomingCall);
            socket.off("call-answered", onCallAnswered);
            socket.off("ice-candidate", onIceCandidate);
            socket.off("call-ended", onCallEnded);
        };
    }, [dataUsuario, navigation]); // Eliminada dependencia contestarLlamada para evitar ciclos

    // ===============================
    // WEBRTC
    // ===============================
    const setupPeerConnection = () => {
        if (globalPeerConnection) return globalPeerConnection;

        const pc = new RTCPeerConnection({
            iceServers: [
                { urls: "stun:stun.l.google.com:19302" }
            ],
            sdpSemantics: "unified-plan"
        });

        pc.onicecandidate = event => {
            if (event.candidate && globalOtherUserId) {
                socket.emit("ice-candidate", {
                    to: globalOtherUserId,
                    candidate: event.candidate,
                });
            }
        };

        pc.ontrack = event => {
            console.log("REMOTE STREAM", event.streams);
            if (event.streams && event.streams[0]) {
                updateRemoteStream(event.streams[0]);
            }
        };

        globalPeerConnection = pc;
        return pc;
    };

    const iniciarMedia = async () => {
        const stream = await mediaDevices.getUserMedia({
            audio: true,
            video: false,
        });

        updateLocalStream(stream);
        return stream;
    };

    const iniciarWebRTC = async () => {
        setIsCalling(true);
        if (!myUserId.current || !globalOtherUserId) return;

        const stream = await iniciarMedia();
        const pc = setupPeerConnection();

        stream.getTracks().forEach(track =>
            pc.addTrack(track, stream)
        );

        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        socket.emit("call-user", {
            from: myUserId.current,
            to: globalOtherUserId,
            offer,
        });
    };

    // ===============================
    // LLAMAR
    // ===============================
    const llamarUsuario = async (idDestino: string) => {
        if (!myUserId.current) return;
        globalOtherUserId = idDestino;

        // Navegar a la pantalla de llamada y empezar el proceso
        // navigation.navigate("ModalCall", { isIncomingCall: false, to: idDestino });
        await iniciarWebRTC();
    };

    // ===============================
    // CONTESTAR
    // ===============================
    const contestarLlamada = async () => {
        const callData = incomingCallRef.current;

        if (!callData) return;

        setIsCalling(true);
        // Navegar al modal para ver la interfaz
        // navigation.navigate("ModalCall", { isIncomingCall: true, from: callData.from });

        const pc = setupPeerConnection();
        const stream = await iniciarMedia();

        stream.getTracks().forEach(track =>
            pc.addTrack(track, stream)
        );

        await pc.setRemoteDescription(
            new RTCSessionDescription(callData.offer)
        );

        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        socket.emit("answer-call", {
            to: callData.from,
            answer,
        });
        console.log(stream.getAudioTracks(), "audio hay");
        InCallManager.start({ media: "audio" });
        incomingCallRef.current = null;
    };

    // ===============================
    // COLGAR
    // ===============================
    const colgarLlamada = () => {
        if (globalOtherUserId) {
            socket.emit("call-ended", {
                to: globalOtherUserId,
            });
        }

        limpiarLlamada();
        try {
            navigation.goBack();
        } catch (e) {
            console.log(e)
        }
    };

    const limpiarLlamada = () => {
        if (globalPeerConnection) {
            globalPeerConnection.close();
            globalPeerConnection = null;
        }

        if (globalLocalStream) {
            globalLocalStream.getTracks().forEach(t => t.stop());
            updateLocalStream(null);
        }

        updateRemoteStream(null);
        setIsCalling(false);
        globalOtherUserId = null;
        incomingCallRef.current = null;
        InCallManager.stop();
    };

    const listarUsuariosConjunto = async () => {
        const res = await peticionGet("listarUsuarios");
        if (res?.data?.status === 200) {
            setListUsuarios(res.data.respuesta);
        }
    };

    return {
        llamarUsuario,
        contestarLlamada,
        colgarLlamada,
        listUsuarios,
        localStream,
        remoteStream,
        isCalling,
    };
}

export { useCitofonia };
