import React, { useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { styles } from "./styles";
// import {colors
import { colors } from "../../constants/themes";

const Auth = ({ navigation }) => {
  const title = "Registro";
  const message = "¿Ya tienes una cuenta?";
  const buttonTitle = "Iniciar sesión";
  const messageAction = "Registrarse";
  const messageTarget = "Ingresar ahora";
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.inputCont}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputs}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su email"
            placeholderTextColor={colors.gray}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => {
              console.log("text", text);
            }}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            placeholderTextColor={colors.gray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {
              console.log("text", text);
            }}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("iniciar sesion")}
        >
          <Text style={styles.buttonText}>{messageAction}</Text>
        </TouchableOpacity>
        <View style={styles.prompt}>
          <Text>{message}</Text>
          <TouchableOpacity onPress={() => console.log("Change")}>
            <Text style={styles.promptMessage}>{messageTarget}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
