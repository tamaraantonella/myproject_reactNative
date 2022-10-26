import React from "react";
import { View, Text, Image, Button } from "react-native";
import Header from "../../components/header/header";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions";

const Product = ({ navigation }) => {
  const prod = useSelector((state) => state.products.selected);
  const { id, title, description, price, stock, image } = prod || {};
  const dispatch = useDispatch();
  function handleCart() {
    dispatch(addToCart(prod));
  }
  return (
    <View style={styles.container}>
      <Header title={title} />
      <View style={styles.contImg}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <Text>{description}</Text>
      <Text>Stock {stock}</Text>
      <Text>${price}</Text>
      {stock > 0 ? (<Button title="Agregar al carrito" onPress={handleCart}></Button>):(<Text>No hay stock</Text>)}

    </View>
  );
};

export default Product;
