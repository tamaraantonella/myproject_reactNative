import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  function onHandleText(text) {
    setInput(text);
  }
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="new task"
          placeholderTextColor="#000"
          onChangeText={onHandleText}
          value={input}
        />
        <Button title="Add" onPress={() => console.log("i`ve been pressed")} />
      </View>
    </View>
  );
}
//stylesheet for the app component
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
  },
});
