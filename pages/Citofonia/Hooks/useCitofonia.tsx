import { useState, useEffect } from "react"
import { useApi } from "../../../Hooks/useApi"

function useCitofonia() {

    const { peticionGet } = useApi()

    const [listUsuarios, setListUsuarios] = useState<any>([])

    useEffect(() => {
        listarUsuariosConjunto()
    }, [])

    //lista de los usuarios del conjunto solo para administracion
    const listarUsuariosConjunto = async () => {

        const peticionApi = await peticionGet(`listarUsuarios`)
        if (peticionApi && typeof peticionApi === 'object' && 'data' in peticionApi) {
            const response = peticionApi as { data: { status: number; respuesta: Array<any> } }
            if (response.data.status === 200) {
                const rawRespuesta = response?.data?.respuesta
                const dataUser = typeof rawRespuesta === 'string' ? JSON.parse(rawRespuesta) : rawRespuesta
                if (dataUser && typeof dataUser === 'object') {
                    setListUsuarios(rawRespuesta)
                } 
            }
        }
    }
  return {
    listUsuarios
  };
}

export { useCitofonia };