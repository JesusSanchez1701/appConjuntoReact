import { View, Text, Pressable, TouchableOpacity, ScrollView } from "react-native"
import Card from "../../components/Card/Card";
import styles from "./styles/styles";
import Button from "../../components/Button/Button";
import globalStyles from "../../StylesGlobal/stylesGlobal";
import { useGenerales } from "../../Hooks/useGenerales";
import Buscador from "../../components/Buscador/Buscador";
import Modal from "react-native-modal";
import { Inputs } from "../../components/Inputs/Inputs";
import AntDesign from '@expo/vector-icons/AntDesign';
import Carrousel from "../../components/Carrousel/Carrousel";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const { modalVisible, setModalVisible } = useGenerales()
    const navigation = useNavigation<any>()

    return (
        <>
            {/* modal para crear publicacion  */}
            <Modal isVisible={modalVisible}>
                <View style={globalStyles.contenedorModal}>
                    <View style={globalStyles.headerModal}>
                        <Text style={globalStyles.titleModal}>Nuevo anuncio</Text>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <AntDesign name="close" size={24} color="black" />

                        </Pressable>
                    </View>
                    <View style={globalStyles.containerInputs}>
                        <Text>Nombre de la publicacion</Text>
                        <Inputs _defaultValue="" _name="nompublicacion" _type="default" _placeholder="Ej. venta de articulos" />
                    </View>

                    <View style={globalStyles.containerInputs}>
                        <Text>Descripcion</Text>
                        <Inputs _defaultValue="" _name="descpublicacion" _type="default" _placeholder="Describe tu publicacion" />
                    </View>

                    <View style={globalStyles.containerInputs}>
                        <Text>Url de la publicacion</Text>
                        <Inputs _defaultValue="" _name="urlpublicacion" _type="default" _placeholder="https://ejemplo.com/publicacion" />
                    </View>

                    <View style={globalStyles.containerInputs}>
                        <Text>Imágenes de la publicación</Text>
                        <TouchableOpacity onPress={() => { /* Lógica para seleccionar imagen irá aquí */ }} style={globalStyles.fileInput}>
                            <Text style={{ color: '#6b7280' }}>Seleccionar imágenes...</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={globalStyles.containerInputs}>
                        <Text>Contacto</Text>
                        <Inputs _defaultValue="" _name="contactoPub" _type="default" _placeholder="Numero de celular o correo" />
                    </View>
                    <View style={globalStyles.contentbtnModal}>
                        <Button _style={globalStyles.btnCanelar} _onPress={() => setModalVisible(false)} _styleText={globalStyles.textbtnCancelar} _title="Cancelar" />
                        <Button _style={globalStyles.btnModal} _onPress={() => setModalVisible(false)} _title="Publicar" />
                    </View>
                </View>
            </Modal>

            <ScrollView>
                {/* view del home */}
                <View style={styles.container}>
                    <Buscador />
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
                        <Pressable onPress={() => navigation.navigate('Publicaciones')}>
                            <Text style={styles.textoAnuncio}>Ver todo</Text>
                        </Pressable>
                    </View>

                    
                </View>

                <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent:"center",
                        alignItems:"center",
                        marginTop:20
                    }}>
                        <Carrousel />
                    </View>
            </ScrollView>

        </>

    )
}
