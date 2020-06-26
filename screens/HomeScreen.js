import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import backgroundColor from '../assets/data/backgroundColor';
import data from '../assets/data/data';
import NewsItem from '../components/NewsItem';
import Window from '../assets/data/windowSize';
import { newsApiKey } from '../config';
import { Menu } from 'react-native-paper';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [bytes, setRandomBytes] = useState(Math.random() * 1000000000);
  const [error, setError] = useState('');

  const fakeUrl = `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`;
  const url = `https://newsapi.org/v2/everything?q=covid&pageSize=50&apiKey=${newsApiKey}`;
  const fetchNews = async () => {
    setIsLoading(true);
    setError('');
    const result = await fetch(url);
    result
      .json()
      .then((data) => {
        setIsLoading(false);
        setNews(data.articles);
        setFilteredNews(data.articles);
      })
      .catch((error) => {
        setIsLoading(false);
        console.warn(error);
        setError('Error connecting...');
      });
  };

  const filterNews = () => {
    const filtered = news.filter((data) => {
      return data.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredNews(filtered);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    filterNews();
  }, [search]);

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
      <Menu.Item icon="redo" onPress={() => fetchNews()} title="Refresh" />
      {error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : null}

      {isLoading ? (
        <View style={styles.indicatorView}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={filteredNews}
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
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: backgroundColor.grey,
    paddingTop: Window.height - 630,
  },
  searchbar: {
    width: Window.width - 45,
    borderRadius: 0,
  },
  list: {
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  indicatorView: {
    marginTop: 20,
  },
  footerIndicator: {
    padding: 15,
  },
});

export default HomeScreen;
