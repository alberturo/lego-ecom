import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  removeFromCart,
  selectCartTotal,
} from "../features/addToCart/addToCart";

const Basket = () => {
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectCartTotal);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  console.log(items);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.header}>Lego Store</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: "5%",
            backgroundColor: "white",
            marginTop: "5%",
          }}
        >
          <Text style={{ flex: 1 }}>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ marginTop: "5%" }}>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                padding: "5%",
              }}
            >
              <Text>{items.length} x</Text>
              <Image source={{ uri: items[0]?.image }} style={styles.image} />
              <Text style={{ flex: 1, marginLeft: "5%" }}>
                {items[0]?.name}
              </Text>
              <Text
                style={{
                  color: "#4B4C4C",
                  fontWeight: "800",
                  marginRight: "2%",
                }}
              >
                ${items[0]?.unit_price}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart({ id: key }))}
              >
                <Text style={{ fontSize: "10%" }}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={{ padding: "5%", backgroundColor: "white" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Subtotal</Text>
            <Text>${basketTotal}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Delivery fee</Text>
            <Text>$5.99</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: "18px" }}>
              Order Total
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: "18px" }}>
              ${basketTotal + 5.99}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#F5D347",
              padding: "3%",
              borderRadius: "15%",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5%",
              marginLeft: "5%",
              justifyContent: "space-around",
            }}
            onPress={() => {
              navigation.navigate("Basket");
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Basket;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container2: {
    flex: 1,
    backgroundColor: "#F2F2F4",
  },
  container3: {
    padding: "10%",
    backgroundColor: "white",
  },
  header: {
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    marginTop: "5%",
  },
  image: {
    width: "30%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: "50%",
  },
});
