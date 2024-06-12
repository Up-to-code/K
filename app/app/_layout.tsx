import { Link, Stack, Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { LogoBlue } from "@/components/common/Logo";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerRight: (e) => {
          return (
            <View>
              <Link href={"/user"}>
                <FontAwesome name="user-circle" size={20} color="black" />
              </Link>
            </View>
          );
        },
        headerTitle: () => {
          return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <LogoBlue width={25} height={25} />
              <Text
                style={{
                  marginLeft: 10,

                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                Click flower
              </Text>
            </View>
          );
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "",
        }}
      />
  <Stack.Screen
    name="user"
    options={{
      title: "",
    }}
  />
    </Stack>
  );
}

// //   <Tabs
// screenOptions={{
//   headerShown: false,
//   tabBarBadgeStyle: {
//     display: "none",
//   },
//   tabBarStyle: {
//     paddingTop: 5,
//     height: 60,
//   },
// }}
// >
// <Tabs.Screen
//   name="index"
//   options={{
//     title: "",

//     tabBarIcon: ({ focused }) =>
//       focused ? (
//         <Ionicons name="home" size={20} color={Colors.main} />
//       ) : (
//         <Ionicons
//           name="home-outline"
//           size={20}
//           color={Colors.sacend}
//           style={{ opacity: 0.5 }}
//         />
//       ),
//   }}
// />
{
  /* <Tabs.Screen
  name="explore"
  options={{
    title: "",

    tabBarIcon: ({ focused }) =>
      focused ? (
        <FontAwesome
          name="user-circle"
          size={20}
          color={Colors.main}
          style={{ opacity: 0.5 }}
        />
      ) : (
        <FontAwesome
          name="user-circle-o"
          size={20}
          color={Colors.sacend}
        />
      ),
  }}
/>
</Tabs> */
}
