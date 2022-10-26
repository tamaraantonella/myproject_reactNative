import React, { useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";

const Auth = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>)
};

export default Auth;
