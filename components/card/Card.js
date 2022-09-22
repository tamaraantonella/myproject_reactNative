import { StyleSheet, View } from "react-native";
import React from "react";

export default function Card({ children, style }) {
  return (
    <View style={{ ...styles.container, style }}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
});
