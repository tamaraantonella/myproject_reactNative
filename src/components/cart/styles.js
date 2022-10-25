import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.grey,
    gap: 5,
  },
  title: {
    fontFamily: "Lato-Regular",
    fontSize: 30,
    marginVertical: 10,
    textAlign: "center",
    color: colors.primary,
  },
  text: {
    textTransform: "capitalize",
  },
});
