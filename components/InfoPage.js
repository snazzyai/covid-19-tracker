import * as React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import SvgWorld from "../assets/svgJS/Worldsvg";
import SvgDistance from "../assets/svgJS/Distancesvg";
import SvgPersonal from "../assets/svgJS/Personalsvg";

import IllustrationHolder from "../components/IllustrationHolder";
import SkipButton from "../components/SkipButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const InfoPage = ({ backgroundColor, svg }) => {
  return (
    <SafeAreaView
      style={(styles.container, { backgroundColor: `${backgroundColor}` })}
    >
      <View style={styles.innerContainer}>
        <IllustrationHolder
          svgComponent={svg}
          mainText={mainText}
          detailsText={detailsText}
          outerColor={backgroundColor}
        />
        <SkipButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
  },
});

export default InfoPage;
