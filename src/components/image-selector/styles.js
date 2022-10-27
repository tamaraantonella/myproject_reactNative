import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  input: {
    height: 40,
    borderBottomColor: colors.primary,
    marginBottom: 5,
    width: "100%",
    borderBottomWidth: 1,
  },
  helper: {
    color: colors.danger,
    fontSize: 12,
    marginVertical: 5,
  },
  fileCont: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
