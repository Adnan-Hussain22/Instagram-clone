import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, View, Text } from "react-native";
import { ThemeProvider } from "@shopify/restyle";

import DeciderStack from "./stacks/Decider";
import AuthProvider from "./providers/Auth";
import theme from "./constants/Theme";

const ScreenContainer = ({ children }) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <View>{children}</View>
    </SafeAreaView>
  </>
);

const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      // setUserToken(true);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <DeciderStack userToken={userToken} />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
