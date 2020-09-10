import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainStackScreen from "./config/MainStackScreen";
import { CartContextProvider } from "./utils/CartContext";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CartContextProvider>
          <MainStackScreen />
        </CartContextProvider>
      </NavigationContainer>
    </Provider>
  );
}
