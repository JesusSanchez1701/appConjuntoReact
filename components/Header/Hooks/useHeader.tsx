import { useEffect } from "react"
import { useGenerales } from "../../../Hooks/useGenerales"
function useHeader(){
    const {informacionUsuario, cerrarSesion, infoUsuario} = useGenerales()
    useEffect(()=>{
        informacionUsuario()
    },[])
   
    
    return{
        infoUsuario,
        cerrarSesion
    }
}
export { useHeader }
