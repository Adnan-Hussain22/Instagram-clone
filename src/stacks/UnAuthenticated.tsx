import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../features/Login";
import Signup from "../features/Signup";
import Forgot from "../features/ForgotPassword";

const Stack = createStackNavigator();

const UnAuthenticatedStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStack;
