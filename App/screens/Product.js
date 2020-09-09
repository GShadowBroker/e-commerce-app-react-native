import React, { useContext } from "react";
import { View, Text, ImageBackground, StatusBar } from "react-native";
import styled from "styled-components/native";
import { cartContext } from "../utils/CartContext";
import { Ionicons } from "@expo/vector-icons";
import globalStyle from "../constants/globalStyle";
import Button from "../components/Button";
import colors from "../constants/colors";

const SContainer = styled.ScrollView`
  flex: 1;
`;

const ProductImage = styled.View`
  height: 430px;
  width: 100%;
`;

const SImage = styled.ImageBackground`
  height: 430px;
  width: 100%;
  justify-content: space-between;
`;

const BackButton = styled.TouchableOpacity`
  margin: 0 10px;
`;
const FavoriteButton = styled.TouchableOpacity`
  margin: 10px;
`;

const STitleContainer = styled.View`
  flex: 1;
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
  margin-bottom: 10px;
`;

const SActionContainer = styled.View`
  margin: 0 5px;
  flex-direction: row;
  justify-content: space-between;
`;

const SOptionsContainer = styled.View`
  position: absolute;
  right: 0;
  height: auto;
  margin: 10px;
  flex-direction: row;
`;

const SColors = styled.View``;

const SColorBox = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  height: 25px;
  width: 25px;
  border-radius: 13px;
  margin: 5px;
`;

const SSizes = styled.View``;

const SSizeBox = styled.TouchableOpacity`
  background-color: #fff;
  color: #222f3e;
  padding: 5px;
  margin: 5px;
  border-radius: 13px;
`;

const SBullets = styled.View`
  position: absolute;
  align-self: center;
  bottom: 3%;
`;

const Product = ({ navigation, route }) => {
  const { id, title, images, price, colors, sizes } = route.params.item;
  const {
    items,
    addToCart,
    favorites,
    addToFavorites,
    subtractFromFavorites,
  } = useContext(cartContext);

  const isFavorited = () => {
    if (favorites.find((f) => f.id === id)) return true;
    return false;
  };

  const toggleFavorites = () => {
    if (isFavorited()) {
      subtractFromFavorites(route.params.item);
    } else {
      addToFavorites(route.params.item);
    }
  };
  return (
    <SContainer style={globalStyle.light}>
      <ProductImage>
        <SImage source={images[0]}>
          <BackButton onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-round-back" size={48} color="#fff" />
          </BackButton>
          <FavoriteButton onPress={toggleFavorites}>
            {isFavorited() ? (
              <Ionicons name="ios-heart" size={48} color="#fff" />
            ) : (
              <Ionicons name="ios-heart-empty" size={48} color="#fff" />
            )}
          </FavoriteButton>
          {colors.length > 0 && (
            <SOptionsContainer>
              <SColors>
                {colors.map((c) => (
                  <SColorBox key={c} color={c} />
                ))}
              </SColors>
              <SSizes>
                {sizes.map((size) => (
                  <SSizeBox key={size}>
                    <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                      {size}
                    </Text>
                  </SSizeBox>
                ))}
              </SSizes>
            </SOptionsContainer>
          )}
          <SBullets>
            {images.map((image, index) => (
              <Text
                key={image}
                style={{
                  opacity: index === 0 ? 1 : 0.5,
                  color: "#fff",
                  fontSize: 32,
                }}
              >
                &bull;
              </Text>
            ))}
          </SBullets>
        </SImage>
      </ProductImage>

      <STitleContainer>
        <STitle>{title}</STitle>
        <SPrice>$ {price}</SPrice>
      </STitleContainer>

      <SActionContainer>
        {items.find((i) => i.id === id) ? (
          <Button title="ADICIONADO" outlined={true} disabled={true} />
        ) : (
          <Button
            title="&#43;  CARRINHO"
            handlePress={() => addToCart(route.params.item)}
          />
        )}
        <Button
          title="PAGAR"
          handlePress={() => alert("hello")}
          outlined={true}
        />
      </SActionContainer>
    </SContainer>
  );
};

export default Product;
