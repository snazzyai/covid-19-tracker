import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Window from '../assets/data/windowSize';
import { Card, Paragraph } from 'react-native-paper';
import { SvgCssUri } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import backgroundColor from '../assets/data/backgroundColor';

const CountrySearch = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showCountryDetails, setShowCountryDetails] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [worldData, setWorldData] = useState(null);

  const getCovidDetailsUrl = 'https://api.covid19api.com/summary';

  const fetchCountries = async () => {
    const result = await fetch(getCovidDetailsUrl);
    result
      .json()
      .then((data) => {
        setIsLoading(false);
        setWorldData(data.Global);
        setCountries(data.Countries);
        setFilteredCountries(data.Countries);
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
    setShowCountryDetails(true);
    setSelectedCountry(country);
  };

  const countryFilter = () => {
    const filtered = countries.filter((data) => {
      return data.Country.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredCountries(filtered);
  };
  // require('../assets/images/newConfirmed.png')
  const onChangeSearch = (query) => setSearchQuery(query);

  const ScrollComponent = ({ imageUrl, text, data }) => {
    return (
      <View style={styles.scrollBox}>
        <Image source={imageUrl} style={styles.imageStyle} />
        <Text style={styles.textCases}>{text}</Text>
        <Text style={styles.textConfirmed}>{data}</Text>
      </View>
    );
  };

  const result = !showCountryDetails ? (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />
      <View>
        <FlatList
          style={styles.list}
          data={filteredCountries}
          renderItem={({ item }) => (
            <View style={styles.cardView}>
              <Card style={styles.card} onPress={() => covidDetails(item)}>
                <Card.Content>
                  <Paragraph style={styles.text}>{item.Country}</Paragraph>
                </Card.Content>
              </Card>
            </View>
          )}
          keyExtractor={(item) => item.CountryCode}
        />
      </View>
    </View>
  ) : (
    <View style={styles.covidView}>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => {
          setShowCountryDetails(false);
        }}
      >
        <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18 }}>
          Search a country
        </Text>
      </TouchableOpacity>

      <View style={styles.worldDataView}>
        <Text style={styles.worldHeading}>WORLDWIDE COVID-19 DATA TODAY</Text>
        <View style={styles.worldData}>
          <Text style={styles.worldDataText}>
            Total Confirmed: {worldData.TotalConfirmed}
          </Text>
        </View>
        <View style={styles.worldData}>
          <Text style={styles.worldDataText}>
            Total Deaths: {worldData.TotalDeaths}
          </Text>
        </View>
        <View style={styles.worldData}>
          <Text style={styles.worldDataText}>
            Total Recovered: {worldData.TotalRecovered}
          </Text>
        </View>
      </View>
      <View style={styles.countryView}>
        <Text style={styles.countryText}>
          {selectedCountry.Country.toUpperCase()}
        </Text>
      </View>
      <View style={styles.scrollViewStyle}>
        <ScrollView horizontal={true}>
          <ScrollComponent
            text="TOTAL NUMBER OF CASES"
            imageUrl={require('../assets/images/totalcases.png')}
            data={selectedCountry.TotalConfirmed}
          />
          <ScrollComponent
            text="TOTAL NUMBER OF DEATHS "
            imageUrl={require('../assets/images/skull.png')}
            data={selectedCountry.TotalDeaths}
          />
          <ScrollComponent
            text="TOTAL RECOVERED"
            imageUrl={require('../assets/images/recovered.png')}
            data={selectedCountry.TotalRecovered}
          />
        </ScrollView>
      </View>
    </View>
  );

  return result;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Window.height - 650,
    paddingBottom: Window.height - 630,
    backgroundColor: backgroundColor.blue,
  },
  search: {
    width: Window.width - 15,
  },
  cardView: {
    padding: 10,
  },
  card: {
    width: Window.width - 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  covidView: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Window.height - 650,
    paddingBottom: Window.height - 620,
    backgroundColor: backgroundColor.blue,
  },
  searchButton: {
    backgroundColor: '#fff',
    width: 250,
    height: 35,
    marginBottom: 10,
  },
  worldDataView: {
    backgroundColor: '#fff',
    padding: 15,
  },
  countryText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
  },
  worldHeading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
  worldData: {
    backgroundColor: '#eee',
    margin: 10,
    padding: 10,
  },
  worldDataText: {
    fontSize: 18,
  },
  scrollViewStyle: {
    height: Window.height - 455,
  },
  scrollBox: {
    width: 200,
    backgroundColor: '#fff',
    marginLeft: 10,
    alignItems: 'center',
  },
  imageStyle: {
    width: 70,
    height: 70,
    marginTop: 20,
    marginBottom: 20,
  },
  textCases: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textConfirmed: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F47313',
    marginTop: 10,
  },
});
export default CountrySearch;
