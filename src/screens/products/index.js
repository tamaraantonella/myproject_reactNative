import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import { ItemProd } from "../../components/item";
import { useSelector, useDispatch } from "react-redux";
import { filterPet, selectPet } from "../../store/actions";

const Products = ({ navigation }) => {
  const selectedCat = useSelector((state) => state.category.selected);
  const dispatch = useDispatch();
  const productsFilter = useSelector((state) => state.pets.filtered);
  const onSelected = (item) => {
    dispatch(selectPet(item.id));
    navigation.navigate("Product", { name: item.title });
  };

  const renderItem = ({ item }) => (
    <ItemProd item={item} onSelected={onSelected} />
  );
  useEffect(() => {
    dispatch(filterPet(selectedCat.id));
  }, [selectedCat]);
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
