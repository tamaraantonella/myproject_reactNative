import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Label } from "../label";

export const Input = ({
  editable,
  children,
  value,
  onChangeText,
  onFocus,
  onBlur,
  placeholder,
  placeholderTextColor,
  keyboardType,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
          {...props}
          editable={editable}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        ></TextInput>
      </Label>
    </View>
  );
};
