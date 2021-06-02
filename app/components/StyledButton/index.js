import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';
import { colors } from '../../configs/theme/palette';

const StyledButton = ({ type, content, onPress }) => {
  const backgroundColor =
    type === 'primary' ? colors.primary : colors.secondary;
  const textColor = type === 'primary' ? colors.secondary : colors.primary;

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
