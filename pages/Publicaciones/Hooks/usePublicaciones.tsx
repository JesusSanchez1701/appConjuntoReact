import { useState } from "react"
import { useApi } from "../../../Hooks/useApi"
import { useGenerales } from "../../../Hooks/useGenerales"
function usePublicaciones() {
    const { peticionGet } = useApi()
    const { responsePeticion, abrirNavegador } = useGenerales()
    const [publicaciones, setPublicaciones] = useState<any>([])
    const [countImg, setCountImg] = useState(0)
    const listarPublicaciones = async () => {
        const peticionApi = await peticionGet('publicaciones')
        const dataPublicaciones = await responsePeticion(peticionApi)
        setPublicaciones(dataPublicaciones)
    }
    return {
        publicaciones,
        abrirNavegador,
        setCountImg,
        countImg,
    }
}

export { usePublicaciones }
