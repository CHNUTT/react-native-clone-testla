import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './app/components/CarItem';

const App = () => {
  return (
    <View style={styles.container}>
      <CarItem
        name='Modex X'
        tagline='Starting from $99,500'
        image={require('./app/assets/images/Model3.jpeg')}
        taglineCTA='Touchless Delivery'
      />
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
