import { FlatList } from "react-native";
import React, { useCallback } from "react";
import { WishItem } from "../../components/wishItem";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { deleteOrder, getOrders } from "../../store/actions";

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const onDelete = (id) => {
    dispatch(deleteOrder(id))
  };
  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch]));
  const renderItem = ({ item }) => <WishItem item={item} onDelete={onDelete} />;
  return (
    <FlatList
      data={orders}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    ></FlatList>
  );
};

export default Orders;
