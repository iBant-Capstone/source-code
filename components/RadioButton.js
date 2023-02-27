import React from 'react';
import { View, Text } from 'react-native';

export default function RadioButton({ options, onSelect }) {
  return (
    <View>
      {options.map((item) => {
        return <Text> {item.value}</Text>;
      })}
    </View>
  );
}