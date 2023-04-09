import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';

import strengths from "../../json/AddDrink-pages/drinkStrengths.json"
import types from "../../json/AddDrink-pages/drinkTypes.json"

const AddDrinkHunger = ({ route, navigation }) => {
    // let drinks = route.params.drinks
    // let newDrink = route.params.newDrink

    // const [data, setData] = useState(null)
    // let newKey = "strength"
    // let nextPage = "AddDrinkHunger"

    // // Finds the sizes we need to display based on what type we selected in the screen before
    // useEffect(() => {
    //     setData(displayBasedOnType(types, newDrink, 'strengths', strengths))
    // }, [])

    // const handleAddDrinksInput = (newValue) => {
    //     handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    // }

    return (
        <Text>You made it! Yay!</Text>
    )
 
}

export default AddDrinkHunger