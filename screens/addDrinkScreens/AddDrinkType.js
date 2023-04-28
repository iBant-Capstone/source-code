import React from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';

import types from "../../json/AddDrink-pages/drinkTypes.json"

import handleInput from '../../components/addDrink-components/handleInput';

const AddDrinkType = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = {}

    let data = types
    let newKey = "name"
    let nextPage = "AddDrinkStrength"

    const handleAddDrinksInput = (newValue) => {
        // If they click the custom card we don't start building the newDrink yet and head them over to
        //      the custom building page
        if (newValue == 'custom') {
            navigation.navigate("__", { drinks: drinks, newDrink: newDrink })
        }

        // Otherwise we proceed as normal
        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }

    return (
        <ScrollView>
            <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
        </ScrollView>
    )
}

export default AddDrinkType