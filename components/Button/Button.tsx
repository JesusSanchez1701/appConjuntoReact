import { TouchableOpacity, Text} from "react-native"
import { ButtonComponent } from "./types"
import styles from "./styles/styles"
export default function Button({_title, _onPress, _disabled, _style, _styleText}: ButtonComponent) {
  return (
    <TouchableOpacity onPress={_onPress} disabled={_disabled} style={[styles.button, _style]}>
      <Text style={[styles.textoButton, _styleText]}>{_title}</Text>
    </TouchableOpacity>
  )
}
