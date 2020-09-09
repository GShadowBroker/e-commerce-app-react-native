import React, { useState, useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { cartContext } from "../utils/CartContext";
import styled from "styled-components/native";
import colors from "../constants/colors";
import Button from "../components/Button";
import { Entypo } from "@expo/vector-icons";

const SContainer = styled.View`
  flex: 1;
`;

const SCartItems = styled.ScrollView`
  padding-top: 5px;
`;

const SSeparator = styled.View`
  background-color: ${colors.light.border};
  height: ${StyleSheet.hairlineWidth}px;
  margin: 0 10px;
`;

const SCheckout = styled.View``;

const STotal = styled.View`
  margin: 0 10px;
  flex-direction: row;
  padding: 10px 0;
  justify-content: space-between;
`;

const STotalText = styled.Text`
  font-weight: bold;
`;

const SCheckoutButton = styled.View`
  margin: 0 10px 10px 10px;
`;

const SItemImage = styled.View``;

const SImage = styled.Image`
  height: 100%;
  width: ${(180 / 3) * 2}px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const SItemCard = styled.View`
  height: 180px;
  margin: 5px 10px 5px 10px;
  border-radius: 10px;
  flex-direction: row;
`;

const SItemDetails = styled.View`
  margin: 10px 0 10px 15px;
  flex: 1;
`;

const STitle = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;

const STitleText = styled.Text`
  font-weight: 600;
  font-size: 18px;
  font-family: "sans-serif-condensed";
`;

const SColors = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: column;
  padding-right: 10px;
  margin: 5px 0;
`;

const SColorTitle = styled.Text`
  font-family: "sans-serif-condensed";
  margin-right: 10px;
  color: ${colors.light.secondaryText};
`;

const SColorBoxes = styled.View`
  height: 100%;
  flex: 1;
  flex-direction: row;
`;

const SColorBox = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  border: 0.5px solid ${colors.grayed};
  height: 25px;
  width: 25px;
  border-radius: 13px;
  margin-right: 5px;
`;

const SSizes = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: column;
  padding-right: 10px;
  margin: 5px 0;
`;

const SSizeTitle = styled.Text`
  font-family: "sans-serif-condensed";
  margin-right: 10px;
  margin-bottom: 5px;
  color: ${colors.light.secondaryText};
`;

const SSizeBoxes = styled.View`
  height: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const SSizeBox = styled.TouchableOpacity`
  background-color: #fff;
  border: 0.5px solid ${colors.grayed};
  height: 22px;
  width: 22px;
  border-radius: 11px;
  margin-right: 5px;

  align-items: center;
  justify-content: center;
`;

const SQteContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;

const ShoppingCart = ({ navigation }) => {
  const { items, total } = useContext(cartContext);
  const [count, setCount] = useState(1);

  const add = () => setCount(count + 1);
  const subtract = () => {
    count <= 1 ? setCount(0) : setCount(count - 1);
  };

  return (
    <SContainer contentContainerStyle={{ justifyContent: "space-between" }}>
      <SCartItems>
        {items.length > 0 &&
          items.map((item) => (
            <SItemCard
              key={item.id}
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 1,
              }}
            >
              <SItemImage>
                <SImage
                  source={item.images[0]}
                  accessibilityLabel={item.title}
                />
              </SItemImage>
              <SItemDetails>
                <STitle>
                  <STitleText>{item.title}</STitleText>
                  <STitleText
                    style={{ color: colors.light.secondaryText, fontSize: 16 }}
                  >
                    $ {item.price}
                  </STitleText>
                </STitle>
                <SColors>
                  <SColorTitle>Cor</SColorTitle>
                  <SColorBoxes>
                    {item.colors.map((color) => (
                      <SColorBox key={color} color={color} />
                    ))}
                  </SColorBoxes>
                </SColors>
                <SSizes>
                  <SSizeTitle>Tamanho</SSizeTitle>
                  <SSizeBoxes>
                    {item.sizes.map((size) => (
                      <SSizeBox key={size}>
                        <Text
                          style={{
                            fontFamily: "sans-serif-condensed",
                            fontSize: 11,
                          }}
                        >
                          {size}
                        </Text>
                      </SSizeBox>
                    ))}
                  </SSizeBoxes>
                </SSizes>
                <SQteContainer>
                  <TouchableOpacity onPress={subtract}>
                    <Entypo
                      name="minus"
                      size={20}
                      color={colors.light.secondaryText}
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontFamily: "sans-serif-condensed",
                      color: colors.light.secondaryText,
                    }}
                  >
                    {count === 1 ? `1 item` : `${count} itens`}
                  </Text>
                  <TouchableOpacity onPress={add}>
                    <Entypo
                      name="plus"
                      size={20}
                      color={colors.light.secondaryText}
                    />
                  </TouchableOpacity>
                </SQteContainer>
              </SItemDetails>
            </SItemCard>
          ))}
      </SCartItems>
      <SSeparator />
      <SCheckout>
        <STotal>
          <STotalText>Total:</STotalText>
          <STotalText>$ {total.toFixed(2)}</STotalText>
        </STotal>
        <SCheckoutButton>
          <Button
            title="FAZER O CHECKOUT"
            handlePress={() => alert("MONEY MONEY MONEY!")}
            style={{ width: "100%" }}
          />
        </SCheckoutButton>
      </SCheckout>
    </SContainer>
  );
};

export default ShoppingCart;
