import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerPage: {
    marginHorizontal: 10,
    paddingVertical: 8
  },
  cardStyles: {
    backgroundColor: "#ffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 10,
    padding: 10
  },

  contanerTitle: {
    paddingHorizontal: 10,
    paddingVertical: 8,

  },
  tituloCard: {
    fontSize: 15,
    fontWeight: "bold"
  },

  containerInfo: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

  },
  textoCompletado: {
    color: "#7ae433ff"
  },
  textoPendiente: {
    color: "#e6be51ff"
  },
  buttonActualizar: {
    width: "100%"
  }
})

export default styles;