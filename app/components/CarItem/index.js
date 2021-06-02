import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './style'

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        resizeMode='cover'
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      >
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CarItem;
