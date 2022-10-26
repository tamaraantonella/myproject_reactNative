import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "Lato-Regular",
    fontSize: 10,
    marginBottom: 30,
  },
  total: {
    fontFamily: "Lato-Regular",
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
    padding: 20,
color: colors.white,
    backgroundColor:colors.primary
  },
});
