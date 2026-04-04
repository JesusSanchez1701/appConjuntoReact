import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import { Controller, useForm } from 'react-hook-form';
import { FlatList, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Carrousel from "../../components/Carrousel/Carrousel";
import { Inputs } from "../../components/Inputs/Inputs";
import globalStyles from "../../StylesGlobal/stylesGlobal";
import { useHome } from './hooks/useHome';
import styles from "./styles/styles";
export default function Home() {
    const {
        setModalVisible,
        seleccionarImagen,
        realizarPublicacion,
        listarTodasPublicaciones,
        image,
        modalVisible,
    } = useHome()

    // form para crear publicacion
    const { control, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: {
                nompublicacion: '',
                descpublicacion: '',
                urlpublicacion: '',
                contactoPub: ''
            }
        }
    )

    return (
        <>
            {/* modal para crear publicacion  */}
            <Modal scrollHorizontal={true} isVisible={modalVisible}>
                <View style={globalStyles.contenedorModal}>
                    <View style={globalStyles.headerModal}>
                        <Text style={globalStyles.titleModal}>Nuevo anuncio</Text>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <AntDesign name="close" size={24} color="black" />
                        </Pressable>
                    </View>

                    <View style={styles.containerImgPublicacion}>
                        <FlatList
                            data={image}
                            keyExtractor={(item) => item.uri}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Image
                                    source={{ uri: item.uri }}
                                    style={styles.imagesPublicacion}
                                />
                            )}
                        />


                    </View>
                    <View style={globalStyles.containerInputs}>
                        <Text>Nombre de la publicacion</Text>
                        <Controller
                            control={control}
                            name='nompublicacion'
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Inputs
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    _defaultValue=""
                                    _name="nompublicacion"
                                    _type="default"
                                    _placeholder="Ej. venta de articulos"
                                />

                            )}
                        />
                        {errors.nompublicacion && <Text style={globalStyles.textErrorForm}>Nombre de la publicación es requerido</Text>}

                    </View>

                    <View style={globalStyles.containerInputs}>
                        <Text>Descripcion</Text>
                        <Controller
                            control={control}
                            name='descpublicacion'
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Inputs
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    _defaultValue=""
                                    _name="descpublicacion"
                                    _type="default"
                                    _placeholder="Describe tu publicacion"
                                />
                            )}
                        />
                        {errors.descpublicacion && <Text style={globalStyles.textErrorForm}>Descripción de la publicación es requerida</Text>}

                    </View>

                    <View style={globalStyles.containerInputs}>
                        <Text>Url de la publicacion</Text>
                        <Controller
                            control={control}
                            name='urlpublicacion'
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Inputs
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    _defaultValue=""
                                    _name="urlpublicacion"
                                    _type="default"
                                    _placeholder="https://ejemplo.com/publicacion"
                                />
                            )}
                        />
                        {errors.urlpublicacion && <Text style={globalStyles.textErrorForm}>URL de la publicación es requerida</Text>}
                    </View>

                    <View style={globalStyles.containerInputs}>
                        <Text>Imágenes de la publicación</Text>
                        <TouchableOpacity style={globalStyles.fileInput}>
                            <Pressable onPress={seleccionarImagen}>
                                <Text style={{ color: '#6b7280' }}>Seleccionar imágenes...</Text>
                            </Pressable>
                        </TouchableOpacity>
                    </View>


                    <View style={globalStyles.containerInputs}>
                        <Text>Contacto</Text>
                        <Controller
                            control={control}
                            name='contactoPub'
                            rules={{ required: true }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Inputs
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    _defaultValue=""
                                    _name="contactoPub"
                                    _type="default"
                                    _placeholder="Numero de celular o correo"
                                />
                            )}
                        />
                        {errors.contactoPub && <Text style={globalStyles.textErrorForm}>Contacto es requerido</Text>}
                    </View>
                    <View style={globalStyles.contentbtnModal}>
                        <Button _style={globalStyles.btnCanelar} _onPress={() => setModalVisible(false)} _styleText={globalStyles.textbtnCancelar} _title="Cancelar" />
                        <Button _style={globalStyles.btnModal} _onPress={handleSubmit(realizarPublicacion)} _title="Publicar" />
                    </View>
                </View>
            </Modal>
            <ScrollView>

                {/* view del home */}
                <View style={styles.container}>
                    <Card _imagen="https://urbansa.co/wp-content/uploads/2021/12/2.png"
                        _body={
                            <>
                                <Text>Publica un anuncio para vender o alquilar tu propiedad</Text>
                                <View style={globalStyles.contenedorButton}>
                                    <Button _onPress={() => setModalVisible(true)} _title="Publicar anuncio" />
                                </View>
                            </>
                        }
                        _titulo="Publica un anuncio"
                    />

                    <View style={styles.containertextoAnuncios}>
                        <Text style={styles.textoAnuncio}>Anuncios</Text>
                        <Pressable onPress={listarTodasPublicaciones}>
                            <Text style={styles.textoAnuncio}>Ver todo</Text>
                        </Pressable>
                    </View>


                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20
                }}>
                    <Carrousel />
                </View>
            </ScrollView>

        </>

    )
}
