import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './style';

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
        <StyledButton
          type='primary'
          content='Custom Order'
          onPress={() => console.warn('custom order btn was pressed')}
        />
        <StyledButton
          type='secondary'
          content='Existing Inventory'
          onPress={() => console.warn('Existing Inventory btn was pressed')}
        />
      </ImageBackground>
    </View>
  );
};

export default CarItem;
