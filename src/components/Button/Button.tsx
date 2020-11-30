import * as React from "react";
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

import { palette } from 'src/constants/colors';
import { Text } from "src/components/Restyle";
import { styles } from "./styles";

interface ButtonProps {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  outline?: boolean;
  textColor?: keyof typeof palette;
  labelStyle?: StyleProp<TextStyle>;
}

export const Button = ({
  onPress,
  label,
  style,
  outline,
  labelStyle,
  textColor,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, outline ? styles.outline : null, style]}
      onPress={onPress}
    >
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize={13}
        style={labelStyle}
        color={textColor}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
