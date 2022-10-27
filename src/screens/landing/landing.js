import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Text,
} from "react-native";
import React from "react";

const Landing = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.all}>
        <Text style={styles.title}>Bienvenido a Mascotapp</Text>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.buttonCon}>
          <Button
            title="Ver las categorías"
            onPress={() => navigation.navigate("Categories")}
            color={"#0a66c2"}
          ></Button>

          <Button
            title="Ir a mi perfil"
            onPress={() => navigation.navigate("Profile")}
            color={"#0a66c2"}
          ></Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Landing;

const styles = StyleSheet.create({
  all: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 80,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  text: {
    fontFamily: "Lato-Regular",
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginHorizontal: 50,
    marginVertical: 10,
  },
  title: {
    fontFamily: "Lato-Regular",
    fontSize: 30,
    marginBottom: 40,
  },
  buttonCon: {
    flexDirection: "column",
    width: "80%",
    marginHorizontal: 50,
    height: 50,
    marginVertical: 10,
    justifyContent: "space-between",
height:80
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
    fontFamily: "Lato-Regular",
  },
});
