import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Buscador from "../../components/Buscador/Buscador";
import Card from '../../components/Card/Card';
import stylesGlobales from '../../StylesGlobal/stylesGlobal';
import stylesCard from '../Citofonia/styles/styles';
import styles from "../Publicaciones/styles/styles";
import { useServicios } from './Hooks/useServicios';

export default function Servicios() {
    const navigate = useNavigation<any>()
    const { servicios, abrirNavegador } = useServicios()
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerAnuncios}>
                    <Pressable onPress={() => navigate.goBack()}>
                        <AntDesign name="arrow-left" size={24} color="black" />
                    </Pressable>
                    <View style={styles.contentTitulo}>
                        <Text style={styles.textoAnuncio}>Pago de Servicios</Text>

                    </View>
                </View>
                <Buscador />
                <View style={stylesGlobales.container3Col} >

                    {servicios.map((element: any, index: number) => (
                        <Pressable style={stylesGlobales.card3Col} onPress={() =>abrirNavegador(element.link)} key={index}>
                        <Card _style={[stylesCard.cardStyles]} _children={
                            <View style={stylesGlobales.contentServicios}>
                                <Ionicons size={28} color="black" name={element.img} />
                                <View>
                                    <Text style={{textAlign:"center"}}>{element.titulo}</Text>
                                </View>
                            </View>
                        } />
                        </Pressable>

                    ))}
                </View>

            </View>
        </SafeAreaView>
    )
}
