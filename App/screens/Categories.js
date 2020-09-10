import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { global } from "../constants/globalStyle";
import colors from "../constants/colors";
import { categories } from "../data";

const SCategoriesContainer = styled.ScrollView``;

const SCategory = styled.TouchableOpacity`
  height: 100px;
  margin: 10px 10px 0 10px;
  border-radius: 10px;
`;

const SImage = styled.ImageBackground``;

const SFilter = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

const Categories = () => {
  return (
    <SCategoriesContainer>
      {categories.map((category) => (
        <SCategory key={category.title}>
          <SImage
            source={category.image}
            style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
            imageStyle={{ borderRadius: 10 }}
          >
            <SFilter>
              <Text
                style={{
                  ...global.light,
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {category.title}
              </Text>
            </SFilter>
          </SImage>
        </SCategory>
      ))}
    </SCategoriesContainer>
  );
};

export default Categories;
