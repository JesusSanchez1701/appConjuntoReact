import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import Button from '../../components/Button/Button';
import { Inputs } from '../../components/Inputs/Inputs';
import globalStyles from '../../StylesGlobal/stylesGlobal';
import { useLogin } from './useLogin/useLogin';
export default function Login() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const { openIngresar, openRegistro } = useLogin();
  const { recordarUsuario, saveUser } = useLogin();

  const textStyle = isDarkMode ? globalStyles.textDark : globalStyles.textLight;

  //form
  const { control, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        correo: '',
        pass: '',
      }
    }
  )

  return (
    <LinearGradient
      colors={['#ffedd5', '#ffffff', '#fffbeb']}
      style={globalStyles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={[globalStyles.title, textStyle]}>Bienvenido de vuelta</Text>

      <View style={globalStyles.contenedorTxt}>
        <Text style={[textStyle]}>Inicia sesión para continuar</Text>
      </View>

      <View style={{ width: '100%' }}>
        <Controller
          control={control}
          name='correo'
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputs
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              _placeholder='Correo Electrónico'
              _type='email-address'
            />)}
        />
        {errors.correo && <Text style={globalStyles.textErrorForm}>El correo es obligatorio.</Text>}
      </View>

      <View style={{ width: '100%' }}>
        <Controller
          control={control}
          name='pass'
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputs
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              _placeholder='Contraseña'
              _secureTextEntry={true}
              _type='default'
            />
          )}
        />
        {errors.correo && <Text style={globalStyles.textErrorForm}>La contraseña es obligatoria.</Text>}

      </View>
      <View style={globalStyles.contenedorOlvidarPass}>
        <View style={globalStyles.contenedorCheckbox}>
          <Checkbox
            value={saveUser}
            onValueChange={recordarUsuario}
            color={saveUser ? '#4630EB' : undefined}
          />
          <Text style={textStyle}> Recuérdame</Text>
        </View>

        <TouchableOpacity>
          <Text style={globalStyles.textoOlidoPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <View style={globalStyles.contenedorButton}>
        <Button _onPress={handleSubmit(openIngresar)} _title='Iniciar Sesión' />
      </View>

      <View style={globalStyles.contenedorEnd}>

        <Text style={textStyle}>No tienes una cuenta? </Text>
        <TouchableOpacity>
          <Pressable onPress={openRegistro}>
            <Text style={globalStyles.textoOlidoPassword}>Registrate</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}


