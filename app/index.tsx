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

import Logo from "../components/common/Logo";
import { StatusBar } from "expo-status-bar";
import Colors from "@/lib/Color";
const Index = () => {
  const router = useRouter();

  const exampleImageUri = Image.resolveAssetSource(exampleImage).uri;

  useEffect(() => {
    setTimeout(() => {
      router.replace("/app");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: exampleImageUri }}
        style={styles.background}
        loadingIndicatorSource={{ uri: exampleImageUri }}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0)"]}
          style={styles.gradient}
        >
          <Logo width={65} height={65} style={styles.image} />
          <Text style={styles.text}>Click flower</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: "#000000",
    width: "100%",
  },
  image: {
    opacity: 0.95,
    color: Colors.main,
  },
  text: {
    fontSize: 18,
    paddingTop: 5,
    fontWeight: "bold",
    color: Colors.light,
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
