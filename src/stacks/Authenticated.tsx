import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../features/Home";
import DetailsScreen from "../features/Details";

const AuthStack = createStackNavigator();

const AuthenticatedStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen name="Home" component={HomeScreen} />
      <AuthStack.Screen name="Details" component={DetailsScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthenticatedStack;
