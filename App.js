import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "./components/header/header";
import Landing from "./screens/landing";
import { color } from "./constants/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Mascotapp" />
      <Landing />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg,

  },
});
