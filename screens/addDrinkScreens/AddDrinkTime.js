import React from 'react';
import { ScrollView } from 'react-native';

import ExactTimeInput from "../../components/addDrink-components/ExactTimeInput"
import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';

import relativeTimeValues from "../../json/AddDrink-pages/relativeTimeValues.json"

import handleInput from '../../components/addDrink-components/handleInput';

import { containerStyles } from '../../components/styles/containerStyles';

const AddDrinkTime = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.params.newDrink

    let data = relativeTimeValues
    let newKey = "timeOfDrink"
    let nextPage = "AddDrinkHunger"

    const handleRelativeTimeInput = (minAgo) => {
        let date = new Date();
        date.setMinutes(date.getMinutes() - minAgo);
        let newValue = date
        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }
    const handleExactTimeInput = (min, hour, timeOfDay) => {
        let currentDate = new Date()
        let newValue = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), (timeOfDay === 'AM' ? Number(hour) : Number(hour) + 12), Number(min))
        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }

    return (
        <ScrollView style={containerStyles.phoneScreen}>
            <AddDrinkCards data={data} handleAddDrinksInput={handleRelativeTimeInput} />
            <ExactTimeInput handleExactTimeInput={handleExactTimeInput} />
        </ScrollView>
    )
 
}

export default AddDrinkTime