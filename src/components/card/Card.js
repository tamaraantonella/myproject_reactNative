import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Card({ item, onSelected }) {
  return (
    <TouchableOpacity
      onPress={() => onSelected(item)}
      style={{ ...styles.container, backgroundColor: item.color }}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    marginTop: 50,
    marginHorizontal: 20,
  },
  title: {
    fontFamily: "Lato-Regular",
    fontSize: 30,
    color: "#fff",
    marginVertical: 10,
    textAlign: "center",
  },
});
