import { Dimensions, StatusBar } from "react-native";

const { width, height } = Dimensions.get("screen");

export const metrics = {
  width,
  height,
  marginBar: StatusBar.currentHeight,
};
