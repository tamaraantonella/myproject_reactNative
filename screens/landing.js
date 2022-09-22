import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { color } from "../constants/colors";
import Input from "../components/input/input";
import Card from "../components/card/Card";
import NumberContainer from "../components/number-container/number-container";

const Landing = ({ onStartGame}) => {
  const [number, setNumber] = useState("");
  const [selected, setSelected] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const handleChange = (text) => {
    setNumber(text.replace(/[^0-9]/g, ""));
  };

  function onReset() {
    setNumber("");
    Keyboard.dismiss();
  }
  function onConfirm() {
    const chosenNumber = parseInt(number, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;
    setConfirmed(true);
    setSelected(chosenNumber);
    setNumber("");
  }
  function onhandleStartGame() {
    onStartGame(selected);
  }
  const confirmedOutput = confirmed ? (
    <Card style={styles.start}>
      <NumberContainer>Numero elegido: {selected}</NumberContainer>
      <Button title="Empezar juego"  onPress={onhandleStartGame}/>
    </Card>
  ) : null;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Bienvenido a Mascotapp</Text>
        <Text style={styles.text}>
          {/* Una app que te permite encontrar a tu mascota ideal. */}
          Jugador 1, elija el número de mascotas que desea adoptar
        </Text>
        <View style={styles.buttonCon}>
          {/* <Button title="Ingresar" onPress={() => null} color="#FFC700"></Button> */}
          <Input
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => handleChange(text)}
          />
        </View>
        <View style={styles.buttonsConta}>
          <Button
            title="Limpiar"
            onPress={onReset}
            color={color.primary}
          ></Button>
          <Button
            title="Confirmar"
            onPress={onConfirm}
            color={color.primary}
          ></Button>
        </View>

        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    fontFamily: "nunito",
    fontSize: 20,
    color: color.textBlack,
    textAlign: "center",
    marginHorizontal: 50,
    marginVertical: 10,
  },
  title: {
    fontFamily: "nunito",
    fontSize: 30,
    marginBottom: 20,
  },
  buttonCon: {
    width: "60%",
    marginHorizontal: 50,
    height: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonsConta: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginVertical: 20,
  },
  start: {
    width: "100%",
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "nunito",
  },
});
