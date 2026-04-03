import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { useApi } from "../../../Hooks/useApi"
import { useGenerales } from "../../../Hooks/useGenerales"
function useHeader() {
    const { informacionUsuario, cerrarSesion, infoUsuario } = useGenerales()
    const { peticionGet } = useApi()
    const [menu, setMenu] = useState<any>([])
    useEffect(() => {
        informacionUsuario()

        listarMenuUsuario()
    }, [])

    const listarMenuUsuario = async () => {
        const validarMenuAlmancenado = await AsyncStorage.getItem("menuUsuario")
        if (validarMenuAlmancenado) {
            const parSearMenu = JSON.parse(validarMenuAlmancenado)
            setMenu(parSearMenu)
        } else {
            await AsyncStorage.removeItem("menuUsuario")
            const peticionApi = await peticionGet('listarHamburgerMenu')
            if (peticionApi && typeof peticionApi === 'object' && 'data' in peticionApi) {
                const response = peticionApi as { data: { status: number; respuesta: Array<any> } }
                if (response.data.status === 200) {
                    setMenu(response?.data?.respuesta)
                    await AsyncStorage.setItem("menuUsuario", JSON.stringify(response?.data?.respuesta))
                }
            }
        }

    }

    return {
        infoUsuario,
        menu,
        cerrarSesion
    }
}
export { useHeader }
