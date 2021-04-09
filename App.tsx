import React from "react";
import AppLoad from "expo-app-loading";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";

import InitialPage from "./src";

export default function App() {
  const [isLoaded] = useFonts({
    light: Ubuntu_300Light,
    regular: Ubuntu_400Regular,
    medium: Ubuntu_500Medium,
    bold: Ubuntu_700Bold,
  });

  if (!isLoaded) return <AppLoad />;

  return <InitialPage />;
}
