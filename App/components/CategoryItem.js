import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";

const Category = styled.TouchableOpacity`
  height: 80px;
  width: 150px;
  border-radius: 10px;
  margin: 0 5px;
`;

const SCategoryFilter = styled.View`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SCategoryText = styled.Text`
  color: #ffff;
  font-size: 16px;
  font-weight: bold;
  font-family: "sans-serif-condensed";
`;

const CategoryItem = ({ category }) => {
  return (
    <Category>
      <ImageBackground
        source={category.image}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
        imageStyle={{ borderRadius: 10 }}
      >
        <SCategoryFilter>
          <SCategoryText>{category.title.toUpperCase()}</SCategoryText>
        </SCategoryFilter>
      </ImageBackground>
    </Category>
  );
};

export default CategoryItem;
