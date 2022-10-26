import { FlatList } from "react-native";
import React from "react";
import { WishItem } from "../../components/wishItem";
import { wish } from "../../constants/data";
import { styles } from "./styles";

const Orders = ({ navigation }) => {
  const onDelete = (id) => {
    const newWish = wish.filter((item) => item.id !== id);
  };
  const renderItem = ({ item }) => (
    <WishItem item={item} onDelete={onDelete} />
  );
  return (
    <FlatList
      data={wish}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    ></FlatList>
  );
};

export default Orders;
