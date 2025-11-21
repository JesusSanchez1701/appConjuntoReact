import { createStaticNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header/Header";
//pages
import Login from "../pages/Login/Login";
import Registro from "../pages/Registro/Registro";
import Home from "../pages/Home/Home";
import Citofonia from "../pages/Citofonia/Citofonia";
import Configuracion from "../pages/Configuracion/Configuracion";
import Publicaciones from "../pages/Publicaciones/Publicaciones";
function useNavigation() {
    const Tabs = createBottomTabNavigator({
        screenOptions: ({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                const icons: Record<string, any> = {
                    Home: 'home',
                    Citofonia: 'phone-in-talk',
                    Configuracion: 'cog',
                };
                return (
                    <MaterialCommunityIcons
                        name={icons[route.name]}
                        color={color}
                        size={size}
                    />
                );
            },
            headerShown: true,
            header: () => (
                <Header />
            ),
            tabBarActiveTintColor: '#f27623ff',
            tabBarInactiveTintColor: 'gray',
        }),
        screens: {
            Home: Home,
            Citofonia: Citofonia,
            Configuracion: Configuracion,
        }
    });

    
    //navigationTabs
    const NavigationTabs = createStaticNavigation(Tabs);

    //navegacion por vistas
    const RootStack = createNativeStackNavigator({
        screenOptions() {
            return {
                headerShown: false,
            }
        },
        screens: {
            Login: Login,
            Registro: Registro,
            Views: Tabs,
            Publicaciones: Publicaciones,

        }
    })


    //navigationScreensLogin 
    const NavigationScreensLogin = createStaticNavigation(RootStack);

    //navegacion para paginas del home
    return {
        NavigationTabs,
        NavigationScreensLogin,
    }
}
export { useNavigation };