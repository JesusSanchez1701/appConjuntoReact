import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useApi } from "../../../Hooks/useApi";
import { useGenerales } from '../../../Hooks/useGenerales';
function useLogin() {
    const navigation = useNavigation<any>()
    const { peticionPost } = useApi()
    const [saveUser, setSaveUser] = useState(false);
    const { responsePeticion } = useGenerales()



    const openRegistro = () => {
        navigation.navigate('Registro')
    }



    const recordarUsuario = async () => {
        await AsyncStorage.setItem("recordarUsuario", "true")
        setSaveUser(!saveUser);
    }


    const openIngresar = async (dataLogin: any) => {

        const peticionApi = await peticionPost('loginUsuario', dataLogin)
        const dataUser = await responsePeticion(peticionApi)
        if (dataUser && typeof dataUser === 'object') {
            delete (dataUser as Record<string, any>).id_rol
            await AsyncStorage.setItem("infoUsuario", JSON.stringify(dataUser))
            navigation.navigate('Views')
        }

    }

    

    return {
        openRegistro,
        openIngresar,
        recordarUsuario,
        saveUser



    }
}

export { useLogin };
