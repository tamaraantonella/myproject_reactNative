import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./shop";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <ShopNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;