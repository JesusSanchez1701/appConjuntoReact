import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, Text, View } from "react-native";
import Buscador from "../../components/Buscador/Buscador";
import Card from "../../components/Card/Card";
import globalStyles from "../../StylesGlobal/stylesGlobal";
import { CitofoniaProvider } from "./Context/CitofoniaContext";
import { useCitofonia } from "./Hooks/useCitofonia";
import styles from "./styles/styles";

const VistaCitofonia = () => {
  const { listUsuarios, llamarUsuario } = useCitofonia()

  return (
    <View style={styles.container}>
      {/* contacto a porteria */}
      <View style={styles.containerCitofonia}>
        <Card _style={styles.cardStyles} _children={
          <View style={styles.containerCitofonia}>
            <View style={[styles.buttonCardCitofonia, styles.colorContainerIcon]}>
              <MaterialCommunityIcons name="police-badge" size={24} style={styles.IconbuttonCall} />
            </View>
            <View>
              <Text style={styles.textoCard}>Porteria</Text>
              <Text style={globalStyles.textoOlidoPassword}>Contacto prioritatrio</Text>
            </View>
            <View style={[styles.buttonCardCitofonia, styles.colorContainerIcon]}>
              <Pressable onPress={() => llamarUsuario("1")}>
                <Feather name="phone" size={24} style={styles.IconbuttonCall} />

              </Pressable>
            </View>
          </View>
        } />
      </View>

      {/* contacto de administracion */}
      <View style={styles.containerCitofonia}>
        <Card _style={styles.cardStyles} _children={
          <View style={styles.containerCitofonia}>
            <View style={[styles.buttonCardCitofonia, styles.colorContainerIcon]}>
              <MaterialCommunityIcons name="police-badge" size={24} style={styles.IconbuttonCall} />
            </View>
            <View>
              <Text style={styles.textoCard}>Administracion</Text>
              <Text style={globalStyles.textoOlidoPassword}>Contacto prioritatrio</Text>
            </View>
            <View style={[styles.buttonCardCitofonia, styles.colorContainerIcon]}>
              <Feather name="phone" size={24} style={styles.IconbuttonCall} />
            </View>
          </View>
        } />
      </View>

      <View>
        <Text style={styles.textRecientes}>Recientes y Contactos</Text>
      </View>
      {/* buscador de contactos */}
      <Buscador />

      {/* la lista de los contactos */}
      {listUsuarios.map((element: any) => (
        <Card key={element?.id_usuario} _style={styles.cardStyles} _children={
          <View style={styles.containerCitofonia}>
            <View style={[styles.buttonCardCitofonia, styles.colorContainerIcon]}>
              <MaterialIcons name="apartment" size={24} color="black" style={styles.IconbuttonCall} />
            </View>
            <View>
              <Text style={styles.textoCard}>Torre: {element?.torre} Apartamento: {element?.apartamento}</Text>
            </View>
            <View style={[styles.buttonCardCitofonia, styles.colorContainerIcon]}>
              <Pressable onPress={() => llamarUsuario(element?.id_usuario)}>
                <Feather name="phone" size={24} style={styles.IconbuttonCall} />
              </Pressable>
            </View>
          </View>
        } />
      ))}
    </View>
  )
}
export default function Citofonia() {

  return (
    <CitofoniaProvider>
      <VistaCitofonia />
    </CitofoniaProvider>
  )
}
