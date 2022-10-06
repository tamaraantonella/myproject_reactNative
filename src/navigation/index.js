import React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";

import ShopNavigator from "./shop";
import Tabs from "./tabs";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default AppNavigator;
