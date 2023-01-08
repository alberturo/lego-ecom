import React from "react";
import { Text, FlatList } from "react-native";
import BasketIcon from "../components/BasketIcon";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

const GET_API =
  "https://1be9db56-c889-466d-9c12-cba178414901.mock.pstmn.io/all-products";

export default function Products() {
  const { isLoading, error, responseJSON } = useFetch(GET_API);
  console.log(responseJSON);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) return <Text>Error</Text>;

  return (
    <>
      <BasketIcon />
      <FlatList
        data={responseJSON.products}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      />
    </>
  );
}
