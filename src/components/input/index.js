import { View, Text, TextInput } from "react-native";
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
  hasError,
  error,
  touched,
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
      {hasError && touched && (
        <View>
          <Text style={styles.helper}>{error}</Text>
        </View>
      )}
    </View>
  );
};
