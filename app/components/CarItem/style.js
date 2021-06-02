import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});

export default styles;
