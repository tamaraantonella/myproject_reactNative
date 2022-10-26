import React, { useState, useReducer } from "react";
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

const initialState = {
  email: { value: "", error: "", touched: false, hasError: false },
  password: { value: "", error: "", touched: false, hasError: false },
  isFormValid: false,
};
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATED_FORM":
      const { name, value, hasError, touched, error, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          value,
          hasError,
          touched,
          error,
        },
        isFormValid,
      };

    default:
      return state;
  }
};

const Auth = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? "Registrarse" : "Iniciar sesión";
  const message = isLogin ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?";
  const messageAction = isLogin ? "Registrarse" : "Iniciar sesión";
  const messageTarget = isLogin ? "Ingresar ahora" : "Registrarse ahora";
  const handleSubmit = () => {
    dispatch(signUp(formState.email.value, formState.password.value));
  };
  const onInputChange = (value, type, dispatchFormState, formState) => {
    dispatchFormState({
      type: "UPDATED_FORM",
      data: {
        name,
        value,
        hasError,
        error,
        touched,
        isFormValid: !hasError,
      },
    });
  };

  const handleChange = (value, type) => {
    onInputChange(value, type, dispatchFormState, formState);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.inputCont}>
        <Text style={styles.title}>{title}</Text>
        <Input
          label="Email"
          placeholder="Ingrese su email"
          value={formState.email.value}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          hasError={formState.email.hasError}
          error="El email es requerido"
          onChangeText={(text) => {
            setEmail(text);
          }}
        ></Input>
        <Input
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          value={formState.password.value}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          hasError={formState.password.hasError}
          error="La contraseña es requerida"
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={true}
        ></Input>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={!formState.isFormValid}
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
