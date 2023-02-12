import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40
  },
  headerText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500'
  }
});
export default Title;