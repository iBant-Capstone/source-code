import React from 'react';
import { ScrollView } from 'react-native';

import types from "../../json/AddDrink-pages/drinkTypes.json"

import AddDrinkCard from '../../components/AddDrinkCard';

const AddDrinkType = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = {}

    const handleTypeInput = useCallBack((typeValue) => {
        newDrink = {
            ...newDrink,
            type: typeValue
        }
        try {
            navigation.navigate('___', { drinks: drinks, newDrink: newDrink})
        } catch (err) {
            console.log(err)
        }
    })

    return (
        <ScrollView>
            {types.map((type, index) => {
                return <AddDrinkCard index={index} selector={type} handleInput={handleTypeInput}/>
            })}
        </ScrollView>
    )
}

export default AddDrinkType