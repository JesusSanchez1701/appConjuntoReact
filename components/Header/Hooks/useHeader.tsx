import { useEffect, useState } from "react"
import { useApi } from "../../../Hooks/useApi"
import { useGenerales } from "../../../Hooks/useGenerales"
function useHeader(){
    const {informacionUsuario, cerrarSesion, infoUsuario} = useGenerales()
    const {peticionGet} = useApi()
    const [menu, setMenu] = useState<any>([])
    useEffect(()=>{
        informacionUsuario()
        listarMenuUsuario()
    },[])
    
    const listarMenuUsuario = async () =>{
        const peticionApi = await peticionGet('listarHamburgerMenu')
         if (peticionApi && typeof peticionApi === 'object' && 'data' in peticionApi) {
            const response = peticionApi as { data: { status: number; respuesta: Array<any> } }
            if (response.data.status === 200) {
                setMenu(response?.data?.respuesta)
            }
        }
    }
    
    return{
        infoUsuario,
        menu,
        cerrarSesion
    }
}
export { useHeader }
