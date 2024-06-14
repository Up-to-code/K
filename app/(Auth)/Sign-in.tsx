import Auth from "@/components/Auth/Auth";
import { StyleSheet, View } from "react-native";

const SignIn = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Auth Auth_Taype="Signin" />
    </View>
  );
};

export default SignIn;
