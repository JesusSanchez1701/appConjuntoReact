import React from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { default as globalStyles } from '../../StylesGlobal/stylesGlobal'
import { usePublicaciones } from './Hooks/usePublicaciones'
import styles from './styles/styles'
import { MisPublicacionesComponent, PaginadorComponent } from './types'
export default function MisPublicaciones({ publicaciones }: MisPublicacionesComponent) {
    const rutaImgCartelera = "http://localhost:8086/img/cartelera/conjunto_1/usuario_1/"
    const { abrirNavegador, countImg, setCountImg } = usePublicaciones()
    const onViewableItemsChanged = ({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCountImg(viewableItems[0].index);
        }
    };
    return (
        <ScrollView>
            <View>
                {publicaciones.infPublicaciones.respuesta.data.map((publicaciones: any, index: number) => (
                    <View
                        style={[styles.containerPub]}
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
                <Paginador _infoPaginador={publicaciones.infPublicaciones.respuesta} />
            </View>
        </ScrollView>
    )
}

const Paginador = ({ _infoPaginador }: PaginadorComponent) => {

    return (
        <View style={styles.containerPaginador}>
            {typeof _infoPaginador != "undefined" && Array.from({ length: _infoPaginador?.totalPages }).map((_, i) => (
                <Pressable onPress={() => console.log(i, "click")} key={i} style={styles.buttonPag}>
                    <Text style={styles.numerosPag}>{i + 1}</Text>
                </Pressable>
            ))}

        </View>
    )
}
