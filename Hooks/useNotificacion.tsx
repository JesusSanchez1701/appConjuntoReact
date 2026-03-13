import notifee, { AndroidCategory, AndroidImportance, AndroidVisibility, EventType } from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInfoUserLLamada } from '../redux/citofoniaReducer';
function useNotificacion() {

    const navigation = useNavigation<any>()
    const dispatch = useDispatch()

    // Escuchar eventos cuando la app está ABIERTA (Foreground)
    useEffect(() => {
        return notifee.onForegroundEvent(({ type, detail }) => {
            if (type === EventType.PRESS) {
                navigation.navigate('ModalCall')
            }

        });
    }, []);

    const notificacionLlamada = async (infoLlamada: Object | any) => {
        await notifee.requestPermission();
        console.log(infoLlamada, "ddddd")

        // 1. Definir las categorías y acciones para iOS
        await notifee.setNotificationCategories([
            {
                id: 'incoming-call', // Este ID debe coincidir con el categoryId de abajo
                actions: [
                    {
                        id: 'answer',
                        title: 'Contestar',
                        foreground: true, // Abre la aplicación al presionar
                    },
                    {
                        id: 'decline',
                        title: 'Colgar',
                        destructive: true, // Se muestra en rojo (típico para colgar/borrar)
                    },
                ],
            },
        ]);

        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Llamadas Entrantes',
            importance: AndroidImportance.HIGH,
            visibility: AndroidVisibility.PUBLIC,
            sound: 'default',
            vibration: true,
        });

        await notifee.displayNotification({
            title: 'LLamada entrante',
            body: `Tienes una llamada de la torre ${infoLlamada[0]?.torre} apartamento ${infoLlamada[0]?.apartamento}`,
            android: {
                channelId,
                category: AndroidCategory.CALL, // Importante: Define que es una llamada
                importance: AndroidImportance.HIGH,
                visibility: AndroidVisibility.PUBLIC,
                ongoing: true, // No se puede cerrar deslizando
                loopSound: true, // El sonido se repite (como un timbre)

                // Esto hace que la app se abra en pantalla completa automáticamente
                fullScreenAction: {
                    id: 'default',
                },
            },
            ios: {
                critical: true,
                categoryId: 'incoming-call', // 2. Aquí vinculas la categoría definida arriba
                sound: 'default',
                foregroundPresentationOptions: {
                    badge: true,
                    sound: true,
                    banner: true,
                    list: true,
                },
                attachments: [

                ]
            }
        });

        dispatch(setInfoUserLLamada(infoLlamada))

    }


    return {
        notificacionLlamada
    }
}
export { useNotificacion };
