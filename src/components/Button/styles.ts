import { StyleSheet, Dimensions } from "react-native";
import { palette } from "src/constants/colors";

const width = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
  container: {
    borderRadius: width * 0.07,
    width: '90%',
    height: 50,
    backgroundColor: palette.red,
    alignSelf: "flex-end",
    alignItems: 'center',
    justifyContent: 'center'
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: palette.red,
  }
});
