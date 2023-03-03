import React from 'react';
import { View, useWindowDimensions } from 'react-native';

// Import component
import RoundedButton from './RoundedButton';

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
    <View
      style={{
        flexDirection: 'row',
        justifyContent: leftButtonLabel ? 'space-between' : 'flex-end',
        height: HEIGHT,
        backgroundColor: '#CF5260',
        alignItems: 'center',
        paddingHorizontal: FOOTER_PADDING
      }}
    >
      {leftButtonLabel && (<RoundedButton label={leftButtonLabel} onPress={leftButtonPress} />)}
      {rightButtonLabel && (<RoundedButton label={rightButtonLabel} onPress={rightButtonPress} />)}
    </View>
  );
};

export default Footer;