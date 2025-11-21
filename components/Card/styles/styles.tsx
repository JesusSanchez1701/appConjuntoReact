import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
   
    containerCard: {
        width: '100%',
        height: "auto",
        backgroundColor: '#F8EDE5',
        borderRadius: 13,
    },

    imagenCard: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    titleCard:{
        fontSize: 18,
        fontWeight: 'medium',
        marginBottom: 5,
    },
    bodyCard:{
        padding: 18,
    }
});

export default styles;