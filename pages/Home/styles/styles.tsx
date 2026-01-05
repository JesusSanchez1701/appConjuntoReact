import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        // padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    containertextoAnuncios: {
        paddingTop: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textoAnuncio: {
        fontWeight: "bold",
        fontSize: 18
    },
    containerImgPublicacion: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        height:"auto"
    },
    imagesPublicacion: {
        marginHorizontal: 10,
        width:300,
        height:180,
        borderRadius: 10
    }
});

export default styles;