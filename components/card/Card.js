import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card({ children, style }) {
  return (
    <View style={{...styles.container, style}}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
