import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          resizeMode='cover'
          source={require('./app/assets/images/ModelX.jpeg')}
          style={styles.image}
        >
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $69,420</Text>
          </View>
        </ImageBackground>
      </View>
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
  carContainer: { width: '100%', height: '100%' },
  titleWrapper: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: { fontSize: 40, fontWeight: '500' },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default App;
