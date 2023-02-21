import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';


let styles = StyleSheet.styles;


const BACCalc = ({route, navigation}) => {

    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)

    // React component displaying all the keys (eventually keys = drinks)
    const AsyncDrinks = () => {
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
                console.log(drinksList)

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
                    <Text>Name: {drink.name}, Size: {drink.size}, Strength: {drink.strength}</Text>
                </View>
              ))}
            </View>
        );
    }

    // TODO: add the right data to the async storage set method
    // TODO: build the cards of the drinks added below the add drink button
    // TODO: MAYBE move the async keys component to it's own file?
    // TODO: make the BAC number updateable
    // TODO: add a buffer div to the top of the page

    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>BAC 0.00%</Text>
            <Button
                onPress={() => changeInsideOut(true)}
                title="Inside"
                color="#841584"
                accessibilityLabel="Change the description to the inside version"
            />
            <Button
                onPress={() => changeInsideOut(false)}
                title="Out"
                color="#841584"
                accessibilityLabel="Change the description to the outside version"
            />
            <Text style={styles.centered}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text>
            <Button
                onPress={() => navigation.navigate('AddDrinkPage', { title: 'Add a Drink'})}
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Add a drink"
            />
            <AsyncDrinks />
            <Button
                onPress={() => AsyncStorage.clear()}
                title="Clear Drinks"
                color="#841584"
                accessibilityLabel="Add a drink"
            />
        </View>
    );
};


export default BACCalc