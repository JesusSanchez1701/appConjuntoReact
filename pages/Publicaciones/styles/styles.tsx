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
        position: "relative",
        marginBottom:10
    },
    infoImage: {
        position: "absolute",
        top: 2,
        right: 3,
        backgroundColor: "#000",
        padding: 2,
        borderRadius: 10,
    },
    textInfoImagen: {
        color: "#fff",
        fontSize: 13,
        fontWeight: "700"
    },
    gridImagesContainer: {
        padding: 5,
    },
    columnWrapper: {
        justifyContent: 'flex-start',
    },
    imgGrid: {
        flex: 1,
        maxWidth: '32.33%',
        margin: '0.5%',
        aspectRatio: 1,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    imgInsideGrid: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.25)", 
        borderRadius: 8,
    },
    imgLista: {
        width: 400,
        height: 200,
        borderRadius: 10,
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

    },
    containerPaginador:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
        flex:1
    },
    buttonPag:{
        width: 20,
        backgroundColor:"#E87D3E",
        borderRadius:30 
    },
    numerosPag:{
        color:"#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    }
})

export default styles;