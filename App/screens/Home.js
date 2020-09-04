import { StatusBar } from "react-native";
import React from "react";
import styled from "styled-components/native";
import colors from "../constants/colors";
import clothing from "../assets/images/categories/clothing.jpg";
import accessories from "../assets/images/categories/accessories.jpg";
import shoes from "../assets/images/categories/shoes.jpg";
import watches from "../assets/images/categories/watches.jpg";
import bags from "../assets/images/categories/bags.jpg";
import dress_1 from "../assets/images/new/1.jpg";
import dress_2 from "../assets/images/new/2.jpg";
import dress_3 from "../assets/images/new/3.jpg";

import CategoryItem from "../components/CategoryItem";
import Carousel from "../components/Carousel";

const SView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.light.background};
`;

const SCategoriesContainer = styled.ScrollView`
  max-height: 100px;
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
`;

const SSectionTitle = styled.Text`
  margin-top: 20px;
  text-align: center;
  font-family: "sans-serif-condensed";
  font-size: 20px;
  font-weight: 700;
`;

export default function Home() {
  const categories = [
    { id: 1, title: "roupas", componentName: "clothing", image: clothing },
    {
      id: 2,
      title: "acessórios",
      componentName: "accessories",
      image: accessories,
    },
    { id: 3, title: "calçados", componentName: "shoes", image: shoes },
    { id: 4, title: "relógios", componentName: "watches", image: watches },
    { id: 5, title: "bolsas", componentName: "bags", image: bags },
  ];

  const newProducts = [
    { title: "Dress 1", price: 169.99, image: dress_1 },
    { title: "Dress 2", price: 319.99, image: dress_2 },
    { title: "Dress 3", price: 879.99, image: dress_3 },
  ];

  return (
    <SView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.light.background}
      />
      <SCategoriesContainer
        horizontal={true}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </SCategoriesContainer>

      <SSectionTitle>Novas Ofertas</SSectionTitle>
      <Carousel items={newProducts} />
    </SView>
  );
}
