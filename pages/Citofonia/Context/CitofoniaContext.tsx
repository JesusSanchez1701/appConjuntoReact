import { useNavigation } from "@react-navigation/native";
import { createContext, useEffect, useRef } from "react";
import InCallManager from "react-native-incall-manager";
import { mediaDevices, RTCIceCandidate, RTCPeerConnection, RTCSessionDescription } from "react-native-webrtc";
import { io } from "socket.io-client";
import { useGenerales } from "../../../Hooks/useGenerales";
const CitofoniaContext = createContext<CitonofiaContextInterface | null>(null)
interface CitonofiaContextInterface {
    saludo: string,
    llamarUsuario: (idDestino: string) => void,
    contestarLlamada: () => void,
    colgarLlamada: () => void,
}

function CitofoniaProvider({ children }: any) {

    //config soxket call
    const socket = io("http://localhost:8086", {
        path: "/appConjuntosApi/socket.io"
    });

    const navigation = useNavigation<any>();
    const { dataUsuario } = useGenerales();


    // Variables globales para mantener la conexión activa entre pantallas
    let globalPeerConnection: RTCPeerConnection | null = null;
    let globalLocalStream: any = null;
    let globalOtherUserId: string | null = null;


    const myUserId = useRef<string | null>(null);
    const incomingCallRef = useRef<any>(null);

    // Helpers para actualizar estado global y local simultáneamente
    const updateLocalStream = (stream: any) => {
        globalLocalStream = stream;
    };


    //efect para manejar el socket

    // ===============================
    // INIT
    // ===============================
    useEffect(() => {
        // Sincronizar estado al montar el hook

        const init = async () => {
            if (dataUsuario?.id_usuario) {
                myUserId.current = dataUsuario.id_usuario;
                socket.emit("register", dataUsuario.id_usuario);
            }
        };

        init();

        const onIncomingCall = async ({ from, offer }: any) => {
            globalOtherUserId = from;
            incomingCallRef.current = { from, offer };
            navigation.navigate("ModalCall", { isIncomingCall: true, from: from, funcion:[contestarLlamada, colgarLlamada] })
            // Alert.alert(
            //     "Llamada Entrante",
            //     `Te está llamando: ${from}`,
            //     [
            //         {
            //             text: "Rechazar",
            //             onPress: () => {
            //                 socket.emit("call-ended", { to: from });
            //                 incomingCallRef.current = null;
            //             },
            //             style: "cancel"
            //         },
            //         {
            //             text: "Contestar",
            //             onPress: () => {
            //                 contestarLlamada();
            //             }
            //         }
            //     ],
            //     { cancelable: false }
            // );
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
        socket.on("end-call", onCallEnded);

        return () => {
            socket.off("incoming-call", onIncomingCall);
            socket.off("call-answered", onCallAnswered);
            socket.off("ice-candidate", onIceCandidate);
            socket.off("end-call", onCallEnded);
        };
    }, [dataUsuario, navigation]);

    // funciones generales call

    // Eliminada dependencia contestarLlamada para evitar ciclos

    // ===============================
    // WEBRTC
    // ===============================
    const setupPeerConnection = () => {
        if (globalPeerConnection) return globalPeerConnection;

        const pc = new RTCPeerConnection({
            iceServers: [
                { urls: "stun:stun.l.google.com:19302" }
            ],
            sdpSemantics: "unified-plan",
            iceCandidatePoolSize: 10
        });

        pc.onicecandidate = (event: any) => {
            if (event.candidate && globalOtherUserId) {
                socket.emit("ice-candidate", {
                    to: globalOtherUserId,
                    candidate: event.candidate,
                });
            }
        };

        pc.ontrack = (event: any) => {
            const stream = event.streams[0];

            if (!stream) return;

            console.log("REMOTE STREAM:", stream);
            console.log("REMOTE AUDIO TRACKS:", stream.getAudioTracks());
        };

        globalPeerConnection = pc;
        return pc;
    };

    const iniciarMedia = async () => {
        const stream = await mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true
            },
            video: false
        });

        updateLocalStream(stream);
        return stream;
    };

    const iniciarWebRTC = async () => {
        if (!myUserId.current || !globalOtherUserId) return;

        InCallManager.start({ media: "audio", auto: true });
        InCallManager.setForceSpeakerphoneOn(true);
        InCallManager.setSpeakerphoneOn(true);
        InCallManager.setMicrophoneMute(false);

        const stream = await iniciarMedia();
        const pc = setupPeerConnection();

        stream.getTracks().forEach(track =>
            pc.addTrack(track, stream)
        );

        const offer = await pc.createOffer({
            offerToReceiveAudio: true,
            offerToReceiveVideo: false
        });
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
        navigation.navigate("ModalCall", { isIncomingCall: false, to: dataUsuario, funcion: [contestarLlamada, colgarLlamada]});
        await iniciarWebRTC();
    };

    // ===============================
    // CONTESTAR
    // ===============================
    const contestarLlamada = async () => {
        const callData = incomingCallRef.current;
        if (!callData) return;

        // Navegar al modal para ver la interfaz
        // navigation.navigate("ModalCall", { isIncomingCall: true, from: callData.from });

        InCallManager.start({ media: "audio", auto: true });
        InCallManager.setForceSpeakerphoneOn(true);

        const pc = setupPeerConnection();
        const stream = await iniciarMedia();

        stream.getTracks().forEach(track =>
            pc.addTrack(track, stream)
        );

        await pc.setRemoteDescription(
            new RTCSessionDescription(callData.offer)
        );

        const answer = await pc.createAnswer({
            offerToReceiveAudio: true,
            offerToReceiveVideo: false
        });
        await pc.setLocalDescription(answer);

        socket.emit("answer-call", {
            to: callData.from,
            answer,
        });
        incomingCallRef.current = null;
    };

    // ===============================
    // COLGAR
    // ===============================
    const colgarLlamada = () => {
        if (globalOtherUserId) {
            socket.emit("end-call", {
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

        globalOtherUserId = null;
        incomingCallRef.current = null;
        InCallManager.stop();
    };

    const contextValue: CitonofiaContextInterface = {
        saludo: "Hola Mundo",
        llamarUsuario,
        contestarLlamada,
        colgarLlamada,
    }

    return (
        <CitofoniaContext.Provider value={contextValue}
        >
            {children}
        </CitofoniaContext.Provider>
    )
}

export { CitofoniaContext, CitofoniaProvider };
