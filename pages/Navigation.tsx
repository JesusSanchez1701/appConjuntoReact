import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, PermissionsAndroid, View } from 'react-native';
import RNCallKeep, { IOptions } from 'react-native-callkeep';
import "react-native-get-random-values";

import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from "../Hooks/useNavigation";
const options: IOptions = {
  ios: {
    appName: 'MiAppVoIP',
    imageName: 'sim_icon',
    supportsVideo: true,
    maximumCallGroups: '1',
    maximumCallsPerCallGroup: '1',
  },
  android: {
    alertTitle: 'Permisos requeridos',
    alertDescription: 'Esta aplicación requiere acceso a llamadas.',
    cancelButton: 'Cancelar',
    okButton: 'Aceptar',
    imageName: 'phone_account_icon',
    additionalPermissions: [PermissionsAndroid.PERMISSIONS.READ_CONTACTS] as any[],
    foregroundService: {
      channelId: 'com.miapp.callkeep',
      channelName: 'Llamadas',
      notificationTitle: 'Llamada en curso',
    },
  },
};
const id = uuidv4();


export default function Navigation() {
  const { NavigationScreensLogin } = useNavigation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setupLibrary = async () => {
      try {
        // Inicializamos la librería de forma asíncrona dentro del useEffect
        await RNCallKeep.setup(options);
        RNCallKeep.setAvailable(true);
        console.log('CallKeep inicializado correctamente');
      } catch (err) {
        console.error('Error inicializando CallKeep:', err);
      } finally {
        // Marcamos que ya terminó la configuración para mostrar la UI
        setIsReady(true);
      }
    };

    setupLibrary();

    RNCallKeep.addEventListener('answerCall', ({ callUUID }) => {
      console.log(callUUID, "ff")
      console.log('Llamada contestada');
    });

    RNCallKeep.addEventListener('endCall', ({ callUUID }) => {
      console.log('Llamada terminada');
    });

    // Muy importante para iOS:
    RNCallKeep.addEventListener('didActivateAudioSession', () => {
      console.log('Sesión de audio activada');
    });

    return () => {
      RNCallKeep.removeEventListener('answerCall');
      RNCallKeep.removeEventListener('endCall');
    };
  }, []);
  const testCall = () => {
    console.log("shin")
    const handle = '12345678'; // Número que aparecerá
    const contactName = 'Llamada de Prueba';

    console.log('Disparando llamada de prueba...');

    // Esto hace que aparezca la pantalla nativa de llamada
    RNCallKeep.displayIncomingCall(id, handle, contactName);
  };
  // Mientras se configura, mostramos un cargando (o nada)
  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Ahora sí, devolvemos el componente de navegación
  return (
    <View>
      <View style={{ justifyContent: 'center', marginTop: '50%' }}>
        <Button title="Simular Llamada Entrante" onPress={testCall} />

      </View>
      {/* <NavigationScreensLogin /> */}

    </View>
  );
}



