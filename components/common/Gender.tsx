import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Gender = () => {
  return (
    <View style={styles.container}>
      <View style={styles.MaleBox}>
        <Ionicons name="male" size={32} color="#ffffff" />
        <Text>Male</Text>
      </View>
      <View style={styles.FemaleBox}>
        <Ionicons name="female" size={32} color="#ffffff" />
        <Text>Female</Text>
      </View>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: "bold",
  },
  icon: {
    color: "#ffffff",
  },
  MaleBox: {
    backgroundColor: "#0a7ea4",
    borderRadius: 10,
    padding: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 2,
    shadowColor: "#0a7ea4",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
  },
  FemaleBox: {
    backgroundColor: "#bd2a91",
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 2,
    shadowColor: "#bd2a91",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
