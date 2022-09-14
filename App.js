import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  function onHandleText(text) {
    setInput(text);
  }
  function addTodo() {
    if (input.length > 0) {
      setTodos([...todos, { id: Math.random().toString(), value: input }]);
      setInput("");
    }
  }
  const onHandleModal = (id) => {
    setModalOpen(!modalOpen);
    setSelectedTodo(todos.find((todo) => todo.id === id));
    // setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onHandleDelete = (id) => {
    setModalOpen(!modalOpen);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const renderItem = ({ item }) => {
    return (
      <View key={item.id} style={styles.itemList}>
        <Text key={item.id} style={styles.todo}>
          {item.value}
        </Text>
        <TouchableOpacity
          onPress={() => onHandleModal(item.id)}
          style={styles.delete}
        >
          <Text style={styles.equis}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="New task"
          placeholderTextColor="#ccc"
          selectionColor="#1A535C"
          onChangeText={onHandleText}
          value={input}
          style={styles.input}
        />
        <Button
          title="Add"
          //en los button solo se puede modificar el color de fondo
          color="#4ECDC4"
          onPress={addTodo}
        />
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text>Your selected task</Text>
            <Text>{selectedTodo?.value}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Delete"
              onPress={() => onHandleDelete(selectedTodo.id)}
              color="#1A535C"
            ></Button>
            <Button title="Cancel" onPress={() => setModalOpen(false)} color="#1A535C" />
          </View>
        </View>
      </Modal>
    </View>
  );
}
//stylesheet for the app component
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#4ECDC4",
    padding: 10,
    height: 40,
    marginVertical: 10,
    color: "#1A535C",
    width: "75%",
  },
  itemList: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#4ECDC4",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  todo: {
    color: "#114B5F",
  },
  equis: {
    color: "#fff",
    backgroundColor: "#4ECDC4",
    padding: 2,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 50,
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
    marginHorizontal: "auto",
  },
  modalTitle: {
    marginVertical: 20,
    textAlign: "center",
    alignItems: "center",
  },
});
