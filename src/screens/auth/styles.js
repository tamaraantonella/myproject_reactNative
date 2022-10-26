import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Lato-Regular",
    fontSize: 20,
    marginBottom: 30,
    color: colors.primary,
    textAlign: "center",
  },
  inputCont: {
    width: "80%",
    marginBottom: 20,
    maxWidth: 400,
    margin: 10,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderBottomColor: colors.primary,
    marginBottom: 10,
    width: "90%",
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: colors.lightGrey,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  prompt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  promptMessage: {
    color: colors.primary,
    fontFamily: "Lato-Regular",
  },
});
