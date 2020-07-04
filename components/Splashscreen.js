import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Splashscreen = () => {
  return (
    <View style={styles.containerSplash}>
      <Image
        style={styles.imageSplash}
        source={require('../assets/images/splash.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  imageSplash: {
    width: 150,
    height: 150,
  },
});

export default Splashscreen;
