import * as React from "react";
import { View, StyleSheet } from "react-native";

const NavigationCircle = () => {
  return (
    <View style={styles.dotView}>
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    backgroundColor: "#fff",
    width: 12,
    height: 12,
    borderRadius: 100,
    margin: 10,
  },
});

export default NavigationCircle;
