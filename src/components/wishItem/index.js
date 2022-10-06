import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

const WishItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
       {/* <Text>{item.gender}</Text>
      <Text>{item.city}</Text>
      <View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default WishItem;
