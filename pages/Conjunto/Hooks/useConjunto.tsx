import { useEffect, useState } from "react"
import { useApi } from "../../../Hooks/useApi"
import { useGenerales } from "../../../Hooks/useGenerales"

function useConjunto() {
    const { peticionGet } = useApi()
    const { responsePeticion, informacionUsuario } = useGenerales()
    const [conjuntos, setConjuntos] = useState<any>([])
    useEffect(() => {
        conjuntosAdmin()
    }, [])

    //lista los conjuntos asociados al usuario
    const conjuntosAdmin = async () => {
        const idUsuario = await informacionUsuario()
        const peticionApi = await peticionGet(`conjutoUsuario/${idUsuario?.id_usuario}`)
        const dataConjuntos = await responsePeticion(peticionApi)
        setConjuntos(dataConjuntos)
    }
    return {
        conjuntos
    }
}

export { useConjunto }
