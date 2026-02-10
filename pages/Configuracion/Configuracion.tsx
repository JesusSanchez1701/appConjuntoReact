import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, View } from "react-native";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { Inputs } from "../../components/Inputs/Inputs";

import globalStyles from "../../StylesGlobal/stylesGlobal";
import styles from "./styles/styles";

//hooks
import { useConfiguracion } from "./Hooks/useConfiguracion";

export default function Configuracion() {

  const { infoUsuario, actualizarUsuario } = useConfiguracion()
  const { control, handleSubmit, reset, formState: { errors } } = useForm(
    {
      defaultValues: {
        nombres: "",
        documento: "",
        correo: "",
        celular: "",
        pass: ""
      }
    }
  )

  useEffect(() => {
    if (infoUsuario) {
      reset({
        nombres: infoUsuario.nombres,
        documento: infoUsuario.documento,
        correo: infoUsuario.correo,
        celular: infoUsuario.celular,
        pass: ''
      });
    }
  }, [infoUsuario, reset]);
  return (
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
              <Controller
                control={control}
                name='nombres'
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Inputs
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    _defaultValue={value}
                    _type="default"
                    _placeholder="Ingrese su nombre"
                  />

                )}
              />
              {errors.nombres && <Text style={globalStyles.textErrorForm}>Nombres y apellidos son obligatorios.</Text>}

            </View>

            <View style={globalStyles.containerInputs}>
              <Text>Documento</Text>
              <Controller
                control={control}
                name="documento"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Inputs
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    _name="documento"
                    _type="default"
                    _placeholder="Ingrese su numero de documento"
                  />

                )}
              />
              {errors.documento && <Text style={globalStyles.textErrorForm}>El documento es bligatorio.</Text>}

            </View>

            <View style={globalStyles.containerInputs}>
              <Text>Correo</Text>
              <Controller
                control={control}
                name="correo"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Inputs
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    _name="correo"
                    _type="email-address"
                    _placeholder="Ingrese su correo"
                  />

                )}
              />
              {errors.correo && <Text style={globalStyles.textErrorForm}>El correo es obligatorio.</Text>}
            </View>

            <View style={globalStyles.containerInputs}>
              <Text>Celular</Text>
              <Controller
                control={control}
                name="celular"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Inputs
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    _name="celular"
                    _type="phone-pad"
                    _placeholder="Ingrese su celular"
                  />

                )}
              />
              {errors.celular && <Text style={globalStyles.textErrorForm}>El celular es obligatorio.</Text>}

            </View>

            <View style={globalStyles.containerInputs}>
              <Text>Contraseña</Text>
              <Controller
                control={control}
                name="pass"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Inputs
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    _type="default"

                    _placeholder="Ingrese su contraseña"
                    _secureTextEntry={true}
                  />

                )}
              />
              {errors.pass && <Text style={globalStyles.textErrorForm}>La contraseña es obligatoria.</Text>}

            </View>

            <View style={globalStyles.containerInputs}>
              <Button _onPress={handleSubmit(actualizarUsuario)} _style={styles.buttonActualizar} _title="Actualizar" />
            </View>
          </>
        } />
      </View>
    </ScrollView>
  )
}
