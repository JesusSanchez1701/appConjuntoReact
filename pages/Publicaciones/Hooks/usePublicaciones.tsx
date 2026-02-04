import { useState } from "react"
import { useApi } from "../../Hooks/useApi"
import { useGenerales } from "../../Hooks/useGenerales"
function usePublicaciones() {
    const { peticionGet } = useApi()
    const { responsePeticion } = useGenerales()
    const [publicaciones, setPublicaciones] = useState<any>([])
    
    const listarPublicaciones = async () => {
        const peticionApi = await peticionGet('publicaciones')
        const dataPublicaciones = await responsePeticion(peticionApi)
        setPublicaciones(dataPublicaciones)
    }
    return {
        publicaciones
    }
}

export { usePublicaciones }
