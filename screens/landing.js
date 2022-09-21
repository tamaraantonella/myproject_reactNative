import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import React, { useState } from "react";
import { color } from "../constants/colors";
import Input from "../components/input/input";

const Landing = () => {
  const [number, setNumber] = useState("");
  const handleChange = (text) => {
    setNumber(text.replace(/[^0-9]/g, ""));
  };
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
          Elija el número de mascotas que desea adoptar
        </Text>
        <View style={styles.buttonCon}>
          {/* <Button title="Ingresar" onPress={() => null} color="#FFC700"></Button> */}
          <Input
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => handleChange(text)}
          />
        </View>
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
    fontSize: 20,
    color: color.textBlack,
    textAlign: "center",
    marginHorizontal: 50,
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonCon: {
    width: "50%",
    marginHorizontal: 50,
    height: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
});
