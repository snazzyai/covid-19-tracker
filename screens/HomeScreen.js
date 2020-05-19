import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import backgroundColor from "../assets/data/backgroundColor";
import data from "../assets/data/data";
import NewsItem from "../components/NewsItem";

const windowWidth = Dimensions.get("window").width - 45;
const windowHeight = Dimensions.get("window").height;

const DATA = data.articles;

const HomeScreen = () => {
  const { search, setSearch } = useState("");

  const onChangeText = (search) => {};

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={onChangeText}
          value={search}
        />
      </View>
      <FlatList
        style={styles.list}
        data={DATA}
        renderItem={({ item }) => (
          <NewsItem
            title={item.title}
            body={item.content}
            imgUrl={item.urlToImage}
          />
        )}
        keyExtractor={(item) => item.source.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: backgroundColor.grey,
  },
  searchbar: {
    width: windowWidth,
    borderRadius: 0,
    marginTop: windowHeight - 690,
  },
  list: {
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});

export default HomeScreen;
