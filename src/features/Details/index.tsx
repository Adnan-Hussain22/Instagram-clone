import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#548ea3",
      }}
    >
      <Text style={{ color: "#ffffff", fontSize: 18 }}>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
        color="#ffffff"
      />
    </View>
  );
};

export default DetailsScreen;
