import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Window from '../assets/data/windowSize';

const NewsItem = ({ title, imgUrl, body, more }) => {
  const loadWebpage = async (page) => {
    await WebBrowser.openBrowserAsync(more);
  };

  return (
    <View style={styles.newsView}>
      <View>
        <Image style={styles.newsImage} source={{ uri: imgUrl }} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title.toUpperCase()}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>{body}</Text>
        <Text style={styles.readText} onPress={loadWebpage}>
          Read More...
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
    alignItems: 'center',
  },
  newsImage: {
    backgroundColor: 'green',
    width: Window.width - 45,
    height: 200,
    marginTop: 20,
  },
  title: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  body: {
    padding: 20,
  },
  bodyText: {
    fontSize: 14,
  },
  reference: {
    marginLeft: Window.width - 190,
  },
  referenceText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default NewsItem;
