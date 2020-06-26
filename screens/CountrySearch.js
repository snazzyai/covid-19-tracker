import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Window from '../assets/data/windowSize';
import { Card, Title, Paragraph } from 'react-native-paper';

const CountrySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getCountriesUrl = 'https://restcountries.eu/rest/v2/all';

  const fetchCountries = async () => {
    const result = await fetch(getCountriesUrl);
    result
      .json()
      .then((data) => {
        setIsLoading(false);
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.warn(error);
      });
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    countryFilter();
  }, [searchQuery]);

  const covidDetails = (country) => {
    console.warn(country);
  };
  const countryFilter = () => {
    const filtered = countries.filter((data) => {
      return data.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredCountries(filtered);
  };

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View>
        <FlatList
          style={styles.list}
          data={filteredCountries}
          renderItem={({ item }) => (
            <View style={styles.cardView}>
              <Card style={styles.card} onPress={() => covidDetails(item.name)}>
                <Card.Content>
                  <Paragraph>{item.name}</Paragraph>
                </Card.Content>
              </Card>
            </View>
          )}
          keyExtractor={(item) => item.alpha2Code}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Window.height - 630,
    paddingBottom: Window.height - 630,
  },
  cardView: {
    padding: 10,
  },
  card: {
    width: Window.width - 20,
  },
});
export default CountrySearch;
