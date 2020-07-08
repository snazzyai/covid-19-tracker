import React, { useState } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import { SplashScreen } from 'expo';
// import * as Font from "expo-font";
// import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabMenu from './navigation/TabMenu';
import InfoScreen from './screens/InfoScreen';
import AsyncStorage from '@react-native-community/async-storage';
import Splashscreen from './components/Splashscreen';

const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const timer = 2000;

  AsyncStorage.clear(); //for development

  AsyncStorage.getItem('shouldRoute')
    .then((value) => {
      if (value === null) {
        AsyncStorage.setItem('shouldRoute', 'true');
        setInitialRoute('InfoScreen');
        setTimeout(() => setIsLoading(false), timer);
      } else {
        setInitialRoute('TabMenu');
        setTimeout(() => setIsLoading(false), timer);
      }
    })
    .catch((error) => console.warn(error));

  if (isLoading) {
    return <Splashscreen />;
  }
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={initialRoute}
        >
          <Stack.Screen name="InfoScreen" component={InfoScreen} />
          <Stack.Screen name="TabMenu" component={TabMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
