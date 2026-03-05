import { useApi } from "../../../Hooks/useApi";
import { useGenerales } from "../../../Hooks/useGenerales";
function useHome() {
    const { peticionPost } = useApi()
    const { responsePeticion, modalVisible, setModalVisible, seleccionarImagen, image } = useGenerales()

    const realizarPublicacion = async (dataPublicacion: any) => {
        

        const peticionApi = await peticionPost(`crearCartelera`, dataPublicacion)
        // setModalVisible(false)
        // console.log('dataPublicacion', dataPublicacion)
    }


    return {
        responsePeticion,
        setModalVisible,
        seleccionarImagen,
        realizarPublicacion,
        image,
        modalVisible,

    }
}

export { useHome };
