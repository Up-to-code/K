import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";

const GirdProducts = () => {
  const Prodcuts = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1686121522744-dc…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Product 2",
      price: 20,
      image:
        "	https://images.unsplash.com/photo-1686121544831-3f…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Product 3",
      price: 30,
      image:
        "	https://images.unsplash.com/photo-1686121544831-3f…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Product 4",
      price: 40,
      image:
        "	https://images.unsplash.com/photo-1598440947619-2c…xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    },
  ];
  return (
    <View style={styles.container}>
      <FlashList
        data={Prodcuts}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.Product}>
            <View style={styles.ProductImageBox}>
              <Image source={{ uri: item.image }} style={styles.ProductImage} />
            </View>

            <Text style={[styles.title]}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default GirdProducts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    marginVertical: 20,
  },
  Product: {
    backgroundColor: "#fff",
    height: 220,
    width: Dimensions.get("screen").width / 2 - 20,
    margin: 10,
    alignItems: "center",
    flexDirection: "column",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 2,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#71717175",
  },
  ProductImageBox: {
    height: 130,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  ProductImage: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
    overflow: "hidden",
    width: "100%",
    textAlign: "auto",
  },
  price: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#717171",
    marginVertical: 5,
    textAlign: "left",
    width: "100%",
  },
});
