import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './style';

const CarItem = ({ car: { name, tagline, taglineCTA, image } }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground resizeMode='cover' source={image} style={styles.image}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline + ' '}
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default CarItem;
