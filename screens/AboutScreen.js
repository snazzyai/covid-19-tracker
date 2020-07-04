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
        <Text style={styles.text}>covid-19-tracker v0.1</Text>
        <Text style={styles.text}>Covid-19 daily world tracking app</Text>
        <Text style={styles.text}>Developed by Abdulsalam Ibrahim</Text>
        <Text style={styles.text}>Matric Number: 00804519</Text>

        <Text style={styles.text}>Year 2020</Text>
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
    height: Window.height - 450,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
  },
  about: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 5,
  },
  text: {
    fontSize: 18,
    padding: 5,
    fontStyle: 'italic',
  },
});
export default AboutScreen;
