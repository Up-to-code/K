import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Colors from "@/lib/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "@/firebase/Firebase_Confing";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useRouter } from "expo-router";
interface Props {
  Auth_Taype: "Signin" | "Signup";
}
const Auth = ({ Auth_Taype }: Props) => {
  const reouter = useRouter();
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFocused1, setIsFocused1] = React.useState(false);
  const inputEmailRef = React.useRef<TextInput>(null);
  const inputPasswordRef = React.useRef<TextInput>(null);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [
    createUserWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [
    signInWithGoogle,
    userGoogle,
    loadingGoogle,
    errorGoogle,
  ] = useSignInWithGoogle(auth);
  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmailRef.current?.props.value as string)) {
      alert("Invalid email address");
      return;
    }
    if ((inputPasswordRef.current?.props.value?.length as number) < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    if (Auth_Taype == "Signin") {
      signInWithEmailAndPassword(
        inputEmailRef.current?.props.value as string,
        inputPasswordRef.current?.props.value as string
      );
    } else if (Auth_Taype == "Signup") {
      createUserWithEmailAndPassword(
        inputEmailRef.current?.props.value as string,
        inputPasswordRef.current?.props.value as string
      );
    }
  };
  useEffect(() => {
    if (user?.user.uid || user1?.user.uid) {
      reouter.replace("/app");
    }
  }, [user, user1]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              maxWidth: 300,
              paddingHorizontal: 20,
            }}
          >
            <Text style={styles.Signin}>{Auth_Taype}</Text>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="Email"
                placeholderTextColor={"gray"}
                style={[
                  styles.input,
                  {
                    borderBottomColor: isFocused1 ? Colors.main : "gray",
                  },
                ]}
                ref={inputEmailRef}
                onFocus={() => {
                  setIsFocused1(true);
                }}
                onBlur={() => {
                  setIsFocused1(false);
                }}
                textContentType="emailAddress"
                keyboardType="email-address"
                cursorColor={Colors.main}
                blurOnSubmit
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="Password"
                placeholderTextColor={"gray"}
                style={[
                  styles.input,
                  {
                    borderBottomColor: isFocused ? Colors.main : "gray",
                  },
                ]}
                ref={inputPasswordRef}
                textContentType="password"
                secureTextEntry
                cursorColor={Colors.main}
                blurOnSubmit
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
              />

              <Text
                style={styles.bottn}
                onPress={() => onSubmit()}
                disabled={Auth_Taype === "Signin" ? loading : loading1}
              >
                {Auth_Taype === "Signin" ? "Signin" : "Signup"}
              </Text>
            </View>

            <Text
              style={[styles.bottn, { marginTop: 20 }]}
              onPress={() => {
                Auth_Taype === "Signin"
                  ? reouter.replace("/auth/signup")
                  : reouter.replace("/auth/signin");
              }}
            >
              {Auth_Taype === "Signin" ? "Signup" : "Signin"}
            </Text>

            <Text
              style={[styles.bottn, { marginTop: 20 }]}
              onPress={() => {
                signInWithGoogle();
              }}
            >
              Sign in with Google
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  Signin: {
    fontSize: 20,
    marginVertical: 20,
    color: Colors.main,
    fontWeight: "bold",
  },
  inputBox: {
    marginVertical: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "gray",
    width: "100%",
    textAlign: "left",
  },
  input: {
    height: 40,
    width: 250,
    marginVertical: 10,
    padding: 10,
    backgroundColor: Colors.light,
    borderRadius: 10,
    borderColor: "#8080803e",
    borderWidth: 1,
  },
  bottn: {
    backgroundColor: Colors.main,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
    width: 250,
    textAlign: "center",
    borderRadius: 5,
    elevation: 2,
    shadowColor: Colors.main + "33",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
});
