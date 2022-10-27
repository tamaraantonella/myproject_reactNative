import React from "react";
import { View, Text, Image, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Pet } from "../../components/pet";
import { styles } from "./styles";

const Profile = ({ navigation }) => {
  const pets = useSelector((state) => state.newPet.pets);
  console.log(pets);
  const renderItem = ({ item }) => (

    <Pet
      {...item}
      onSelect={() => navigation.navigate("Pet", { pet: item })}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Mascotas</Text>
      <FlatList
        data={pets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No tienes mascotas cargadas 👀</Text>}
      ></FlatList>
    </View>
  );
};

export default Profile;
