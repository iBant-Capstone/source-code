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
          // console.log("Drinks list: " + drinksList)

          // Set our state drinksList
          setDrinks(drinksList);
        } catch (error) {
          console.log(error);
        }
      }
      getDrinks();
    }, [])
  );

  // comment this out later 
  // Returns the JSX to display
  return (
    <View style={styles.row}>
      {drinks.map((drink, index) => (
        <View key={index} style={[styles.drinkCard, styles.row]}>
          <Text style={[styles.drinkCardTimeContainer, styles.redBoldText, styles.smallText]}>{new Date(JSON.parse(drink).timeOfDrink).getHours()}:{new Date(JSON.parse(drink).timeOfDrink).getMinutes()}</Text>
          <View style={styles.drinkCardInfoContainer}>
            <Text style={styles.drinkCardNameText}>{JSON.parse(drink).name} ({(JSON.parse(drink).strength * 100).toFixed(1)}%)</Text>
            <Text style={styles.smallText}>{JSON.parse(drink).size.value * 1e3} ml</Text>
          </View>
          {/* <Pressable style={styles.drinkCardDeleteContainer}>
            <Ionicons name='close' style={styles.exIcon} />
          </Pressable> */}
        </View>
      ))}
    </View>
  );
}

export default CalcDrinkCards;