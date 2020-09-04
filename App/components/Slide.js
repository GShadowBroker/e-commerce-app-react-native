import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import styled from "styled-components/native";
import colors from "../constants/colors";

const SContainer = styled.View`
  flex-basis: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 430px;
  max-width: 300px;
`;

const SProduct = styled.View`
  height: 400px;
  width: ${400 * (2 / 3)}px;
  justify-content: center;
`;

const SProductCard = styled.View`
  height: 80%;
`;

const STitle = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: "sans-serif-condensed";
  margin: 10px 0 2px 0;
`;

const SPrice = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: "sans-serif-condensed";
  color: ${colors.light.secondaryText};
`;

export const Slide = ({ title, image, price }) => {
  return (
    <SContainer>
      <SProduct>
        <SProductCard>
          <ImageBackground
            source={image}
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
        <STitle>{title}</STitle>
        <SPrice>${price}</SPrice>
      </SProduct>
    </SContainer>
  );
};

export default Slide;
