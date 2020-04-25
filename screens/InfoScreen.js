import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import ColoredText from "../components/ColoredText";
import NavigationCircle from "../components/NavigationCircle";
import SkipComponent from "../components/SkipComponent";

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.map} source={require("../assets/images/map.png")} />
      <ColoredText
        textOne={"Tracking"}
        textTwo={"covid-19 virus"}
        textThree={"around the world"}
        colorOne={"#0080FF"}
        colorTwo={"#FC0202"}
        colorThree={"#07B5B5"}
        fontSize={30}
      />
      <NavigationCircle />
      <SkipComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000",
  },
  map: {
    marginTop: "20%",
    width: "120%",
    height: 300,
  },
});
export default InfoScreen;
