import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import { ItemProd } from "../../components/item";
import { pets } from "../../constants/data";
import {useSelector} from 'react-redux';

const Products = ({ navigation}) => {
  const selectedCat = useSelector((state) => state.category.selected);

  const onSelected = (item) => {
    navigation.navigate("Product", { name: item.title, productId: item.id });
  };
  const productsFilter = pets.filter(
    (product) => product.categoryId === selectedCat.id
  );
  const renderItem = ({ item }) => (
    <ItemProd item={item} onSelected={onSelected} />
  );
  return (
    <FlatList
      data={productsFilter}
      renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.container}
    ></FlatList>
  );
};

export default Products;
