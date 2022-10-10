import React from "react";
import { FlatList } from "react-native";
import Card from "../../components/card/Card";
import { styles } from "./styles";
import {useSelector,useDispatch} from 'react-redux';
import { selectCategory } from "../../store/actions";


const Categories = ({ navigation }) => {
  const dispatch=useDispatch()
  const categoriesGlobal = useSelector((state) => state.category.categories);
  const onSelected = (item) => {
      dispatch(selectCategory(item.id));
      navigation.navigate("Products", { title: item.title });
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
