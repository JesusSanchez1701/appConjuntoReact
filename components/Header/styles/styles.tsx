import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        position:"relative",
        marginHorizontal: 5,
        marginVertical: 5,
    },
    contentInfoUser:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        backgroundColor: "#ffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        padding: 10,
        borderRadius: 10,

    },
    accesosDirectos:{
        marginTop:10,
        paddingHorizontal: 2,
        marginBottom: 10,
    },
    accesosDirectosText:{
        fontWeight: "400"
    },
    contentCerrar: {
        position:"absolute",
        bottom:0,
        width: "100%",
        left: 2
    },
    cardsMenu:{
        marginBottom: 10
    },
    textOpciones:{
        marginLeft:5
    }
})

export default styles;