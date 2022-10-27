import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Mascotas</Text>
    </View>
  );
};

export default Profile;
