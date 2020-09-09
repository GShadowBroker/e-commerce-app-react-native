import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import styled from "styled-components/native";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const SContainer = styled.TouchableOpacity`
  flex-basis: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 280px;
  max-width: 175px;
`;

const SProduct = styled.View`
  height: 250px;
  width: ${250 * (2 / 3)}px;
  justify-content: center;
`;

const SProductCard = styled.View`
  height: 80%;
`;

const STitle = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: "sans-serif-condensed";
`;

const SPrice = styled.Text`
  text-align: center;
  font-size: 14px;
  margin: 10px 0 2px 0;
  font-family: "sans-serif-condensed";
  color: ${colors.light.secondaryText};
`;

export const SmallSlide = ({ item }) => {
  const { title, price, images } = item;
  const navigation = useNavigation();
  return (
    <SContainer onPress={() => navigation.navigate("Product", { item })}>
      <SProduct>
        <SProductCard>
          <ImageBackground
            source={images[0]}
            style={{
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center",
            }}
            imageStyle={{
              borderRadius: 10,
            }}
          ></ImageBackground>
        </SProductCard>
        <SPrice>${price}</SPrice>
        <STitle>{title}</STitle>
      </SProduct>
    </SContainer>
  );
};

export default SmallSlide;
