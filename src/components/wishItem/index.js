import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export const WishItem = ({ item, onDelete }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.gender}</Text>
      <Text>{item.city}</Text>
      <View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

