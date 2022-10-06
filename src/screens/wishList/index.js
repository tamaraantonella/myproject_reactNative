import { FlatList, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { WishItem } from "../../components/wishItem";
import { wish } from "../../constants/data";
console.log("🚀 ~ file: index.js ~ line 6 ~ wish", wish);

const WishList = ({ navigation }) => {
  const items = wish;
  const onDelete = (id) => {
    const newWish = wish.filter((item) => item.id !== id);
    console.log(newWish);
  };
  const renderItem = (data) => <WishItem item={data} onDelete={onDelete} />;
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    ></FlatList>
  );
};

export default WishList;
