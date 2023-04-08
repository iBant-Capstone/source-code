import React from 'react';
import { ScrollView } from 'react-native';

import amounts from "../../json/AddDrink-pages/drinkAmounts.json"

import AddDrinkCard from '../../components/AddDrinkCard';

const AddDrinkAmount = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.params.newDrink

    const handleAmountInput = useCallBack((amountValue) => {
        newDrink = {
            ...newDrink,
            amount: amountValue
        }
        try {
            navigation.navigate('___', { drinks: drinks, newDrink: newDrink})
        } catch (err) {
            console.log(err)
        }
    })

    return (
        <ScrollView>
            {amounts.map((amount, index) => {
                return <AddDrinkCard index={index} selector={amount} handleInput={handleAmountInput}/>
            })}
        </ScrollView>
    )
}

export default AddDrinkAmount