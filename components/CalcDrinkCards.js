import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Pressable } from 'react-native';
import * as StyleSheet from './styles';
import { useFocusEffect } from '@react-navigation/native'
import Ionicons from 'react-native-ionicons';

let styles = StyleSheet.styles;

// React component displaying all the drinks
const CalcDrinkCards = () => {
  // stores the drinks in the component's state. 
  const [drinks, setDrinks] = useState([]);

  // retrieves the drinks from async storage eveytime the component is refocused 
  // (had to use a FocusEffect because the regular useEffect only remounted the component after a bigger reload of the entire app)
  useFocusEffect(
    React.useCallback(() => {
      async function getDrinks() {
        try {
          // Get the list of drinks from the async storage
          const drinksListAsync = await AsyncStorage.getItem('drinks');

          // Get the parsed version of the drinkslist (or empy array if we don't have any drinks saved)
          let drinksList = drinksListAsync ? JSON.parse(drinksListAsync) : [];
          console.log("Drinks list: " + drinksList)

          // Set our state drinksList
          setDrinks(drinksList);
        } catch (error) {
          console.log(error);
        }
      }
      getDrinks();
    }, [])
  );

  // Returns the JSX to display
  return (
    <View style={styles.row}>
      {drinks.map((drink, index) => (
        <View key={index} style={[styles.drinkCard, styles.row]}>
          <Text style={[styles.drinkCardTimeContainer, styles.redBoldText, styles.smallText]}>Time here</Text>
          {/* <Text>Drink {index + 1}:</Text> */}
          <View style={styles.drinkCardInfoContainer}>
            <Text style={styles.drinkCardNameText}>{JSON.parse(drink).name} ({JSON.parse(drink).strength.toFixed(3)})</Text>
            <Text style={styles.smallText}>{JSON.parse(drink).size.value} fl oz</Text>
          </View>
          <Pressable style={styles.drinkCardDeleteContainer}>
            <Ionicons ios={'ios-close'} android={'md-close'} style={styles.exIcon}/>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

export default CalcDrinkCards;