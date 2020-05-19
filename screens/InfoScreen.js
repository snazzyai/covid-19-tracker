import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import IllustrationHolder from "../components/IllustrationHolder";
import SkipButton from "../components/SkipButton";
import NavigationCircle from "../components/NavigationCircle";
import ViewPager from "@react-native-community/viewpager";
import SvgWorld from "../assets/svgJS/Worldsvg";
import SvgDistance from "../assets/svgJS/Distancesvg";
import SvgPersonal from "../assets/svgJS/Personalsvg";
import { InfoPage } from "../components/InfoPage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const svgOne = <SvgWorld />;
const svgTwo = <SvgDistance />;
const svgThree = <SvgPersonal />;

const InfoScreenOne = () => {
  return (
    <SafeAreaView style={[styles.container, styles.colorOne]}>
      <View style={styles.innerContainer}>
        <IllustrationHolder
          svgComponent={svgOne}
          mainText={"Track Virus"}
          detailsText={"Track Covid-19 virus around the world"}
          outerColor={"#B6FFB6"}
        />
        <SkipButton />
      </View>
    </SafeAreaView>
  );
};

const InfoScreenTwo = () => {
  return (
    <SafeAreaView style={[styles.container, styles.colorTwo]}>
      <View style={styles.innerContainer}>
        <IllustrationHolder
          svgComponent={svgTwo}
          mainText={"Get Tips"}
          detailsText={"Get tips on how to stay protected"}
          outerColor={"#FFE0AE"}
        />
        <SkipButton />
      </View>
    </SafeAreaView>
  );
};

const InfoScreenThree = () => {
  return (
    <SafeAreaView style={[styles.container, styles.colorThree]}>
      <View style={styles.innerContainer}>
        <IllustrationHolder
          svgComponent={svgThree}
          mainText={"Latest News"}
          detailsText={"Get the latest news on covid-19 virus around the world"}
          outerColor={"#FFA299"}
        />
        <SkipButton />
      </View>
    </SafeAreaView>
  );
};

const InfoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1">
          <InfoScreenOne />
        </View>
        <View key="2">
          <InfoScreenTwo />
        </View>
        <View key="3">
          <InfoScreenThree />
        </View>
      </ViewPager>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: windowHeight - 650,
  },
  viewPager: {
    flex: 1,
  },
  colorOne: { backgroundColor: "#279E65" },
  colorTwo: { backgroundColor: "#E79E29" },
  colorThree: { backgroundColor: "#E7675A" },
});
export default InfoScreen;
