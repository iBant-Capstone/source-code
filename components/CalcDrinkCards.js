import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text } from 'react-native';
import * as StyleSheet from './styles';

let styles = StyleSheet.styles;

// React component displaying all the drinks
const CalcDrinkCards = () => {
    // stores the keys in the component's state. 
    const [drinks, setDrinks] = useState([]);

    // retrieves the drinks from async storage
    useEffect(() => {
        async function getDrinks() {
          try {
            // Get the list of drinks from the async storage
            const drinksListAsync = await AsyncStorage.getItem('drinks');

            // Get the parsed version of the drinkslist (or empy array if it's empty)
            let drinksList = drinksListAsync ? JSON.parse(drinksListAsync) : [];
            console.log("Drinks list: " + drinksList)

            // Set our state drinksList
            setDrinks(drinksList);
          } catch (error) {
            console.log(error);
          }
        }

        getDrinks();
    }, []);

    // Returns the JSX to display
    return (
        <View>
          <Text>Drinks in async storage:</Text>
          {drinks.map((drink, index) => (
            <View key={index}>
                <Text>Drink {index}:</Text>
                <Text>Name: {JSON.parse(drink).name}, Size: {JSON.parse(drink).size}, Strength: {JSON.parse(drink).strength}</Text>
            </View>
          ))}
        </View>
    );
}

export default CalcDrinkCards;