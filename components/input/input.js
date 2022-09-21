import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { color } from "../../constants/colors";

export default function Input({ style, ...props }) {
  return <TextInput {...props} style={{ ...styles.input, style }}/>;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: color.primary,
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: "center",
  },
});
