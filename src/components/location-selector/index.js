import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import * as Location from "expo-location";
import MapPreview from "../map-preview";

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);
  const verifyPermissions = async () => {
    const result = await Location.requestForegroundPermissionsAsync();
    if (result.status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitas dar permisos para acceder a la ubicación",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };
  const onHandleLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  return (
    <View style={styles.fileCont}>
      <MapPreview location={pickedLocation}>
        <Text>No está seleccionada la ubicación</Text>
      </MapPreview>

      <Button title="Seleccionar ubicación" onPress={onHandleLocation} />
    </View>
  );
};

export default LocationSelector;
