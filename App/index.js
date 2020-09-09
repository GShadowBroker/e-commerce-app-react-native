import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStackScreen from "./config/MainStackScreen";
import { CartContextProvider } from "./utils/CartContext";

export default function App() {
  return (
    <NavigationContainer>
      <CartContextProvider>
        <MainStackScreen />
      </CartContextProvider>
    </NavigationContainer>
  );
}
