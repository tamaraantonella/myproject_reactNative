import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import Card from "../components/card/Card";
import NumberContainer from "../components/number-container/number-container";
import {generateRandomBetween} from "../utils/function";

export default function GameScreen({ selected }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, selected)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const onHandleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < selectedNumber) ||
      (direction === "greater" && currentGuess > selectedNumber)
    ) {
      Alert.alert("No mientas", "tu sabes que esta mal...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumberBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  };

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, selectedNumber, onGameOver]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Adivine cuantas mascotas desea adoptar el jugador 1
      </Text>
      <Card>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <Button
            title="Menor"
            onPress={() => onHandleNextGuess("lower")}
          ></Button>
          <Button title="Mayor" onPress={() => onHandleNextGuess('greater')}></Button>
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
