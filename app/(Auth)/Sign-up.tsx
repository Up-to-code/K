import Auth from "@/components/Auth/Auth";
import React from "react";
import { StyleSheet,  View } from "react-native";

const SignUp = () => {
  return (
    <View style={{ flex: 1 ,justifyContent:"center" ,alignItems:"center"}}>
      <Auth Auth_Taype="Signup" />
    </View>
  );
};


export default SignUp;
