import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useApi } from "../../../Hooks/useApi";
import { useGenerales } from "../../../Hooks/useGenerales";

function useRegistro() {
    const navigation = useNavigation<any>()
    const {validarCodConjunto, responsePeticion} = useGenerales()
    const {peticionPost} = useApi()

    const openLogin = () => {
        navigation.navigate('Login')
    }

    //registrar usuario
    const registrarUsuario = async (dataRegistro: any) => {
        const { codConjunto } = dataRegistro
        const validaConjunto = await validarCodConjunto(codConjunto)
        if (Array(validaConjunto).length > 0) {
            
            const infoConjunto = {
                id_conjunto: validaConjunto[0].id_conjunto,
                id_rol: 3,
                id_tipo_documento: 1,

            }

            const obpeticion = {...dataRegistro, ...infoConjunto}
            
            const peticionApi = await peticionPost(`registrarUsuario`, obpeticion)
            const response = await responsePeticion(peticionApi)
            if (response && typeof response === 'object') {
                                Alert.alert('Registro exitoso.', 'De Click para iniciar sesión.', [
                    {
                        text: 'Aceptar',
                        onPress: () => openLogin()
                    }
                ]);

            }

        }
    }



    
    return {
        openLogin,
        registrarUsuario
    }
}

export { useRegistro };

