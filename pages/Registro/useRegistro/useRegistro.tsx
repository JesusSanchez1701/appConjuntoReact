import { useNavigation } from "@react-navigation/native"
function useRegistro(){
    const navigation = useNavigation<any>()

    const openLogin = () => {
        navigation.navigate('Login')
    }
    return{
        openLogin
    }
}

export {useRegistro}