import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ShopNavigator from "./shop";
import WishNavigator from "./wishList";
import OrderNavigator from "./order";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Shop" component={ShopNavigator} options={{title:"Mascotapp"}} />
      <BottomTab.Screen name="WishList" component={WishNavigator} />
      <BottomTab.Screen name="Order" component={OrderNavigator} />
    </BottomTab.Navigator>
  );
};
