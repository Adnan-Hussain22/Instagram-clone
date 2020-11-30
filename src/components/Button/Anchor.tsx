import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { Text } from "src/components/Restyle";
import { width } from "src/utils/scale";

interface AnchorButtonProps {
  label: string;
  onPress: () => void;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

export const AnchorButton = ({
  label,
  onPress,
  labelStyle,
  style,
}: AnchorButtonProps) => {
  return (
    <TouchableOpacity style={[styles.anchor, style]} onPress={onPress}>
      <Text
        // variant="regular"
        fontWeight="bold"
        textAlign="right"
        color="white"
        style={labelStyle}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  anchor: {
    width: width * 0.8,
    flex: 0.3,
    justifyContent: "center",
  },
});
