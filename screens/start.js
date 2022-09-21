import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const start = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Mascotapp</Text>
      <View style={styles.buttonCon}>
        <Button title="Ingresar" onPress={() => null}></Button>
      </View>
    </View>
  );
};

export default start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
      },
});
