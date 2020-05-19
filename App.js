import * as React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import { SplashScreen } from "expo";
// import * as Font from "expo-font";
// import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabMenu from "./navigation/TabMenu";
import InfoScreen from "./screens/InfoScreen";

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="TabMenu"
        >
          <Stack.Screen name="InfoScreen" component={InfoScreen} />
          <Stack.Screen name="TabMenu" component={TabMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
