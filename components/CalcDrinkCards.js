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

  // If there are drinks we show the cards, otherwise we say they need to add the cards
  return (
    <View>
      {drinks.length !== 0 ?
        <View style={styles.row}>
          {drinks.map((drink, index) => (
            <View key={index} style={[styles.drinkCard, styles.row]}>
              <Text style={[styles.drinkCardTimeContainer, styles.redBoldText, styles.smallText]}>{new Date(drink.timeOfDrink).getHours()}:{new Date(drink.timeOfDrink).getMinutes()}</Text>
              <View style={styles.drinkCardInfoContainer}>
                <Text style={styles.drinkCardNameText}>{drink.name} ({(drink.strength * 100).toFixed(1)}%)</Text>
                <Text style={styles.smallText}>{drink.size.value * 1e3} ml</Text>
              </View>
              {/* Commented out individual drink deletion for now: */}
              {/* <Pressable style={styles.drinkCardDeleteContainer}>
                <Ionicons name='close' style={styles.exIcon} />
              </Pressable> */}
            </View>
          ))}
        </View>
        :
        <Text style={{color: 'white'}}>Add in drinks to see cards</Text>
      }
    </View>
  )

}

export default CalcDrinkCards;