import React from 'react';
import { Text, View, useWindowDimensions, Pressable } from 'react-native';

// Import styles
import { styles } from '../components/styles';
import { containerStyles } from './styles/containerStyles';
import { buttonStyles } from './styles/buttonStyles';

// Set states
const Footer = ({
  leftButtonLabel = false,
  leftButtonPress = false,
  rightButtonLabel = false,
  rightButtonPress = false
}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const HEIGHT = windowHeight * 0.21;

  return (
    <View style={[containerStyles.row, containerStyles.centerContainer, { height: HEIGHT, minWidth: windowWidth, position: 'absolute', top: windowHeight - HEIGHT }]}>
      {leftButtonLabel && (<Pressable style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]} onPress={leftButtonPress}><Text style={styles.mainRedButtonText}>{leftButtonLabel}</Text></Pressable>)}
      {rightButtonLabel && (<Pressable style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]} onPress={rightButtonPress}><Text style={styles.mainRedButtonText}>{rightButtonLabel}</Text></Pressable>)}
    </View>
  );
};

export default Footer;