import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
function useGenerales() {
    const [modalVisible, setModalVisible] = useState(false)
    
    const informacionUsuario = async () => {
        const infoUsuario = await AsyncStorage.getItem("infoUsuario")
        if (infoUsuario) {
            return JSON.parse(infoUsuario)
        }
        return null
    }

    return {
        modalVisible,
        setModalVisible,
        informacionUsuario
    }
}
export { useGenerales }