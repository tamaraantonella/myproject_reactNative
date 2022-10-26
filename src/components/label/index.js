import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";

export const Label = ({ label, children }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};
