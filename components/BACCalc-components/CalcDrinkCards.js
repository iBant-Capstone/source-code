import React from 'react';
import { View, Text } from 'react-native';

import * as StyleSheet from '../styles';
let styles = StyleSheet.styles;

const CalcDrinkCards = ({ drinks }) => {
  return (
    <View style={{ width: '100%' }}>
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
        <Text>Add in drinks to see cards</Text>
      }
    </View>
  )

}

export default CalcDrinkCards;