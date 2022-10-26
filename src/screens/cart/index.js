import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../components/cart";
import { confirmOrder, removeFromCart } from "../../store/actions";

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const handlePurchase = () => {
    dispatch(confirmOrder(cart, total));
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

      <TouchableOpacity onPress={handlePurchase} style={styles.buttonConfirm}>
        <Text>Finalizar compra</Text>
        <View>
          <Text style={styles.total}>Total: ${total}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
