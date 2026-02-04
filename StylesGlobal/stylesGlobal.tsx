import { StyleSheet } from "react-native";
const globalStyles = StyleSheet.create({
    //contenedor login y registro
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    textLight: {
        color: '#374151', // text-foreground-light
    },
    textDark: {
        color: '#d1d5db', // text-foreground-dark
    },

    //contenedor del boton login y registro
    contenedorButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },

    //contenedor checkbox y texto
    contenedorOlvidarPass: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginTop: 10
    },

    contenedorCheckbox: {
        flexDirection: 'row',
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    //contenedor texto posterior al titulo
    contenedorTxt: {
        marginBottom: 20,
    },
    textoOlidoPassword: {
        color: '#f27623ff',
    },
    contenedorEnd: {
        position: 'absolute',
        bottom: 40, // Espacio desde la parte inferior
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contenedorButtonCard: {
        padding: 18,
        width: "75%",
    },
    contenedorModal: {
        backgroundColor: "#ffff",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginBottom: 10
    },
    containerInputs: {
        width: "100%",
        paddingHorizontal: 8,
        paddingVertical: 5

    },
    headerModal: {
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleModal: {
        fontSize: 19,
        fontWeight: "bold"
    },
    contentbtnModal: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end"

    },
    //btn modal publicar
    btnModal: {
        width: "30%",
        marginTop: 10,
        fontSize: 1,
        padding: 10,
        marginHorizontal: 2,
        marginVertical: 2
    },
    btnCanelar: {
        color: "#f27623ff",
        width: "30%",
        marginTop: 10,
        fontSize: 1,
        padding: 10,
        backgroundColor: "#fff",
        marginHorizontal: 2,
        marginVertical: 2
    },
    textbtnCancelar: {
        color: "#000",
        fontWeight: "bold"

    },
    fileInput: {
        borderWidth: 2,
        borderColor: '#d1d5db',
        borderStyle: 'dashed',
        borderRadius: 8,
        padding: 20,
        marginTop: 5,
        alignItems: 'center',
    },
    headerapp: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 30,
        paddingHorizontal: 15,
        backgroundColor: "#f27623ff"
    },

    textErrorForm: {
        color: 'red',
        padding: 4
    },
    //clases para 3 columnas
    container3Col: {
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        width: "100%",
        marginVertical: 10,
    },
    card3Col: {
        width: "33.33%",
        marginBottom: 10,
        marginHorizontal: 5

    },

    //contenedor servicios
    contentServicios:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding: 5
    }

});
export default globalStyles;