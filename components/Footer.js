import React from 'react';
import { Text, View, useWindowDimensions, Pressable } from 'react-native';

// Import styles
import { containerStyles } from './styles/containerStyles';
import { buttonStyles } from './styles/buttonStyles';
import { textStyles } from './styles/textStyles';


// Set states
const Footer = ({
  leftButtonLabel = false,
  leftButtonPress = false,
  rightButtonLabel = false,
  rightButtonPress = false
}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = 667; // useWindowDimensions().height;
  const HEIGHT = windowHeight * 0.11;

  return (
    <View style={[containerStyles.row, containerStyles.centerContainer, { height: HEIGHT, width: 375, position: 'absolute', top: windowHeight - HEIGHT }]}>
      {leftButtonLabel && (<Pressable style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]} onPress={leftButtonPress}><Text style={textStyles.whiteSemiBoldText}>{leftButtonLabel}</Text></Pressable>)}
      {rightButtonLabel && (<Pressable style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]} onPress={rightButtonPress}><Text style={textStyles.whiteSemiBoldText}>{rightButtonLabel}</Text></Pressable>)}
    </View>
  );
};

export default Footer;