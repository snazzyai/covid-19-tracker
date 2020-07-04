import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const NavigationCircle = ({ colorOne, colorTwo, colorThree }) => {
  return (
    <View style={styles.dotView}>
      <View style={[styles.dot, { backgroundColor: colorOne }]}></View>
      <View style={[styles.dot, { backgroundColor: colorTwo }]}></View>
      <View style={[styles.dot, { backgroundColor: colorThree }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  dot: {
    backgroundColor: '#fff',
    width: 12,
    height: 12,
    borderRadius: 100,
    margin: 10,
  },
});

export default NavigationCircle;
