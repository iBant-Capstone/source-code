import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

// Import icons 
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import styles
import * as StyleSheet from './styles';
let styles = StyleSheet.styles;

// React component displaying all the drinks
const CalcDrinkCards = ({ drinks }) => {

  if (drinks !== []) {
    console.log(JSON.stringify(drinks))
    console.log(drinks)
    //drinks = JSON.parse(drinks)
  }

  if (drinks !== []) {
    return (
      <View style={styles.row}>
        {drinks.map((drink, index) => (
          <View key={index} style={[styles.drinkCard, styles.row]}>
            <Text style={[styles.drinkCardTimeContainer, styles.redBoldText, styles.smallText]}>Time here</Text>
            <View style={styles.drinkCardInfoContainer}>
              <Text style={styles.drinkCardNameText}>{JSON.parse(drink).name} ({(JSON.parse(drink).strength * 100).toFixed(1)}%)</Text>
              <Text style={styles.smallText}>{JSON.parse(drink).size.value * 1e3} ml</Text>
            </View>
            <Pressable style={styles.drinkCardDeleteContainer}>
              <Ionicons name='close' style={styles.exIcon} />
            </Pressable>
          </View>
        ))}
      </View>
    );
  } else {
    <Text>Add in drinks to see cards</Text>
  }

}

export default CalcDrinkCards;