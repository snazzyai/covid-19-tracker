import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";

const windowWidth = Dimensions.get("window").width - 45;
const windowHeight = Dimensions.get("window").height;

const NewsItem = ({ title, imgUrl, body }) => {
  return (
    <View style={styles.newsView}>
      <View>
        <Image style={styles.newsImage} source={{ uri: imgUrl }} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {"THIS IS JUST A TITLE FOR STARTERS AND OTHER SETS TO MAKE SURE THAT THEY ARE REALLY NICE" ||
            title}
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at, officiis temporibus recusandae esse voluptates quae dolorem non dolorum. Laborum reiciendis quam quo cupiditate doloremque. Aliquid nostrum unde neque ad?" ||
            body}
        </Text>
      </View>
      <View style={styles.reference}>
        <Text style={styles.referenceText}>Powered by newsapi.org</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsView: {
    flex: 1,
    alignItems: "center",
  },
  newsImage: {
    backgroundColor: "green",
    width: windowWidth,
    height: windowHeight - 530,
    marginTop: 20,
  },
  title: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  body: {
    padding: 20,
  },
  bodyText: {
    fontSize: 14,
  },
  reference: {
    marginLeft: windowWidth - 145,
  },
  referenceText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default NewsItem;
