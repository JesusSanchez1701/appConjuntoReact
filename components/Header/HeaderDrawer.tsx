import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeader } from './Hooks/useHeader';
import styles from "./styles/styles";
export default function HeaderDrawer() {
    const { infoUsuario, cerrarSesion } = useHeader()
    const { nombres } = infoUsuario

    const navigation = useNavigation<any>();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.container, { flex: 1 }]}>
                <View style={styles.contentInfoUser}>
                    <Feather name="user" size={24} color="black" />
                    <Text>{nombres}</Text>
                </View>

                <View style={styles.accesosDirectos}>
                    <Text style={styles.accesosDirectosText}>Tus accesos directos</Text>
                </View>

                <Pressable onPress={() => navigation.navigate("Conjunto")}>
                    <View style={[styles.contentInfoUser, styles.cardsMenu]}>
                        <MaterialIcons name="apartment" size={24} color="black" />
                        <Text style={styles.textOpciones}>Mis Conjuntos</Text>
                    </View>
                </Pressable>


                <Pressable onPress={() => navigation.navigate("Conjunto")}>
                    <View style={[styles.contentInfoUser, styles.cardsMenu]}>
                        <FontAwesome5 name="clipboard-list" size={24} color="black" />
                        <Text style={styles.textOpciones}>Mis solicitudes</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Servicios")}>
                    <View style={[styles.contentInfoUser, styles.cardsMenu]}>
                        <FontAwesome5 name="home" size={24} color="black" />
                        <Text style={styles.textOpciones}>Pago de servicios</Text>
                    </View>
                </Pressable>
                {/* btn cerrar sesion */}
                <Pressable
                    style={[styles.contentCerrar]}
                    onPress={cerrarSesion}
                >
                    <View style={styles.contentInfoUser}>
                        <MaterialIcons name="exit-to-app" size={24} color="black" />
                        <Text style={styles.textOpciones}>Cerrar Sesión</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>

    )
}
