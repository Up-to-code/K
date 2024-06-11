import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import exampleImage from "../assets/images/SplsheScreen/backgound.jpg";
import Logo from "../assets/rose.svg";
import { StatusBar } from "expo-status-bar";
const Index = () => {
  const router = useRouter();

  const exampleImageUri = Image.resolveAssetSource(exampleImage).uri;

  useEffect(() => {
    setTimeout(() => {
      router.push("/app");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: exampleImageUri }}
        style={styles.background}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0)"]}
          style={styles.gradient}
        >
         
          <Text style={styles.text}>Click flower</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: "#0a7ea4",
    width: "100%",
  },
  image: {
    width: 100,
    height: "auto",
    color: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  background: {
    height: Dimensions.get("screen").height,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
