
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/styles';

//redux
import { useSelector } from 'react-redux';
export default function ModalCall({ route }: any) {
    const navigation = useNavigation<any>()
    const [timer, setTimer] = useState(0);
    // data del usuario 
    const dataUsuario = useSelector((state: any) => state.citofoniaReducer.infUserCall)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const contestar = () => {
        console.log(route.params)
        route.params.funcion[0]()
    }

    const colgar = () => {
        route.params.funcion[1]()
        navigation.goBack()
    }

    const rechazar = () =>{

    }

    return (
        <LinearGradient
            colors={['#2A160C', '#120B05', '#000000']}
            style={styles.container}
        >
            <SafeAreaView style={{ flex: 1 }}>

                {/* HEADER */}
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Llamada Encriptada</Text>
                </View>

                {/* MAIN CONTENT */}
                <View style={styles.mainContent}>
                    <Text style={styles.statusText}>CONECTADO</Text>
                    {route.params?.isIncomingCall ?
                        <Text style={styles.callerName}>
                            Tienes una llamada de ff Torre {dataUsuario[0]?.torre} Apartamento {dataUsuario[0]?.apartamento}
                        </Text>
                        : <Text style={styles.callerName}>
                            LLamando a Torre {dataUsuario[0]?.torre} Apartamento {dataUsuario[0]?.apartamento}
                        </Text>
                    }
                    <Text style={styles.timerText}>{`${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`}</Text>

                    {/* AVATAR + RINGS */}
                    <View style={styles.avatarContainer}>
                        <View style={styles.ringOuter} />
                        <View style={styles.ringMiddle} />

                        <View style={styles.avatarWrapper}>
                            <Image
                                source={{
                                    uri: 'https://i.imgur.com/1bX5QH6.jpg', // cambia por tu imagen
                                }}
                                style={styles.avatarImage}
                            />
                        </View>

                        <View style={styles.badgeContainer}>
                            <TouchableOpacity style={styles.badgeButton}>
                                <Text style={styles.badgeText}>ACCESO TORRE A</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* CONTROLS */}
                <View style={styles.controlsContainer}>
                    <View style={styles.speakerContainer}>
                        <View style={styles.speakerWrapper}>
                            <TouchableOpacity style={styles.speakerButton}>
                                <FontAwesome6 name="volume-high" size={28} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.speakerText}>ALTAVOZ</Text>
                        </View>
                    </View>
                    {/* botones de contestar y rechazar  */}
                    {route.params?.isIncomingCall ? <View style={styles.contenedorButtonsllamada}>

                        <TouchableOpacity onPress={() => contestar()} style={[styles.hangupButton, styles.hangupButtonAceptar]}>
                            <FontAwesome name="phone" size={36} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => colgar()} style={[styles.hangupButton, styles.hangupButtonRechazar]}>
                            <FontAwesome name="phone" size={36} color="white" />
                        </TouchableOpacity>

                    </View> : <View>
                        <TouchableOpacity onPress={() => colgar()} style={[styles.hangupButton, styles.hangupButtonRechazar]}>
                            <FontAwesome name="phone" size={36} color="white" />
                        </TouchableOpacity>
                    </View>}

                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}


