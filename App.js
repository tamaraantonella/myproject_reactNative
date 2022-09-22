import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Header from "./components/header/header";
import Landing from "./screens/landing";
import { color } from "./constants/colors";
import GameScreen from "./screens/game";

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const title = !userNumber ? "Adivina el número" : "El juego ha comenzado";
  const onStartGame = (number) => {
    setUserNumber(number);
  };

  let content = <Landing onStartGame={onStartGame} />;
  if(userNumber) content = <GameScreen selected={userNumber} />;
  return (
    <View style={styles.container}>
      <Header title="Mascotapp" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg,
  },
});
