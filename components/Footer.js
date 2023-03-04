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
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;

  return (
    // <View
    //   style={{
    //     flexDirection: 'row',
    //     justifyContent: leftButtonLabel ? 'space-between' : 'flex-end',
    //     height: HEIGHT,
    //     paddingHorizontal: FOOTER_PADDING
    //   }}
    // >
      <View style={[styles.row, styles.centered, {minWidth: windowWidth * .90}]}>
        {leftButtonLabel && (<Pressable style={styles.centerRedButton} onPress={leftButtonPress}><Text style={styles.mainRedButtonText}>{leftButtonLabel}</Text></Pressable>)}
        {rightButtonLabel && (<Pressable style={styles.centerRedButton} onPress={rightButtonPress}><Text style={styles.mainRedButtonText}>{rightButtonLabel}</Text></Pressable>)}
      </View>
    // </View>
  );
};

export default Footer;