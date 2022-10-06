
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/themes";
import { WishList } from "../screens";

const Stack = createNativeStackNavigator();

const WishNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Lista de deseos"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="Lista de deseos"
        component={WishList}
        options={{ title: "Lista de deseos" }}
      />
    </Stack.Navigator>
  );
};

export default WishNavigator;
