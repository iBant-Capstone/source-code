import React from 'react';
import { ScrollView } from 'react-native';

import strengths from "../../json/AddDrink-pages/drinkStrenghts.json"

import AddDrinkCard from '../../components/AddDrinkCard';

const AddDrinkStrength = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.params.newDrink

    const handleStrengthInput = useCallBack((strengthValue) => {
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
                return <AddDrinkCard index={index} selector={strength} handleInput={handleStrengthInput}/>
            })}
        </ScrollView>
    )
}

export default AddDrinkStrength