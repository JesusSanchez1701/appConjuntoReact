import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 10,

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
    marginBottom: 10
  },
  containerCitofonia: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },

  buttonCardCitofonia: {
    borderRadius: 20,
    padding: 10,
    width: "15%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center"
  },
  IconbuttonCall: {
    color: "#f27623ff"
  },
  colorContainerIcon: {
    backgroundColor: "#F8EDE5",

  },

  textoCard: {
    textAlign: "center"
  },
  textRecientes:{
    fontSize:14,
    fontWeight:"600",
    marginVertical:10,
    marginHorizontal:5
  }
})
export default styles;