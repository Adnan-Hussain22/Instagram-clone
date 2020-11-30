import * as React from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { palette } from "src/constants/colors";

export const PinBox = ({ value, onKeyPress }) => {
  const [code, setCode] = React.useState("");
  const textInputRef = React.useRef<any[]>([]);

  const handleOnReachEnd = (newCode: string) => {
    onKeyPress(newCode);
  };

  const handleChange = async (text: string, index: number) => {
    if (text) {
      const asciiCode = text.charCodeAt(0);
      if (asciiCode >= 48 && asciiCode <= 57) {
        setCode(`${code}${text}`);
        setTimeout(() => {
          if (index + 1 === 6) return handleOnReachEnd(`${code}${text}`);
          if (textInputRef.current[index + 1])
            textInputRef.current[index + 1].focus();
        }, 10);
      }
    }
  };
  const handleOnKeyPress = (event: any, index: number) => {
    if (
      event.nativeEvent.key === "Backspace" &&
      code.length &&
      !code[index + 1]
    ) {
      textInputRef.current[code.length - 1].focus();
      const newcode = code.slice(0, code.length - 1);
      onKeyPress(newcode);
      setCode(newcode);
    }
  };

  return (
    <>
      {Array.apply(null, Array(4)).map((_, index) => (
        <View key={`key_${index}_key`} style={styles.box}>
          <TextInput
            style={styles.pin}
            maxLength={1}
            keyboardType={"number-pad"}
            value={code[index] || ""}
            caretHidden={true}
            ref={(ref) => (textInputRef.current[index] = ref)}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(event) => handleOnKeyPress(event, index)}
            editable={!(code.length < index)}
          />
        </View>
      ))}
    </>
  );
};
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  box: {
    width: width * 0.15,
    height: 53,
    borderBottomWidth: 1,
    // borderRadius: width * 0.05,
    borderColor: palette.greyDark,
  },
  pin: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 24,
    color: palette.purpleDark,
    fontWeight: "bold",
    width: "100%",
    height: "100%",
  },
});
