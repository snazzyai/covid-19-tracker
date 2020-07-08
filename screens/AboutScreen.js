import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import backgroundColors from '../assets/data/backgroundColor';
import Window from '../assets/data/windowSize';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutBox}>
        <Text style={styles.about}>About</Text>
        <Text style={styles.text}>covid-19-tracker v1.0.0</Text>
        <Text style={styles.text}>Covid-19 daily world tracking app</Text>
        <Text style={styles.text}>Developed by Abdulsalam Ibrahim</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColors.red,
  },
  aboutBox: {
    marginTop: Window.height - 490,
    width: Window.width - 500,
    height: Window.height - 480,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
  },
  about: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 5,
    fontStyle: 'italic',
  },
  text: {
    fontSize: 16,
    padding: 5,
  },
});
export default AboutScreen;
