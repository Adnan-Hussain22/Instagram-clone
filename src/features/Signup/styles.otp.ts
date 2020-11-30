import { Dimensions, StyleSheet } from "react-native";
import { palette } from "src/constants/colors";
import { moderateScale, verticalScale } from "src/utils/scale";

const width = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    paddingTop: 8,
  },
  buttonWrapper: { flex: 0.2, justifyContent: "center" },
  number: {
    width: width * 0.8,
    borderBottomWidth: 4,
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    letterSpacing: 5,
    textAlign: "center",
  },
  numberWrapper: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: verticalScale(width * 0.08),
    alignItems: "flex-start",
  },
  directionWrapper: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  subHeadingWrapper: {
    flex: 0.3,
    maxHeight: 130,
    marginHorizontal: verticalScale(width * 0.09),
    justifyContent: "center",
  },
  subHeading: {
    textAlign: "left",
    color: palette.greyDark,
  },
  mainHeading: {
    textAlign: "center",
    fontSize: 48,
  },
  headerWrapper: { flex: 0.2, justifyContent: "flex-end" },
  instruction: {
    fontSize: 13,
    color: palette.greyPrimary,
  },
  question: {
    fontSize: 20,
  },
  link: {
    fontSize: 18,
    textDecorationLine: "underline",
  },
  phoneNumber: {
    fontSize: 18,
  },
});