import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 150,
    marginVertical: 30,
    marginHorizontal: 40,
    paddingVertical: 20,

    justifyContent: "space-between",
  },
  detailCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
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
  city: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
  },
  gender: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
    textTransform: "capitalize",
    color: colors.primary,
  },
});
