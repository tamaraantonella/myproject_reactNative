import React from "react";
import { FlatList } from "react-native";
import Card from "../../components/card/Card";
import { styles } from "./styles";
import {useSelector} from 'react-redux';

const Categories = ({ navigation }) => {
  const categoriesGlobal = useSelector((state) => state.category.categories);
    const onSelected = (item) => {
        navigation.navigate("Products", { categoryId: item.id, title: item.title });
    };
  const renderItem = ({ item }) => <Card item={item} onSelected={onSelected} />;
  return (
    <FlatList
      data={categoriesGlobal}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.cardCont}
    ></FlatList>
  );
};

export default Categories;
