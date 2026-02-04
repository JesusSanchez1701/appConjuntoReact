import { LinearGradient } from 'expo-linear-gradient';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import Button from '../../components/Button/Button';
import { Inputs } from '../../components/Inputs/Inputs';
import globalStyles from '../../StylesGlobal/stylesGlobal';
import { useRegistro } from './useRegistro/useRegistro';


export default function Registro() {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    const textStyle = isDarkMode ? globalStyles.textDark : globalStyles.textLight;

    const { openLogin, registrarUsuario } = useRegistro();

    const { control, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: {
                nombres: '',
                correo: '',
                apartamento: '',
                torre: '',
                celular: '',
                documento: '',
                pass: '',
                codConjunto: ''
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


            <Text style={[globalStyles.title, textStyle]}>Crea tu cuenta</Text>

            <View style={globalStyles.contenedorTxt}>
                <Text style={[textStyle]}>Unete para empezar a conectar</Text>
            </View>


                <View style={{ width: '100%' }}>
                    <Controller
                        control={control}
                        name='nombres'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Inputs
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                _placeholder='Nombres y apellidos'
                                _type='default'
                            />
                        )}
                    />
                    {errors.nombres && <Text style={globalStyles.textErrorForm}>Nombres y apellidos son obligatorios.</Text>}

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
                            />

                        )}
                    />
                    {errors.correo && <Text style={globalStyles.textErrorForm}>El correo es obligatorio.</Text>}
                </View>

                <View style={styles.formRow}>
                <View style={styles.inputCol}>
                    <Controller
                        control={control}
                        name='apartamento'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Inputs
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                _placeholder='Apartamento'
                                _type='default'
                            />

                        )}
                    />
                    {errors.apartamento && <Text style={globalStyles.textErrorForm}>El apartamento es obligatorio.</Text>}
                </View>

                <View style={styles.inputCol}>
                    <Controller
                        control={control}
                        name='torre'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Inputs
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                _placeholder='Torre'
                                _type='default'
                            />

                        )}
                    />
                    {errors.torre && <Text style={globalStyles.textErrorForm}>La torre es obligatoria.</Text>}
                </View>
                </View>

                <View style={styles.formRow}>
                <View style={styles.inputCol}>
                    <Controller
                        control={control}
                        name='documento'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Inputs
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                _placeholder='Documento'
                                _type='default'
                            />

                        )}
                    />
                    {errors.documento && <Text style={globalStyles.textErrorForm}>El número de documento es obligatorio.</Text>}
                </View>

                <View style={styles.inputCol}>
                    <Controller
                        control={control}
                        name='celular'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Inputs
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                _placeholder='Celular'
                                _type='phone-pad'
                            />
                        )}
                    />
                    {errors.celular && <Text style={globalStyles.textErrorForm}>El celular es obligatorio.</Text>}

                </View>
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
                    {errors.pass && <Text style={globalStyles.textErrorForm}>La contraseña es obligatoria.</Text>}
                </View>

                <View style={{ width: '100%' }}>
                    <Controller
                        control={control}
                        name='codConjunto'
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Inputs
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                _placeholder='Código Conjunto'
                                _type='default'
                            />

                        )}
                    />
                    {errors.codConjunto && <Text style={globalStyles.textErrorForm}>El código del conjunto es obligatorio.</Text>}
                </View>

                <View style={globalStyles.contenedorButton}>
                    <Button _onPress={handleSubmit(registrarUsuario)} _title='Registrate' />
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

const styles = StyleSheet.create({
    formRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputCol: {
        width: '48%',
        marginRight: 8,
    },
});
