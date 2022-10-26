import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../components/cart";
import { removeFromCart } from "../../store/actions";

const Order = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch= useDispatch()
  const onDelete = (id) => {
    dispatch(removeFromCart(id))
  };
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => console.log(item)}
        style={styles.container}
      ></FlatList>
      <Text style={styles.total}>Total: ${total}</Text>
    </View>
  );
};

export default Order;
