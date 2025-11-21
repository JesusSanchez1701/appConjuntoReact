import { StyleSheet } from 'react-native';

const baseInputStyle = {
  width: 300,
  height: 50,
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 15,
  fontSize: 16,
  marginBottom: 15,
};

const styles = StyleSheet.create({
  inputLight: {
    ...baseInputStyle,
    backgroundColor: '#fff',
    borderColor: '#d1d5db', // gray-300
    color: '#111827', // gray-900
  },
  inputDark: {
    ...baseInputStyle,
    backgroundColor: '#374151', // gray-700
    borderColor: '#4b5563', // gray-600
    color: '#f9fafb', // gray-50
  },
});

export default styles;