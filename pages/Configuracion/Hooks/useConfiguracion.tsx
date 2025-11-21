import { useState, useEffect } from "react"
import { useApi } from "../../../Hooks/useApi"
import { useGenerales } from "../../../Hooks/useGenerales"

function useConfiguracion() {
    useEffect(() => {
        perfilUsuario()
    }, [])

    const { peticionGet } = useApi()
    const { informacionUsuario } = useGenerales()

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

    return {
        infoUsuario
    }
}

export { useConfiguracion }