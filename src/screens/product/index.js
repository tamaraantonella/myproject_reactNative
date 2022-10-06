import React from "react";
import { View, Text,Image } from "react-native";
import Header from "../../components/header/header";
import { pets } from "../../constants/data";
import { styles } from "./styles";

const Product = ({ navigation, route }) => {
  const { productId } = route.params;
  const product = pets.find((product) => product.id === productId);
  return (
    <View style={styles.container}>
      <Header title={product.title} />
      <View style={styles.contImg}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
        />
      </View>
      <Text>{product.description}</Text>
      <Text>{product.gender}</Text>
      <Text>{product.city}</Text>
    </View>
  );
};

export default Product;
