import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useApi } from "../../../Hooks/useApi";
import { setListaUsuarios } from "../../../redux/citofoniaReducer";
import { CitofoniaContext } from "../Context/CitofoniaContext";

function useCitofonia() {

    useEffect(() => {
        listarUsuariosConjunto()
    }, [])
    //llamando a los context 
    const { llamarUsuario } = useContext(CitofoniaContext)
    const { peticionGet } = useApi();

    const [listUsuarios, setListUsuarios] = useState<any[]>([]);
    //redux
    const dispatch = useDispatch()

    const listarUsuariosConjunto = async () => {
        const res = await peticionGet("listarUsuarios");
        if (res?.data?.status === 200) {
            setListUsuarios(res.data.respuesta);
            dispatch(setListaUsuarios(res.data.respuesta))
        }
    };


    return {
        llamarUsuario,
        listUsuarios
    };
}

export { useCitofonia };
