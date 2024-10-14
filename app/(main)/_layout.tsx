import { Stack } from "expo-router";
import React from "react";

function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default AuthLayout;
