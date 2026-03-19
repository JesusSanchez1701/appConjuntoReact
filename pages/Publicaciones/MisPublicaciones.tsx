import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import globalStyles from '../../StylesGlobal/stylesGlobal'
import { usePublicaciones } from './Hooks/usePublicaciones'
import styles from './styles/styles'
export default function MisPublicaciones({ publicaciones }: Object) {
    const rutaImgCartelera = "http://localhost:8086/img/cartelera/conjunto_1/usuario_1/"
    const { abrirNavegador, countImg, setCountImg } = usePublicaciones()

    const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCountImg(viewableItems[0].index);
        }
    };
    
    return (
        <View>
            {publicaciones.infPublicaciones.map((publicaciones: any, index: number) => (
                <View
                    style={styles.containerPub}
                    key={index}
                >

                    <FlatList
                        data={publicaciones?.img[1]}
                        horizontal
                        keyExtractor={(item) => item.nombreImagen}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onViewableItemsChanged={onViewableItemsChanged}
                        decelerationRate="fast"
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    key={item}
                                    source={{
                                        uri: rutaImgCartelera + item.nombreImagen
                                    }}
                                    style={styles.imgLista}
                                />
                                {/* Overlay oscuro */}
                                <View style={styles.overlay} />
                            </View>
                        )}
                    />

                    <View style={styles.infoImage}>
                        <Text style={styles.textInfoImagen}>{countImg + 1} / {publicaciones?.img.length}</Text>
                    </View>
                    <View style={styles.infoPublicacion}>
                        <Text style={styles.tituloPublicacion}>{publicaciones?.img[0]?.nompublicacion}</Text>
                        <Text style={styles.descPublicacion}>{publicaciones?.img[0]?.descpublicacion}</Text>
                        <Text>Contacto: {publicaciones?.img[0]?.contactoPub}</Text>
                        <Pressable onPress={() => abrirNavegador(publicaciones?.img[0]?.urlpublicacion)}>
                            <Text>
                                <Text style={globalStyles.textoOlidoPassword}>Enlace publicacion </Text>
                            </Text>
                        </Pressable>
                    </View>
                </View>
            ))}
        </View>
    )
}
