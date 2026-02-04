import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { Alert, Linking } from "react-native";
import { useApi } from "./useApi";
function useGenerales() {
    const [modalVisible, setModalVisible] = useState(false)
    const [infoUsuario, setInfoUsuario] = useState<any>([])
    const navigation = useNavigation<any>()
    const [image, setImage] = useState<any>([]);
    const { peticionPost } = useApi()

    const informacionUsuario = async () => {
        const infoUsuario = await AsyncStorage.getItem("infoUsuario")
        if (infoUsuario) {
            setInfoUsuario(JSON.parse(infoUsuario))
            return JSON.parse(infoUsuario)
        }
        return null
    }

    const cerrarSesion = async () => {
        await AsyncStorage.removeItem("infoUsuario")
        navigation.navigate("Login")
    }

    const seleccionarImagen = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permission required', 'Permission to access the media library is required.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true,
            selectionLimit: 3
        });


        if (!result.canceled) {
            setImage(result.assets);
        }
    }

    const responsePeticion = async (peticionApi: any) => {
        if (peticionApi && typeof peticionApi === 'object' && 'data' in peticionApi) {
            const response = peticionApi as { data: { status: number; respuesta: string, mensaje: string } }
            if (response.data.status === 200) {
                const rawRespuesta = response?.data?.respuesta
                return typeof rawRespuesta === 'string' ? JSON.parse(rawRespuesta) : rawRespuesta
            } else {
                Alert.alert('Error', response?.data?.mensaje);
            }
        }
    }

    //valida si el conjunto existe para poder hacer registro del usuario
    const validarCodConjunto = async (codConjunto: string) => {
        const peticionApi = await peticionPost(`validarCodigoConjunto`, { codConjunto })
        const dataValidacion = await responsePeticion(peticionApi)
        return dataValidacion
    }

    const abrirNavegador = (url: string) => {
        Linking.openURL(url).catch((err) =>
            console.error('Error al abrir la URL', err)
        );
    }

    return {
        modalVisible,
        infoUsuario,
        image,
        setModalVisible,
        informacionUsuario,
        cerrarSesion,
        seleccionarImagen,
        responsePeticion,
        validarCodConjunto,
        abrirNavegador
    }
}
export { useGenerales };

