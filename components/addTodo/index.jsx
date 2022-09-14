import { Button, StyleSheet, TextInput, View } from "react-native";

import React from "react";
import {styles} from './styles'

const addTodoInput = ({ input, onChangeText, placeholder, onPress }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        selectionColor="#1A535C"
        onChangeText={onChangeText}
        value={input}
        style={styles.input}
      />
      <Button
        title="Add"
        //en los button solo se puede modificar el color de fondo
        color="#4ECDC4"
        onPress={onPress}
      />
    </View>
  );
};


export default addTodoInput;
