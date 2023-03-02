import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import BasketballImage from "./assets/products/basketball1.jpeg";
import Avatar from "./assets/icons/avatar.png/";
import { API_URL } from "./config/constants";
import axios from "axios";

export default function App() {
  React.useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text>판매되는 상품들</Text>
      <View style={styles.productCard}>
        <View>
          <Image style={styles.productImage} source={BasketballImage} resizeMode={"contain"} />
        </View>
        <View style={styles.productContents}>
          <Text style={styles.productName}>농구공</Text>
          <Text style={styles.productPrice}>50000원</Text>
          <View style={styles.productFooter}>
            <View style={styles.productSeller}>
              <Image style={styles.productAvatar} source={Avatar} />
              <Text style={styles.productSellerName}>그랩</Text>
            </View>
            <Text style={styles.productDate}>3분 전</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
  },
  productCard: {
    width: 320,
    borderColor: "rgb(230, 230, 230)",
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "white",
  },
  productImage: {
    width: "100%",
    height: 210,
  },
  productContents: {
    padding: 8,
  },
  productSeller: {
    flexDirection: "row",
    alignItems: "center",
  },
  productAvatar: {
    width: 24,
    height: 24,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  productSellerName: {
    fontSize: 16,
  },
  productDate: {
    fontSize: 16,
  },
});
