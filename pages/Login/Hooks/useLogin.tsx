import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useApi } from "../../../Hooks/useApi";
import { useGenerales } from '../../../Hooks/useGenerales';
import { setInformacionUsuario } from "../../../redux/loginReducer";
function useLogin() {
    const navigation = useNavigation<any>()
    const { peticionPost } = useApi()
    const [saveUser, setSaveUser] = useState(false);
    const { responsePeticion } = useGenerales()
    const dispatch = useDispatch();



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
            await AsyncStorage.setItem("infoUsuario", JSON.stringify(dataUser))
            dispatch(setInformacionUsuario(dataUser))
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
