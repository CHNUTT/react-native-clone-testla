import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem';
import cars from '../../configs/constant/cars';

import styles from './style';

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem key={item.name} car={item} />}
        keyExtractor={(item) => item.name}
        snapToAlignment='start'
        decelerationRate='fast'
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ); 
};

export default CarList;
