import { View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import globalStyles from "../../StylesGlobal/stylesGlobal";
export default function Header() {
    return (
        <View style={globalStyles.headerapp}>
            <Ionicons name="menu" size={30} color="black" />
            <Ionicons name="notifications-circle" size={30} color="black" style={{ marginRight: 15 }} />
        </View>
    )
}
