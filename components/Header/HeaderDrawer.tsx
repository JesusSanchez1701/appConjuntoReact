import { FontAwesome } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeader } from './Hooks/useHeader';
import styles from "./styles/styles";
export default function HeaderDrawer() {
    const { infoUsuario, menu, cerrarSesion } = useHeader()
    const { nombres } = infoUsuario

    const navigation = useNavigation<any>();
    type dataMenu = {
        item: string,
        descripcion: string,
        ruta: string
    }
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
                
                {menu.map((dataMenu: dataMenu) => (
                    <Pressable key={dataMenu.ruta} onPress={() => navigation.navigate(`${dataMenu.ruta}`)}>
                        <View style={[styles.contentInfoUser, styles.cardsMenu]}>
                            <FontAwesome name={`${dataMenu.item}`} size={24} color="black" />
                            <Text style={styles.textOpciones}>{dataMenu.descripcion}</Text>
                        </View>
                    </Pressable>
                ))}


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
