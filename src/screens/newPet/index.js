import { View, Text, ScrollView, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { colors } from "../../constants/themes";
import { useDispatch } from "react-redux";
import { newPet, saveImage } from "../../store/actions";
import ImageSelector from "../../components/image-selector";
import LocationSelector from "../../components/location-selector";

const NewPet = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const onHandleChange = (value, type) => {
    setTitle(value);
  };
  const onHandleSubmit = () => {
    const pet = {
      id: Math.random(),
      name: title,
      image: image,
      address: location,
    };
    dispatch(newPet(pet));
    navigation.goBack();
  };
  const onHandlerImage = (img) => {
    setImage(img);
  };
  const onHandlerLocation = (loc) => {
    setLocation(loc);
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
        <LocationSelector onLocation={onHandlerLocation}></LocationSelector>
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
