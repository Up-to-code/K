import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "react-native";


export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          animation: "fade",
          statusBarAnimation: "fade",
          animationTypeForReplace: "push",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen
          name="app"
          options={{
            headerLeft: (e) => {
              return <Text>{e.label}</Text>;
            },
            headerTitle: () => {
              return <Text>Click flower </Text>;
            },
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
