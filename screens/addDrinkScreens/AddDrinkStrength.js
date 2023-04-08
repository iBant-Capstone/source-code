import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';

import strengths from "../../json/AddDrink-pages/drinkStrengths.json"

import AddDrinkCard from '../../components/addDrink-components/AddDrinkCard';

const AddDrinkStrength = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.params.newDrink

    const handleStrengthInput = useCallback((strengthValue) => {
        newDrink = {
            ...newDrink,
            amount: strengthValue
        }
        try {
            navigation.navigate('___', { drinks: drinks, newDrink: newDrink})
        } catch (err) {
            console.log(err)
        }
    })

    return (
        <ScrollView>
            {strengths.map((strength, index) => {
                return <AddDrinkCard key={index} selector={strength} handleInput={handleStrengthInput}/>
            })}
        </ScrollView>
    )
}

export default AddDrinkStrength