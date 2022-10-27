import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product, Landing,Profile,NewPet } from "../screens";
import { colors } from "../constants/themes";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { Platform, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
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
        name="Landing"
        component={Landing}
        options={{ title: "Mascotapp" }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: "Perfil",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPet")}>
              <IonicIcons
                name="add-circle-outline"
                size={25}
                color={colors.white}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="NewPet"
        component={NewPet}
        options={{ title: "Nueva mascota" }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: "Categorias" }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
