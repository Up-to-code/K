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
        "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Product 2",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Product 3",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Product 4",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1585232350744-974fc9804d65?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <View style={styles.container}>
      <FlashList
        showsVerticalScrollIndicator={false}
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
    shadowColor: "#00000043",
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
