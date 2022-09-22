import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../../constants/colors";
export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    height: 150,
    backgroundColor: color.primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "nunito-regular",
    color: color.bg,
  },
});
