import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

export const ItemProd = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.detailCont}>
          <Text style={styles.stock}>Stock {item.stock}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

