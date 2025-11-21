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
    contentTitulo:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"90%"
    },
    textoAnuncio: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    }
})

export default styles;