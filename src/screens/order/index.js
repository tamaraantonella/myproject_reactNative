import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { CartItem } from "../../components/cart";

const Order = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const onDelete = (id) => {
    const newWish = wish.filter((item) => item.id !== id);
    console.log(newWish);
  };
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  return (
    <View style={styles.container}>

    <FlatList
      data={cart}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
      ></FlatList>
      <Text style={styles.total}>Total: ${total}</Text>
      </View>
  );
};

export default Order;
