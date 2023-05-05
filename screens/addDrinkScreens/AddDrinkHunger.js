import React from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';

import handleInput from '../../components/addDrink-components/handleInput';

import hungerValues from "../../json/AddDrink-pages/hungerValues.json"

import { containerStyles } from '../../components/styles/containerStyles';

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
        <ScrollView style={containerStyles.phoneScreen}>
            <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
        </ScrollView>
    )
 
}

export default AddDrinkHunger