import React from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/AddDrink-components/AddDrinkCards';

import handleInput from '../../components/AddDrink-components/handleInput';

import hungerValues from "../../json/AddDrink-pages/hungerValues.json"

const AddDrinkHunger = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.params.newDrink

    let data = hungerValues
    let newKey = "halfLife"
    let nextPage = "BACCalc"

    const handleAddDrinksInput = (hungerValue) => {
        let newValue = Number(hungerValue)
        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }

    return (
        <ScrollView>
            <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
        </ScrollView>
    )
 
}

export default AddDrinkHunger