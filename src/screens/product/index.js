import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../../components/header/header";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Product = ({ navigation }) => {
  const selectedPet = useSelector((state) => state.pets.selected);

  return (
    <View style={styles.container}>
      <Header title={selectedPet.title} />
      <View style={styles.contImg}>
        <Image
          source={{
            uri: selectedPet.image,
          }}
          style={styles.image}
        />
      </View>
      <Text>{selectedPet.description}</Text>
      <Text>{selectedPet.gender}</Text>
      <Text>{selectedPet.city}</Text>
    </View>
  );
};

export default Product;
