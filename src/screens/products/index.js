import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";
import { ItemProd } from "../../components/item";
import { pets } from "../../constants/data";
import { useSelector,useDispatch } from "react-redux";
import { filterPet } from "../../store/actions";

const Products = ({ navigation }) => {
  const selectedCat = useSelector((state) => state.category.selected);
  const dispatch = useDispatch();
  const productsFilter=useSelector((state)=>state.pets.filtered);
  const onSelected = (item) => {
    navigation.navigate("Product", { name: item.title, productId: item.id });
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
