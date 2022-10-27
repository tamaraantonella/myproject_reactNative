import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const Profile = ({ navigation }) => {
  const pets = useSelector((state) => state.newPet.pets);
  console.log(pets)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Mascotas</Text>
      {pets?.map((pet) => (
        <View key={Math.random()}>
          <Text>{pet.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Profile;
