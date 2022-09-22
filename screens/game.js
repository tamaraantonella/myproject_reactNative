import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import Card from "../components/card/Card";
import NumberContainer from "../components/number-container/number-container";
import {generateRandomBetween} from "../utils/function";

export default function GameScreen({ selected }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, selected)
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Adivine cuantas mascotas desea adoptar el jugador 1
      </Text>
      <Card>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <Button title="Menor" onPress={() => null}></Button>
          <Button title="Mayor" onPress={() => null}></Button>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    fontFamily: "nunito-regular",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
