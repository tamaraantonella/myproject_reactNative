import { View, Text, ScrollView, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { colors } from "../../constants/themes";

const NewPet = () => {
  const [title, setTitle] = useState("");
  const onHandleChange = (value, type) => {
    setTitle(value);
  };
  const onHandleSubmit = () => {
    console.log("submit");
  };
  return (
    <ScrollView style={styles.scrollCon}>
      <View style={styles.container}>
        <Text>Nueva Mascota!</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la mascota"
          onChangeText={(text) => onHandleChange(text)}
          value={title}
        ></TextInput>
        <Button title="Agregar" onPress={onHandleSubmit} color={colors.primary}></Button>
      </View>
    </ScrollView>
  );
};

export default NewPet;
