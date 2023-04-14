import React from 'react';
import { Text, View, useWindowDimensions, Pressable } from 'react-native';

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;

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
    <View style={[styles.row, styles.centered, { height: HEIGHT, minWidth: windowWidth, position: 'absolute', top: windowHeight - HEIGHT }]}>
      {leftButtonLabel && (<Pressable style={styles.centerRedButton} onPress={leftButtonPress}><Text style={styles.mainRedButtonText}>{leftButtonLabel}</Text></Pressable>)}
      {rightButtonLabel && (<Pressable style={styles.centerRedButton} onPress={rightButtonPress}><Text style={styles.mainRedButtonText}>{rightButtonLabel}</Text></Pressable>)}
    </View>
  );
};

export default Footer;