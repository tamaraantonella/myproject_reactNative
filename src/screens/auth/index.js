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
import { signIn, signUp } from "../../store/actions";
import { Input } from "../../components/input";
import { onFocusOut, onInputChange, UPDATED_FORM } from "../../utils/forms";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: false },
  password: { value: "", error: "", touched: false, hasError: false },
  isFormValid: false,
};
const formReducer = (state, action) => {
  console.log(action.data)
  switch (action.type) {
    case UPDATED_FORM:
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
  const [isNewUser, setIsNewUser] = useState(true);
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isNewUser ? "Registrarse" : "Iniciar sesión";
  const message = isNewUser ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?";
  const messageAction = isNewUser ? "Registrarse" : "Iniciar sesión";
  const messageTarget = isNewUser ? "Ingresar ahora" : "Registrarse ahora";
  const handleSubmit = () => {
    isNewUser
      ? dispatch(signUp(formState.email.value, formState.password.value))
      : dispatch(signIn(formState.email.value, formState.password.value));
  };

  const handleChange = (value, type) => {
    onInputChange(value, type, dispatchFormState, formState);
  };
  const onHandleBlur = (value, type) => {
    onFocusOut(value, type , dispatchFormState, formState);
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
          error={formState.email.error}
          onChangeText={(text) => {
            handleChange(text, "email");
          }}
          // onBlur={(e) => onHandleBlur(e.nativeEvent.text, "email")}
          touched={formState.email.touched}
        ></Input>
        <Input
          label="Contraseña"
          placeholder="Ingrese su contraseña"
          value={formState.password.value}
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          hasError={formState.password.hasError}
          error={formState.password.error}
          onChangeText={(text) => {
            handleChange(text, "password");
          }}
          // onBlur={(e) => onHandleBlur(e.nativeEvent.text, "password")}
          secureTextEntry={true}
          touched={formState.password.touched}
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
          <TouchableOpacity onPress={() => setIsNewUser(!isNewUser)}>
            <Text style={styles.promptMessage}>{messageTarget}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
