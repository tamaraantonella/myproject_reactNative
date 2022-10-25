import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 30,
    marginHorizontal: 10,
    paddingVertical: 20,
    elevation: 5,

    justifyContent: "space-between",
  },
  detailCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    fontFamily: "Lato-Regular",
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  description: {
    fontFamily: "Lato-Regular",
    fontSize: 18,
    marginBottom: 5,
  },
  stock: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
  },
  price: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
    textTransform: "capitalize",
    color: colors.primary,
  },
});
