import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Buscador from "../../components/Buscador/Buscador";
import Card from '../../components/Card/Card';
import stylesCard from '../Citofonia/styles/styles';
import styles from "../Publicaciones/styles/styles";
import { useConjunto } from './Hooks/useConjunto';
import stylesConjuntos from './styles/styles';
export default function Conjunto() {
    const navigate = useNavigation<any>()
    const { conjuntos } = useConjunto()
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerAnuncios}>
                    <Pressable onPress={() => navigate.goBack()}>
                        <AntDesign name="arrow-left" size={24} color="black" />
                    </Pressable>
                    <View style={styles.contentTitulo}>
                        <Text style={styles.textoAnuncio}>Tus conjuntos</Text>

                    </View>
                </View>
                <Buscador />

                {conjuntos.map((element: any) => (
                    <Card key={element?.id_usuario} _style={stylesCard.cardStyles} _children={
                        <View style={stylesConjuntos.infoContainer}>
                            <View style={stylesConjuntos.contentImg}>
                                <Image
                                    style={stylesConjuntos.imagenConjunto}
                                    source={{ uri: 'https://imorari.com/wp-content/uploads/2025/03/casas-venta-fusagasuga-conjunto-nibego-inmobiliaria-imorari.jpg' }}
                                />

                                <View style={stylesConjuntos.contentTexto}>
                                    <Text style={stylesConjuntos.tituloConjunto}>{element.nombre_conjunto}</Text>
                                    <Text style={stylesConjuntos.direccionConjunto}>{element.direccion}</Text>
                                </View>
                            </View>

                        </View>
                    } />
                ))}
            </View>
        </SafeAreaView>
    )
}
