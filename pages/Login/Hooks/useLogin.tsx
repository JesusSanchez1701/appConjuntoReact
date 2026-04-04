import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useApi } from "../../../Hooks/useApi";
import { useGenerales } from '../../../Hooks/useGenerales';
import { setInformacionUsuario } from "../../../redux/loginReducer";

function useLogin() {
    const navigation = useNavigation<any>()
    const { peticionPost } = useApi()
    const [saveUser, setSaveUser] = useState(false);
    const { responsePeticion } = useGenerales()
    const [cargando, setCargando] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        validarSesion()
    }, [])

    const validarSesion = async () => {
        const infoUsuarioRaw: string | null = await AsyncStorage.getItem("infoUsuario")
        if (infoUsuarioRaw) {
            navigation.navigate('Views')
        }
    }

    const openRegistro = () => {
        navigation.navigate('Registro')
    }



    const recordarUsuario = async () => {
        await AsyncStorage.setItem("recordarUsuario", "true")
        setSaveUser(!saveUser);
    }


    const openIngresar = async (dataLogin: any) => {
        setCargando(true)
        const peticionApi = await peticionPost('loginUsuario', dataLogin)
        const dataUser = await responsePeticion(peticionApi)
        if (dataUser && typeof dataUser === 'object') {
            await AsyncStorage.setItem("infoUsuario", JSON.stringify(dataUser))
            dispatch(setInformacionUsuario(dataUser))
            navigation.navigate('Views')
            setCargando(false)
        }

    }



    return {
        openRegistro,
        openIngresar,
        recordarUsuario,
        saveUser,
        cargando



    }
}

export { useLogin };
