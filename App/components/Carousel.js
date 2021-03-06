import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";
import { Slide } from "./Slide";

const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    width: "100%",
    shadowColor: "#fcfcfc",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  bullets: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
});

const Container = styled.View``;

const Carousel = ({ items }) => {
  const windowWidth = Dimensions.get("window").width;
  const [offsets, setOffsets] = useState([]);

  useEffect(() => {
    let offsetArray = [0];
    for (let i = 0; i < items.length - 1; i++) {
      offsetArray.push(offsetArray[i] + 300);
    }
    setOffsets(offsetArray);
  }, [items]);

  if (offsets.length === 0)
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  return (
    <Container style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          width: 300 * items.length + 2 * (windowWidth - 300 - 30),
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled={false}
        snapToOffsets={offsets}
        style={{ paddingHorizontal: windowWidth - 300 - 30 }}
      >
        {items.map((item, index) => (
          <Slide key={index} item={item} />
        ))}
      </ScrollView>
    </Container>
  );
};

Carousel.defaultProps = {
  itemsPerInterval: 1,
};

export default Carousel;
