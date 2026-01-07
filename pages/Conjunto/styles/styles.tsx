import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
   
    infoContainer:{
        width:'100%',
    },
    contentImg:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:5
    },
    imagenConjunto:{
       width:100,
       height:100, 
       borderRadius:10,
       marginLeft:10,
    },
    contentTexto:{
        marginLeft:15
    },
    tituloConjunto:{
        fontSize:12,
        fontWeight:'700',
        textTransform:'uppercase'
    },
    direccionConjunto:{
        fontSize:11,
        fontWeight:'400',
        marginTop:5
    }
})
export default styles