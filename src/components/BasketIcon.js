import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  selectCartItems,
  selectCartTotal,
} from "../features/addToCart/addToCart";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const BasketIcon = () => {
  const items = useSelector(selectCartItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectCartTotal);

  if (items.length === 0) return null;
  console.log(basketTotal);
  return (
    <View
      style={{
        position: "absolute",
        bottom: "2%",
        width: "100%",
        zIndex: 50,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#F5D347",
          padding: "3%",
          borderRadius: "15%",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "5%",
          justifyContent: "space-around",
        }}
        onPress={() => {
          navigation.navigate("Basket");
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{items.length} products</Text>
        <Text style={{ fontWeight: "bold" }}>View Basket</Text>
        <Text style={{ fontWeight: "bold" }}>${basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
