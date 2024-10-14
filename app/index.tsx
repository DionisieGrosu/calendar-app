import { useFonts } from "expo-font";
import { Redirect, SplashScreen } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function Index() {
  const [loaded] = useFonts({
    "Inter-Regular": require("./../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./../assets/fonts/Inter-Bold.ttf"),
    "Inter-SemiBold": require("./../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Medium": require("./../assets/fonts/Inter-Medium.ttf"),
  });
  const hideSplashScreen = async () => {
    if (loaded) await SplashScreen.hideAsync();
  };

  useEffect(() => {
    hideSplashScreen();
  }, [loaded]);

  if (loaded) {
    return <Redirect href="/(auth)/sign-in" />;
  } else {
    return null;
  }
}
