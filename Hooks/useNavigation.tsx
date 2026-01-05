import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages
import Header from "../components/Header/Header";
import HeaderDrawer from "../components/Header/HeaderDrawer";
import Citofonia from "../pages/Citofonia/Citofonia";
import Configuracion from "../pages/Configuracion/Configuracion";
import Conjunto from "../pages/Conjunto/Conjunto";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Publicaciones from "../pages/Publicaciones/Publicaciones";
import Registro from "../pages/Registro/Registro";
function useNavigation() {

    //menu inferior
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
            Configuracion: Configuracion
        }
    });

    //menu lateral hamburgesa
    const MyDrawer = createDrawerNavigator({
        screenOptions: ({ route }) => ({
            drawerIcon: ({ color, size }) => {
                const icons: Record<string, any> = {
                    Inicio: 'home'
                };
                return (
                    <MaterialCommunityIcons
                        name={icons[route.name]}
                        color={color}
                        size={size}
                    />
                );
            },
            
            headerShown: false,
            drawerActiveBackgroundColor: '#f27623ff',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: 'gray',
        }),
        drawerContent: () => (
            <HeaderDrawer />
        ),
        screens: {
            Inicio: Tabs
        }
    })
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
            Views: MyDrawer,
            Conjunto: Conjunto,
            Publicaciones: Publicaciones
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
