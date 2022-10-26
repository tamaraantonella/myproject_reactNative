import React, { useCallback, useState } from "react";
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
  const [isLogin,setIsLogin]=useState(true)
  const title = isLogin ? "Registrarse":"Iniciar sesión";
  const message = isLogin ?"¿Ya tienes una cuenta?":"¿No tienes una cuenta?";
  const buttonTitle = "Iniciar sesión";
  const messageAction = isLogin ? "Registrarse" : "Iniciar sesión";
  const messageTarget = isLogin ? "Ingresar ahora":"Registrarse ahora";
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
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.promptMessage}>{messageTarget}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
