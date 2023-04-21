import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';
import AddDrinkSizeCustomInput from '../../components/addDrink-components/AddDrinkSizeCustomInput';

import displayBasedOnType from '../../components/addDrink-components/displayBasedOnType';
import handleInput from '../../components/addDrink-components/handleInput';

import sizes from "../../json/AddDrink-pages/drinkSizes.json"
import types from "../../json/AddDrink-pages/drinkTypes.json"

const AddDrinkSize = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.params.newDrink

    const [data, setData] = useState(null)
    let newKey = "size"
    let nextPage = "AddDrinkStrength"

    // Finds the sizes we need to display based on what type we selected in the screen before
    useEffect(() => {
        setData(displayBasedOnType(types, newDrink, 'sizes', sizes))
    }, [])

    const handleAddDrinksInput = (sizeInMl) => {
        let newValue = {
            unit: "ml",
            value: sizeInMl / 1e3
        }
        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }

    if (data !== null) {
        return (
            <ScrollView>
                <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
                <AddDrinkSizeCustomInput handleAddDrinksInput={handleAddDrinksInput} />
            </ScrollView>
        )
    } else {
        return(<ScrollView></ScrollView>)
    }
 
}

export default AddDrinkSize