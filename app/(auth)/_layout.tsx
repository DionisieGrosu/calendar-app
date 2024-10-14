import { Stack } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function MainLayout() {
  return (
    <SafeAreaProvider>
      <Stack initialRouteName="sign-in">
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}

export default MainLayout;
