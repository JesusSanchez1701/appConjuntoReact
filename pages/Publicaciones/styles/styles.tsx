import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    headerAnuncios: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    contentTitulo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%"
    },
    textoAnuncio: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    pagerView: {
        flex: 1,
        width: "50%"
    },

    // container publicaciones
    containerPub: {
        backgroundColor: "#ffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        borderRadius: 10,
        position: "relative"
    },
    infoImage: {
        position: "absolute",
        top: 0,
        right: 5
    },
    textInfoImagen: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700"
    },
    
    listaImg: {

    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.4)", // 👈 intensidad del oscuro
        borderRadius: 10,
    },
    imgLista: {
        width: 400,
        height: 200,
        borderRadius: 10
    },
    infoPublicacion: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },
    tituloPublicacion: {
        fontWeight: "700",
        fontSize: 18,
    },
    descPublicacion: {
        fontWeight: "500",
        fontSize: 15
    },
    enlacePub: {

    }
})

export default styles;