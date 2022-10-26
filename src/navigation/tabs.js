import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ShopNavigator from "./shop";
import WishNavigator from "./wishNavigator";
import CartNavigator from "./cart";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/themes";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.container,
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Mascotapp",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={colors.darkGrey}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="WishListTab"
        component={WishNavigator}
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "color-wand-sharp" : "color-wand-outline"}
              size={24}
              color={colors.darkGrey}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={24}
              color={colors.darkGrey}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    elevation: 5,
  },
  title: {
    fontFamily: "Lato-Regular",
    fontSize: 20,
    marginBottom: 30,
  },
});
export default Tabs;
