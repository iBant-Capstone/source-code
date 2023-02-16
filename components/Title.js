import React from 'react';
import { View, Text } from 'react-native';
import * as StyleSheet from '../components/styles';

let styles = StyleSheet.styles;

const Title = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
  </View>
);

export default Title;