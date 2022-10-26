import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width:"100%",
  },
  input: {
    height: 40,
    borderBottomColor: colors.primary,
    marginBottom: 5,
    width: "100%",
    borderBottomWidth: 1,
  },
});
