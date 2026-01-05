import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";
import globalStyles from "../../StylesGlobal/stylesGlobal";
export default function Header() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.headerapp}>
            <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Ionicons name="menu" size={30} color="black" />
            </Pressable>
            <Ionicons name="notifications-circle" size={30} color="black" style={{ marginRight: 15 }} />
        </View>
    )
}
