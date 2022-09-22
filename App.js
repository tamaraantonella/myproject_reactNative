import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Header from "./components/header/header";
import Landing from "./screens/landing";
import { color } from "./constants/colors";
import GameScreen from "./screens/game";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [loaded] = useFonts({
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
  });
  const title = !userNumber ? "Adivina el número" : "El juego ha comenzado";
  const onStartGame = (number) => {
    setUserNumber(number);
  };
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={color.primary} />
      </View>
  )
};
  let content = <Landing onStartGame={onStartGame} />;
  if (userNumber) content = <GameScreen selected={userNumber} />;
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
    fontFamily: "nunito",
  },
});
