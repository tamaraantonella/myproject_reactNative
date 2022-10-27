import { View, Text, ScrollView, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { colors } from "../../constants/themes";
import { useDispatch } from "react-redux";
import { newPet } from "../../store/actions";
import { NavigationRouteContext } from "@react-navigation/native";
import ImageSelector from "../../components/image-selector";

const NewPet = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const onHandleChange = (value, type) => {
    setTitle(value);
  };
  const onHandleSubmit = () => {
    const pet = { name: title };
    dispatch(newPet(pet));
    navigation.goBack();
  };
  const onHandlerImage = (image) => {
    console.log(image);
  };

  return (
    <ScrollView style={styles.scrollCon}>
      <View style={styles.container}>
        <Text style={styles.title}>Nueva Mascota!</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la mascota"
          onChangeText={(text) => onHandleChange(text)}
          value={title}
        ></TextInput>
        <ImageSelector onImage={onHandlerImage} />
        <Button
          title="Agregar"
          onPress={onHandleSubmit}
          color={colors.primary}
        ></Button>
      </View>
    </ScrollView>
  );
};

export default NewPet;
