import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text } from 'react-native';
import * as StyleSheet from './styles';
import { useFocusEffect } from '@react-navigation/native'

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
        <View>
          {drinks.map((drink, index) => (
            <View key={index} style={{flexDirection: 'row'}}>
              <Text>time</Text>
              <View>
                <Text>{JSON.parse(drink).name} {JSON.parse(drink).strength * 100}</Text>
                <Text>{JSON.parse(drink).size.value} {JSON.parse(drink).size.unit}</Text>
              </View>
            </View>
          ))}
        </View>
    );
}

export default CalcDrinkCards;