import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";
export const styles = StyleSheet.create({
  scrollCon: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    paddingVertical: 50,
    alignItems: "center",
  },
  title: {
    fontFamily: "Lato-Regular",
    fontSize: 20,
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderBottomColor: colors.primary,
    marginVertical: 15,
    width: "90%",
    borderBottomWidth: 1,
  },
});
