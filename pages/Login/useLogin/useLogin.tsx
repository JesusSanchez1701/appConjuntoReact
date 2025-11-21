import { useState } from "react";
import { useNavigation } from "@react-navigation/native"
import { useApi } from "../../../Hooks/useApi"
import AsyncStorage from '@react-native-async-storage/async-storage';
function useLogin() {
    const navigation = useNavigation<any>()
    const { peticionPost } = useApi()
    const [saveUser, setSaveUser] = useState(false);


    const openRegistro = () => {
        navigation.navigate('Registro')
    }



    const recordarUsuario = async () => {
        await AsyncStorage.setItem("recordarUsuario", "true")
        setSaveUser(!saveUser);
    }


    const openIngresar = async (dataLogin: any) => {

        const peticionApi = await peticionPost('loginUsuario', dataLogin)
        if (peticionApi && typeof peticionApi === 'object' && 'data' in peticionApi) {
            const response = peticionApi as { data: { status: number; respuesta: string } }
            if (response.data.status === 200) {
                const rawRespuesta = response?.data?.respuesta
                const dataUser = typeof rawRespuesta === 'string' ? JSON.parse(rawRespuesta) : rawRespuesta
                if (dataUser && typeof dataUser === 'object') {
                    delete (dataUser as Record<string, any>).id_rol
                    await AsyncStorage.setItem("infoUsuario", JSON.stringify(dataUser))
                    navigation.navigate('Views')
                } 

            }
        }

    }


    return {
        openRegistro,
        openIngresar,
        recordarUsuario,
        saveUser,



    }
}

export { useLogin }