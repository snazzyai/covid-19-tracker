import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TipsItem from '../components/TipsItem';
import tips from '../assets/data/TipsData';
import backgroundColors from '../assets/data/backgroundColor';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TipsScreen = () => {
  return (
    <View style={styles.tipsView}>
      <Text style={styles.pageTitle}>TIPS ON STAYIN SAFE</Text>
      <FlatList
        style={styles.list}
        data={tips}
        renderItem={({ item }) => (
          <TipsItem title={item.title} details={item.details} />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tipsView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: windowHeight - 630,
    backgroundColor: backgroundColors.orange,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default TipsScreen;
