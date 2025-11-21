import { ImageSlider } from "./sliderData"
import Animated, { useSharedValue, useAnimatedScrollHandler } from "react-native-reanimated"

const ITEM_WIDTH = 300; // Ancho de la image
const ITEM_MARGIN = 10; // Margen a cada lado del item
const SNAP_INTERVAL = ITEM_WIDTH + ITEM_MARGIN * 2; // Ancho total del item para el anclaje
export default function Carrousel() {
  const ItemCarrusel = require("./ItemCarrusel").default;
  const scrollx = useSharedValue(0)
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollx.value = event.contentOffset.x
    }
  
  })
  return (
    <>
      <Animated.FlatList
        data={ImageSlider}
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 30 // Ajustamos a un valor fijo para permitir que los items se asomen
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (<ItemCarrusel _item={item} _index={index} _scrollx={scrollx} />)} 
        snapToInterval={SNAP_INTERVAL}
        disableIntervalMomentum={true}
        decelerationRate="fast"
        onScroll={onScrollHandler}
        />
    </>
  )
}
