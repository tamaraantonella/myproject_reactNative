import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./auth";
import Tabs from "./tabs";
import { useSelector } from "react-redux";

const AppNavigator = () => {
  const userID = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {userID !== null ? <Tabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
