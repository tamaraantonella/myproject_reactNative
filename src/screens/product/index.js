import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/header/header";
import { styles } from "./styles";

const Product = () => {
    return (
        <View style={styles.container}>
            <Header title='Detalle'/>
            <Text>Product</Text>
        </View>
    )
};

export default Product;