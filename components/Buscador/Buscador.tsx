import { View, TextInput, StyleSheet } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';

const styles = StyleSheet.create({
    containerBuscador: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
        width: "100%",
        //shadow
        backgroundColor: "#ffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    iconoSearch: {
        marginHorizontal: 5,
        marginVertical: 5,
        color: "#f27623ff"
    },
    InputSearch: {
        color: "#f27623ff",
        width: "80%",
        marginLeft:10,
        fontSize: 16
    }
})
export default function Buscador() {
    return (
        <View style={styles.containerBuscador}>
            <FontAwesome name="search" size={24} color="black" style={styles.iconoSearch} />

            <TextInput
                style={styles.InputSearch}
                placeholderTextColor={"#f27623ff"}
                placeholder="Buscar"
                keyboardType="default"
            />
        </View>
    )
}
