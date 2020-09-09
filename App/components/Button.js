import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import colors from "../constants/colors";

const SButton = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.outlined ? colors.light.background : "#000"};
  border: ${(props) => (props.disabled ? "1px solid gray" : "1px solid #000")};
  padding: 15px 18px;
  border-radius: 5px;
  width: 48%;
  font-family: "sans-serif-condensed";
`;

const Button = ({ title, outlined, handlePress, disabled, style }) => {
  const getColor = () => {
    if (outlined) {
      return disabled ? "gray" : "#000";
    }
    return "#fff";
  };
  return (
    <SButton
      outlined={outlined}
      onPress={handlePress}
      disabled={disabled}
      style={style}
    >
      <Text style={{ color: getColor(), textAlign: "center" }}>{title}</Text>
    </SButton>
  );
};

export default Button;
