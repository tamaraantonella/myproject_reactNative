import React from "react";
import { View, Button, FlatList } from "react-native";
import Card from "../../components/card/Card";
// import Header from "../../components/header/header";
import { styles } from "./styles";
import { categories } from "../../constants/data";

const Categories = ({ navigation }) => {
    const onSelected = (item) => {
        navigation.navigate("Products", { category: item });
    };
  const renderItem = ({ item }) => <Card item={item} onSelected={onSelected} />;
  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.cardCont}
    ></FlatList>
  );
};

export default Categories;
