import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const IllustrationHolder = ({
  outerColor,
  mainText,
  detailsText,
  svgComponent,
}) => {
  return (
    <View style={styles.main}>
      <View style={[styles.outerCircle, { backgroundColor: `${outerColor}` }]}>
        <View style={styles.innerCircle}>{svgComponent}</View>
      </View>
      <View>
        <Text style={styles.mainText}>{mainText}</Text>
      </View>
      <View>
        <Text style={styles.detailsText}>{detailsText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  outerCircle: {
    width: 195,
    height: 195,
    textAlign: "center",
    borderRadius: 100,
    opacity: 0.7,
    position: "relative",
  },

  innerCircle: {
    paddingLeft: 25,
    paddingTop: 25,
    width: 175.5,
    height: 175.5,
    top: "5%",
    left: "5%",
    backgroundColor: "#fff",
    borderRadius: 100,
    position: "relative",
  },
  image: {
    width: 130,
    height: 130,
    marginTop: 15,
    marginLeft: 5,
  },
  mainText: {
    margin: "auto",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    opacity: 0.75,
    color: "#fff",
    textAlign: "center",
  },
  detailsText: {
    margin: "auto",
    fontSize: 15,
    marginTop: 50,
    opacity: 0.75,
    color: "#fff",
    textAlign: "center",
  },
});
export default IllustrationHolder;
