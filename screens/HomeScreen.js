import React, { useState, useEffect } from "react";
import {
  Text,
  ActivityIndicator,
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
import { newsApiKey } from "../config";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DATA = data.articles;

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [footerLoading, setFooterLoading] = useState(false);
  const [bytes, setRandomBytes] = useState(Math.random() * 1000000000);

  const url = `https://newsapi.org/v2/everything?q=covid&pageSize=50&apiKey=${newsApiKey}`;
  const fetchNews = async () => {
    hasLoaded ? setIsLoading(false) : setIsLoading(true);
    const fakeUrl = `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`;
    const result = await fetch(url);
    result
      .json()
      .then((data) => {
        setFooterLoading(false);
        setIsLoading(false);
        setHasLoaded(true);
        let newData = news.concat(data.articles);
        setNews(filteredData(newData));
      })
      .catch((error) => {
        setFooterLoading(false);
        setIsLoading(false);
        console.warn(error);
      });
  };

  const filteredData = (array) => {
    return [...new Set(array)];
  };
  const handleLoadMore = () => {
    setFooterLoading(true);
    if (page >= 2) {
      setFooterLoading(false);
      return null;
    }
    setPage(page + 1);
  };

  const footerComponent = () => {
    if (footerLoading) {
      return (
        <View style={styles.footerIndicator}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  const handleChangeText = (value) => {
    setSearch(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={handleChangeText}
          value={search}
        />
      </View>

      {isLoading ? (
        <View style={styles.indicatorView}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={news}
          renderItem={({ item }) => (
            <NewsItem
              title={item.title}
              body={item.description}
              imgUrl={item.urlToImage}
              more={item.url}
            />
          )}
          keyExtractor={(item) => item.title + bytes}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: backgroundColor.grey,
    paddingTop: windowHeight - 630,
  },
  searchbar: {
    width: windowWidth - 45,
    borderRadius: 0,
  },
  list: {
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  indicatorView: {
    marginTop: 20,
  },
  footerIndicator: {
    padding: 15,
  },
});

export default HomeScreen;
