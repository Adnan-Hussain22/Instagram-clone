import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1b667e",
      }}
    >
      <Text style={{ color: "#ffffff", fontSize: 18 }}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
        color="#ffffff"
      />
    </View>
  );
};

export default HomeScreen;
