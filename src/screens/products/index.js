import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import { ItemProd } from "../../components/item";
import { pets } from "../../constants/data";

const Products = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const onSelected = (item) => {
    navigation.navigate("Product", { name: item.title, productId: item.id });
  };
  const productsFilter = pets.filter(
    (product) => product.categoryId === categoryId
  );
  const renderItem = ({ item }) => (
    <ItemProd item={item} onSelected={onSelected} />
  );
  return (
    <FlatList
      data={productsFilter}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    ></FlatList>
  );
};

export default Products;
