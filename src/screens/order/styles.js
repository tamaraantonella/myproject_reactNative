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
    color: colors.white,
    backgroundColor: colors.primary,
  },
  buttonConfirm: {
    backgroundColor: colors.grey,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: colors.white,
  },
  disabledButtonConfirm: {
    backgroundColor: colors.gray,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textButtonConfirm: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
  },
  totalContainer: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalTitle: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
  },
  total: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
  },
});
