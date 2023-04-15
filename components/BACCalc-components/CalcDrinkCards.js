import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as StyleSheet from '../styles';
let styles = StyleSheet.styles;



const CalcDrinkCards = ({ drinks, navigation } ) => {
  // console.log(drinks);
  // console.log(typeof(drinks));
  // console.log(drinks.filter(item => !item.hasOwnProperty('name') || item.name !== 'Wine/Sake (15.0%)'))

  const handleDelete = async (drink) => {
    console.log("inside handleDelete", drink);
    try {
    //   // remove the drink
      let drinkName = drink.name + " " + "(" + (drink.strength * 100).toFixed(1) + ")%";
      console.log(drinkName);
      console.log(drinks);
      let drinksDelete = drinks.filter(obj => !Object.entries(drink).every(([key, value]) => obj[key] === value));
      console.log(drinksDelete);
      let drinksToSend = JSON.stringify(drinksDelete)
    //   // Push the new list to async storageT
      await AsyncStorage.setItem('drinks', drinksToSend)
      navigation.navigate('BAC Calc')
    }
    catch (error) {
      console.log(error);
    }
  }

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
              <Pressable style={styles.drinkCardDeleteContainer} onPress={() => handleDelete(drink)}>
                <Ionicons name='close' style={styles.exIcon}  />
              </Pressable>
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