import { useEffect, useState } from "react"
import { useApi } from "../../../Hooks/useApi"
import { useGenerales } from "../../../Hooks/useGenerales"

function useServicios() {
    const { peticionGet } = useApi()
    const { responsePeticion, abrirNavegador } = useGenerales()
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        listarPagoservicios()
    }, [])



    const listarPagoservicios = async () => {
        const peticionApi = await peticionGet('listarEnlaces')
        const dataservicios = await responsePeticion(peticionApi)
        setServicios(dataservicios)
    }

    return {
        servicios,
        abrirNavegador
    }

}

export { useServicios }
