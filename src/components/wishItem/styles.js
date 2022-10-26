import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 5,
    gap: 20,
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
