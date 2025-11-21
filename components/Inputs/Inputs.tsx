import { StyleSheet, TextInput, View, useColorScheme } from 'react-native';
import { InputComponent } from './types';

function Inputs({ _placeholder, _type="default", _defaultValue, _secureTextEntry, onChange, onBlur, value}: InputComponent) {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    // Selecciona el estilo del input basado en el tema
    const inputStyle = isDarkMode ? styles.inputDark : styles.inputLight;

    return (
        <View>
            <TextInput
                
                style={inputStyle}
                placeholder={_placeholder}
                // Ajusta el color del placeholder para que sea visible en ambos temas
                placeholderTextColor={isDarkMode ? '#9ca3af' : '#6b7280'}
                defaultValue={_defaultValue}
                secureTextEntry={_secureTextEntry}
                keyboardType={_type}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
            />
        </View>
    );
}

export { Inputs };

// Estilos definidos directamente en el componente
const styles = StyleSheet.create({
    inputLight: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderColor: '#d1d5db', // gray-300
        color: '#111827', // gray-900
    },
    inputDark: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: '#374151', // gray-700
        borderColor: '#4b5563', // gray-600
        color: '#f9fafb', // gray-50
    },
});
