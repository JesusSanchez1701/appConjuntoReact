import { View, Text, Pressable, TouchableOpacity, ScrollView } from "react-native"
import styles from "./styles/styles"
import { SafeAreaView } from "react-native-safe-area-context"
import Buscador from "../../components/Buscador/Buscador"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
export default function Publicaciones() {
    const navigate = useNavigation<any>()
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerAnuncios}>
                    <Pressable onPress={() => navigate.goBack()}>
                        <AntDesign name="arrow-left" size={24} color="black" />
                    </Pressable>
                    <View style={styles.contentTitulo}>
                        <Text style={styles.textoAnuncio}>Publicaciones</Text>

                    </View>
                </View>
                <Buscador />
            </View>
        </>

    )
}
