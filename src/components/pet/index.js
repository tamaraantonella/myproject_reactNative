import { View, Text, TouchableOpacity,Image } from "react-native";
import React from "react";
import { styles } from "./styles";

export const Pet = ({ name, image, address, onSelect }) => {
  return (
    <TouchableOpacity style={styles.touch}
    onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{ uri: image }}/>
        <Text>{name}</Text>
        <Text>{address.lat}</Text>
        <Text>{address.lng}</Text>
      </View>
    </TouchableOpacity>
  );
};
