import React from 'react';
import { Pressable, Text } from 'react-native';

import * as StyleSheet from '../styles'
let styles = StyleSheet.styles;

const GetHomeSafelyButton = ({ url, title }) => {
    return (
        <Pressable
            onPress={() => Linking.openURL(url)}
            accessibilityLabel={title}
            style={styles.leftRedButton}>
            <Text style={styles.mainRedButtonText}>{title}</Text>
        </Pressable>
    )
  }
  
  export default GetHomeSafelyButton;