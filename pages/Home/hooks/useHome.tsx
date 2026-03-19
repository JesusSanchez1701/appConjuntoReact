import { Alert } from "react-native";
import { useApi } from "../../../Hooks/useApi";
import { useGenerales } from "../../../Hooks/useGenerales";
function useHome() {
    const { peticionPostMultipart } = useApi()
    const { responsePeticion,
        modalVisible,
        setModalVisible,
        seleccionarImagen,
        image,
        dataUsuario } = useGenerales()

    const realizarPublicacion = async (dataPublicacion: any) => {


        const formData = new FormData();
        formData.append('nompublicacion', dataPublicacion.nompublicacion);
        formData.append('descpublicacion', dataPublicacion.descpublicacion);
        formData.append('urlpublicacion', dataPublicacion.urlpublicacion);
        formData.append('contactoPub', dataPublicacion.contactoPub);
        formData.append('id_usuario', "1");
        formData.append('id_conjunto', "1");


        image.forEach((archivo: any) => {
            const archivoSubir: any = {
                uri: archivo.uri,
                name: archivo.fileName,
                type: archivo.type
            }
            formData.append('imgPublicacion', archivoSubir);
        })

        const peticionApi =await peticionPostMultipart(`crearCarteleraImages`, formData)
        const dataPeticion = await responsePeticion(peticionApi)
        if (new Array(dataPeticion).length > 0) {
            Alert.alert('Exito!', 'Publicacion realizada correctamente');
            setModalVisible(false);
        }
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
