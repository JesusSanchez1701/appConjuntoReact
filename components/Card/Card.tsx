import { View, Text } from "react-native"
import { Image } from "react-native"
import styles from "./styles/styles"
import { CardComponent } from "./types"
export default function Card({ _imagen, _body, _titulo, _children, _style }: CardComponent) {
    return (
        <View style={[styles.containerCard, _style]}>
            {_children ? _children : <>
                <View style={{ width: "100%" }}>
                    <Image style={styles.imagenCard} source={{ uri: `${_imagen}` }} />
                </View>
                <View style={styles.bodyCard}>
                    <Text style={styles.titleCard}>{_titulo}</Text>
                    {_body}
                </View>
                
            </>}

        </View>
    )
}
