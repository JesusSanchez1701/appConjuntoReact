import { useEffect, useState } from "react"
import { Alert } from "react-native"
import { useApi } from "../../../Hooks/useApi"
import { useGenerales } from "../../../Hooks/useGenerales"

function useConfiguracion() {
    useEffect(() => {
        perfilUsuario()
    }, [])

    const { peticionGet, peticionPut } = useApi()
    const { informacionUsuario, responsePeticion } = useGenerales()

    const [infoUsuario, setInfoUsuario] = useState<any>([])

    const perfilUsuario = async () => {
        const dataUser = await informacionUsuario()

        const peticionApi = await peticionGet(`listarUsuario/${dataUser?.id_usuario}`)
        if (peticionApi && typeof peticionApi === 'object' && 'data' in peticionApi) {
            const response = peticionApi as { data: { status: number; respuesta: Array<any> } }
            if (response.data.status === 200) {
                if (dataUser && typeof dataUser === 'object') {
                    setInfoUsuario(response?.data?.respuesta[0])
                }

            }
        }
    }

    const actualizarUsuario = async (datos: object) => {
        const datosUsuario = {
            apartamento: infoUsuario.apartamento,
            torre: infoUsuario.torre,
            id_usuario: infoUsuario.id_usuario

        }
        const unirDatos = { ...datosUsuario, ...datos }
        const peticionApi = await peticionPut(`actualizarUsuario/${infoUsuario.id_usuario}`, unirDatos)
        const dataPeticion = await responsePeticion(peticionApi)
        if (new Array(dataPeticion).length > 0) {
            Alert.alert('Exito!', 'Datos actualizados correctamente');
            perfilUsuario()
        }
    }

    return {
        infoUsuario,
        actualizarUsuario
    }
}

export { useConfiguracion }
