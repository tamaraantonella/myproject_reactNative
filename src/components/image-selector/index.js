import { View, Text, Image, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);
  const verifyPermissions = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync()
    if (result.status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitas dar permisos para acceder a la galería",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };
  const onHandleTakePhoto = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedUrl(image.uri);
    onImage(image.uri);
    console.log(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fileCont}>
        {!pickedUrl ? (
          <Text>No hay imagen</Text>
        ) : (
          <Image
            source={{ uri: pickedUrl }}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </View>
      <Button title="Seleccionar imagen" onPress={onHandleTakePhoto} />
    </View>
  );
};

export default ImageSelector;
