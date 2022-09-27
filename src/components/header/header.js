import { StyleSheet, Text, View } from "react-native";
import React from "react";
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
    height: 100,
    backgroundColor: "#28B0A2",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: 'Lato-Bold',
    color: "#fff",
  },
});
