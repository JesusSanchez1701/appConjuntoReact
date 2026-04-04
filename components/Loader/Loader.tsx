import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

interface LoaderProps {
    visible?: boolean;
}

export default function Loader({ visible = true }: LoaderProps) {
    return (
        <Modal
            transparent={true}
            animationType="none"
            visible={visible}
            statusBarTranslucent={true} // Asegura que cubra también la barra de estado
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semi-transparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
