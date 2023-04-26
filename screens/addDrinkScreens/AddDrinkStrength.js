import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';
import AddDrinkCustomInput from '../../components/addDrink-components/AddDrinkCustomInput';

import displayBasedOnType from '../../components/addDrink-components/displayBasedOnType';
import handleInput from '../../components/addDrink-components/handleInput';

import strengths from "../../json/AddDrink-pages/drinkStrengths.json"
import types from "../../json/AddDrink-pages/drinkTypes.json"

const AddDrinkSize = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.params.newDrink

    const [data, setData] = useState(null)
    let newKey = "strength"
    let nextPage = "AddDrinkSize"

    // Finds the sizes we need to display based on what type we selected in the screen before
    useEffect(() => {
        let filteredData = displayBasedOnType(types, newDrink, 'strengths', strengths)
        let sortedData = filteredData.sort((a, b) => (a.title > b.title) ? 1 : -1);
        setData(sortedData)
    }, [])

    const handleAddDrinksInput = (strengthValue) => {
        let newValue = Number(strengthValue) / 100
        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }

    if (data !== null) {
        return (
            <ScrollView>
                <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
                <AddDrinkCustomInput 
                    inputDescriptor={"Strength"}
                    handleAddDrinksInput={handleAddDrinksInput} 
                    includeButtons={false}
                    placeholderText={"e.g. 12 for 12%, 4 for 4%, ..."}
                    presetUnitPressed={""}
                />
            </ScrollView>
        )
    }
 
}

export default AddDrinkSize