const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 6;
export const UPDATED_FORM = "UPDATED_FORM";

export const validateInput = (type, value) => {
  let hasError = false;
  let error = "";
  let touched = true;
  if (type === "email") {
    hasError = !formatEmail.test(value);
    error = hasError ? "El correo no es válido" : "";
  }
  if (type === "password") {
    hasError = value.length < minPasswordLength;
    error = hasError ? "La contraseña debe tener al menos 6 caracteres" : "";
  }

  return { hasError, error, touched };
};
export const onInputChange = (value, type, dispatchFormState, formState) => {
  const { hasError, error,touched } = validateInput(type, value);
  let isFormValid = true;
  for (const key in formState) {
    const item= formState[key];
    if (key !== type && hasError) {
      isFormValid = false;
      break;
    } else if (key !== type && item.hasError) {
      isFormValid = false
      break;
    }
  }
  dispatchFormState({
    type: UPDATED_FORM,
    data: {
      name: type,
      value,
      hasError,
      error,
      touched,
      isFormValid: isFormValid,
    },
  });
};
