import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Text
} from "react-native";
import React from "react";

import Header from "../../components/header/header";

const Landing = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.all}>
        <Header title="Mascotapp"></Header>
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
            title="Go to Categories"
            onPress={() => navigation.navigate("Categories")}
            color={"#FFC700"}
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
    width: "50%",
    marginHorizontal: 50,
    height: 50,
    marginVertical: 50,
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
