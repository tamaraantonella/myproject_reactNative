import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./components/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        {" "}
        <Header title="Mascotapp" />{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#28B0A2",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
});
