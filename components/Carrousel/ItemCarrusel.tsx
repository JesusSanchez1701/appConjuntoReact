import { Text, Image, StyleSheet } from "react-native"
import { ItemCarruselComponent } from "./types"
import { LinearGradient } from "expo-linear-gradient"
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated"

const ITEM_WIDTH = 300;
const ITEM_MARGIN = 10;
const SNAP_INTERVAL = ITEM_WIDTH + ITEM_MARGIN * 2;

export default function ItemCarrusel({ _item, _index, _scrollx }: ItemCarruselComponent) {
    const rAnimatedStyle = useAnimatedStyle(() => {
        const inputRange = [(_index - 1) * SNAP_INTERVAL, _index * SNAP_INTERVAL, (_index + 1) * SNAP_INTERVAL];
        return {
            transform: [
                {
                    translateX: interpolate(
                        _scrollx.value,
                        inputRange,
                        [-ITEM_WIDTH * 0.1, 0, ITEM_WIDTH * 0.1], // Efecto de paralaje más sutil
                        Extrapolation.CLAMP
                    ),

                },
                {
                    scale: interpolate(
                        _scrollx.value,
                        inputRange,
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    )
                }
            ],
        }
    })
    return (
        <Animated.View style={[styles.itemContainer, rAnimatedStyle]}>
            <Image style={{ width: 300, height: 500, borderRadius: 20 }} source={{ uri: `${_item.imagen}` }} alt={_item.titulo} />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.background}>
                <Text style={styles.titulo}>{_item.titulo}</Text>

            </LinearGradient>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: ITEM_WIDTH,
        marginHorizontal: ITEM_MARGIN,
    },
    background: {
        position: 'absolute',
        height: 500,
        width: 300,
        padding: 20,
        borderRadius: 20,
        justifyContent: 'flex-end'
    },
    titulo: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    }
})
