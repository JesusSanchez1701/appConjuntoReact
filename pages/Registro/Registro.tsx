import { Text, View, useColorScheme, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Inputs } from '../../components/Inputs/Inputs';
import Button from '../../components/Button/Button';
import globalStyles from '../../StylesGlobal/stylesGlobal';
import { useRegistro } from './useRegistro/useRegistro';

export default function Registro() {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    const textStyle = isDarkMode ? globalStyles.textDark : globalStyles.textLight;

    const {openLogin} = useRegistro();


    return (
        <LinearGradient
            colors={['#ffedd5', '#ffffff', '#fffbeb']}
            style={globalStyles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <Text style={[globalStyles.title, textStyle]}>Crea tu cuenta</Text>

            <View style={globalStyles.contenedorTxt}>
                <Text style={[textStyle]}>Unete para empezar a conectar</Text>
            </View>

            <View style={{width: '100%'}}>
                <Inputs _placeholder='Correo Electrónico' _type='email-address' />
            </View>
            <View style={{width: '100%'}}>
                <Inputs _placeholder='Nombres y apellidos' _type='default' />
            </View>
            <View style={{width: '100%'}}>
                <Inputs _placeholder='Teléfono' _type='phone-pad' />
            </View>
            <View style={{width: '100%'}}>
                <Inputs _placeholder='Dirección' _type='default' />
            </View>
            <View style={{width: '100%'}}>
                <Inputs _placeholder='Contraseña' _secureTextEntry={true} _type='default' />
            </View>

            <View style={globalStyles.contenedorButton}>
                <Button _title='Registrate' />
            </View>

            <View style={globalStyles.contenedorEnd}>
                <Text style={textStyle}>Ya tienes una cuenta? </Text>
                <TouchableOpacity>
                    <Pressable onPress={openLogin}>
                    <Text style={globalStyles.textoOlidoPassword}>Inicia Sesión</Text>
                    </Pressable>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}
