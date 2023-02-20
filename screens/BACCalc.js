import React, {useState} from 'react';
import {Text, View, Button } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";
import AddDrink from "./AddDrink.js"

let styles = StyleSheet.styles;
const headerTitle = 'BAC Calculator';

const BACCalc = ({route, navigation}) => {

    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)

    // TEST DATA FOR CARDS AT THE BOTTOM
    route.drinks = ["mimosa", "sake"]

    // If we haven't already added a drink yet then initialize the drinks array 
    if (typeof route.drinks == 'undefined') {
        route.drinks = []
    } 

    // TODO: create the array that will hold the different drinks that people add
    // TODO: pass the array to AddDrinks page
    // TODO: create a button in AddDrinks that adds a drink to the array
    // TODO: create a simple text display of the array on the BACCAlc page 
    // TODO: build the cards of the drinks added below the add drink button
    // TODO: make the BAC number updateable
    // TODO: add a buffer div to the top of the page

    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>BAC 0.00%</Text>
            <Button
                onPress={() => changeInsideOut(true)}
                title="Inside"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => changeInsideOut(false)}
                title="Out"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text style={styles.centered}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text>
            <Button
                onPress={() => navigation.navigate('AddDrinkPage', { title: 'Add a Drink', drinks: route.drinks})}
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            {
                route.drinks.map((drink, index) => (
                    <Text key={index}>{drink}</Text>
                ))
            }
        </View>
    );
};


export default BACCalc