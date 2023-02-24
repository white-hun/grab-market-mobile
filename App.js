import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BasketballImage from "./assets/products/basketball1.jpeg";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>판매되는 상품들</Text>
      <View>
        <View>
          <Image source={BasketballImage} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
