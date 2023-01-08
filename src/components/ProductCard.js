import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
  selectCartItemsWithId,
} from "../features/addToCart/addToCart";

export default function ProductCard({ id, image, name, unit_price }) {
  const [count, setCount] = React.useState(0);
  const items = useSelector((state) => selectCartItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToCart({ id, image, name, unit_price }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ id }));
  };
  console.log(items);
  return (
    <View style={producCardStyles.screenContainer}>
      <View style={producCardStyles.container}>
        <View style={producCardStyles.conteinerImage}>
          <Image source={{ uri: image }} style={producCardStyles.image} />
        </View>
        <View style={producCardStyles.description}>
          <Text style={producCardStyles.title}>{name}</Text>
          <Text style={producCardStyles.text}>Price: ${unit_price}</Text>
          <View style={producCardStyles.containerPrice}>
            <View style={producCardStyles.counters}>
              <AntDesign
                name="minuscircleo"
                size={24}
                //   color={colorScheme === "light" ? "black" : "white"}
                onPress={() => {
                  setCount(count - 1);
                  removeItemFromBasket();
                }}
              />
              <Text style={producCardStyles.quantity}>{count}</Text>
              <AntDesign
                name="pluscircleo"
                size={24}
                //   color={colorScheme === "light" ? "black" : "white"}
                onPress={() => {
                  setCount(count + 1);
                  addItemToBasket();
                }}
              />
            </View>
            <Text style={producCardStyles.price}>${unit_price * count}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export const producCardStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    padding: "5%",
    marginTop: "5%",
    backgroundColor: "#ffffff",
    borderRadius: "20%",
  },
  description: {
    flex: 0.5,
    width: "100%",
    padding: "5%",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    // marginBottom: "10%",
  },
  text: {
    fontSize: "12px",
    marginBottom: "10%",
  },
  conteinerImage: {
    flex: 0.5,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  containerPrice: {
    flexDirection: "row",
    marginTop: "5%",
    // marginBottom: "5%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counters: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  price: {
    fontSize: "18px",
    fontWeight: "800",
  },
  quantity: {
    fontSize: "18px",
    fontWeight: "800",
    marginHorizontal: "5%",
  },
});
