import { View, Image, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { URL_MAPS } from "../../utils/api";

const MapPreview = ({ location, children, style }) => {
  const { lat, lng } = location || {};
  const map = URL_MAPS(lat, lng);
  return (
    <View style={styles.container}>
      {location ? (
        <Image style={styles.image} source={{ uri: map }} />
      ) : (
        children
      )}
    </View>
  );
};

export default MapPreview;
