import React, { useContext } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { cartContext } from "../utils/CartContext";

import Home from "../screens/Home";
import ShoppingCart from "../screens/ShoppingCart";
import Product from "../screens/Product";

import colors from "../constants/colors";
import { SimpleLineIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

const SMenuContainer = styled.TouchableOpacity`
  margin-left: 15px;
`;

const SBagContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  margin-right: 10px;
`;

const SBagBadge = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  background: #ee5253;
  z-index: 1;
  height: 15px;
  width: 15px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

const MainStack = createStackNavigator();
export const MainStackScreen = ({ navigation }) => {
  const { items } = useContext(cartContext);
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Shop",
          headerStyle: {
            backgroundColor: colors.light.background,
          },
          headerTintColor: colors.light.text,
          headerTitleStyle: {
            fontFamily: "sans-serif-condensed",
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <SMenuContainer onPress={() => navigation.openDrawer()}>
              <SimpleLineIcons
                name="menu"
                size={24}
                color={colors.light.text}
              />
            </SMenuContainer>
          ),
          headerRight: () => (
            <SBagContainer onPress={() => navigation.navigate("Shopping Cart")}>
              {items.length > 0 && (
                <SBagBadge>
                  <Text style={{ color: "#ffff", fontSize: 10 }}>
                    {items.length}
                  </Text>
                </SBagBadge>
              )}
              <SimpleLineIcons
                name="handbag"
                size={24}
                color={colors.light.text}
              />
            </SBagContainer>
          ),
        }}
      />
      <MainStack.Screen
        name="Shopping Cart"
        component={ShoppingCart}
        options={{ title: "Meu Carrinho" }}
      />
      <MainStack.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainStackScreen} />
      <Drawer.Screen name="Carrinho" component={ShoppingCart} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
