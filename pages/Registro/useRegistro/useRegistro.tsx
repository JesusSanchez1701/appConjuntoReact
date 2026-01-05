import { useNavigation } from "@react-navigation/native"
function useRegistro() {
    const navigation = useNavigation<any>()

    const openLogin = () => {
        navigation.navigate('Login')
    }

    //registrar usuario
    const registrarUsuario = async (dataRegistro: any) => {
        console.log(dataRegistro, "datos del usuario")

    }
    return {
        openLogin,
        registrarUsuario
    }
}

export { useRegistro }
