import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Window from '../assets/data/windowSize';

const windowWidth = Dimensions.get('window').width - 45;
const windowHeight = Dimensions.get('window').height;

const TipsItem = ({ title, details }) => {
  return (
    <View style={styles.newsView}>
      <View style={styles.cardView}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title.toUpperCase()}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            {details.map((detail, i) => {
              return (
                <Text key={i} style={styles.details}>
                  {' '}
                  {detail}{' '}
                </Text>
              );
            })}
          </Text>
        </View>
        <View style={styles.reference}>
          <Text style={styles.referenceText}>
            From Center for Disease Control
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsView: {
    flex: 1,
  },
  cardView: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 20,
  },

  title: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 15,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  details: {
    textAlign: 'center',
    alignItems: 'center',
  },
  body: {
    padding: 20,
  },
  bodyText: {
    fontSize: 16,
  },
  reference: {
    marginLeft: Window.width - 235,
    marginBottom: 5,
  },
  referenceText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default TipsItem;
