import { ScrollView, Text, View } from "react-native"
import Button from "../../components/Button/Button"
import Card from "../../components/Card/Card"
import { Inputs } from "../../components/Inputs/Inputs"
import globalStyles from "../../StylesGlobal/stylesGlobal"
import styles from "./styles/styles"

//hooks
import { useConfiguracion } from "./Hooks/useConfiguracion"

export default function Configuracion() {

  const { infoUsuario } = useConfiguracion()
  return (
    <>
      <ScrollView>
        <View style={styles.containerPage}>
          {/* info usuario */}
          <Card _style={styles.cardStyles} _children={
            <>
              <View style={styles.contanerTitle}>
                <Text style={styles.tituloCard}>Informacion del usuario</Text>
              </View>
              <View style={styles.containerInfo}>
                <Text>Nombres:</Text>
                <Text>{infoUsuario?.nombres}</Text>
              </View>

              <View style={styles.containerInfo}>
                <Text>Correo:</Text>
                <Text>{infoUsuario?.correo}</Text>
              </View>

              <View style={styles.containerInfo}>
                <Text>Apartamento:</Text>
                <Text>Torre: {infoUsuario?.torre} Apartamento: {infoUsuario?.apartamento}</Text>
              </View>

              <View style={styles.containerInfo}>
                <Text>Celular:</Text>
                <Text>{infoUsuario?.celular}</Text>
              </View>

              <View style={styles.containerInfo}>
                <Text>Documento:</Text>
                <Text>{infoUsuario?.documento}</Text>
              </View>
            </>
          } />

          {/* card publicaciones */}
          <Card _style={styles.cardStyles} _children={
            <>
              <View style={styles.contanerTitle}>
                <Text style={styles.tituloCard}>Publicaciones realizadas</Text>
              </View>
              <View style={styles.containerInfo}>
                <Text>Venta de bicicleta</Text>
                <Text style={globalStyles.textoOlidoPassword}>Ver</Text>
              </View>

              <View style={styles.containerInfo}>
                <Text>Corre</Text>
                <Text style={globalStyles.textoOlidoPassword}>Ver</Text>
              </View>
            </>
          } />


          {/* card actualizar informacion */}

          <Card _style={styles.cardStyles} _children={
            <>
              <View style={styles.contanerTitle}>
                <Text style={styles.tituloCard}>Actualizar informacion</Text>
              </View>
              <View style={globalStyles.containerInputs}>
                <Text>Nombres y apellidos</Text>
                <Inputs _defaultValue={infoUsuario?.nombres} _name="nombres" _type="default" _placeholder="Ingrese su nombre" />
              </View>

              <View style={globalStyles.containerInputs}>
                <Text>Documento</Text>
                <Inputs _defaultValue={infoUsuario?.documento} _name="documento" _type="default" _placeholder="Ingrese su numero de documento" />
              </View>

              <View style={globalStyles.containerInputs}>
                <Text>Correo</Text>
                <Inputs _defaultValue={infoUsuario?.correo} _name="correo" _type="email-address" _placeholder="Ingrese su correo" />
              </View>

              <View style={globalStyles.containerInputs}>
                <Text>Celular</Text>
                <Inputs _defaultValue={infoUsuario?.celular} _name="celular" _type="phone-pad" _placeholder="Ingrese su celular" />
              </View>

              <View style={globalStyles.containerInputs}>
                <Text>Contrasena</Text>
                <Inputs _name="pass" _type="default" _secureTextEntry={true} _placeholder="Ingrese su contrasena" />
              </View>

              <View style={globalStyles.containerInputs}>
                <Button _style={styles.buttonActualizar} _title="Actualizar" />
              </View>
            </>
          } />
        </View>
      </ScrollView>
    </>

  )
}
