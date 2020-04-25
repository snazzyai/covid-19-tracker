import * as React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SkipComponent = () => {
  return (
    <View style={styles.skipView}>
      <Text style={styles.skipText}>Skip</Text>
      <Image
        style={styles.triangle}
        source={require("../assets/images/arrow.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skipView: {
    paddingLeft: windowWidth - 150,
    paddingTop: "7%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  skipText: {
    color: "#fff",
    fontSize: 22,
  },
  triangle: {
    width: 21,
    height: 21,
    marginTop: 6,
    marginLeft: 10,
  },
});

export default SkipComponent;
