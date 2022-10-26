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
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions";
import { Input } from "../../components/input";
import { Label } from "../../components/label";

const Auth = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const title = isLogin ? "Registrarse" : "Iniciar sesión";
  const message = isLogin ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?";
  const messageAction = isLogin ? "Registrarse" : "Iniciar sesión";
  const messageTarget = isLogin ? "Ingresar ahora" : "Registrarse ahora";
  const handleSubmit = () => {
    dispatch(signUp(email, password));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.inputCont}>
        <Text style={styles.title}>{title}</Text>

        <Input
          label="Email"
          placeholder="Ingrese su email"
          value={email}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => {
            setEmail(text);
          }}
        ></Input>
        <Input
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          value={password}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={true}
        ></Input>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={!email || !password}
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
