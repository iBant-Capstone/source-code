import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';
import AddDrinkCustomInput from '../../components/addDrink-components/AddDrinkCustomInput';

import displayBasedOnType from '../../components/addDrink-components/displayBasedOnType';
import handleInput from '../../components/addDrink-components/handleInput';

import sizes from "../../json/AddDrink-pages/drinkSizes.json"
import types from "../../json/AddDrink-pages/drinkTypes.json"

import { containerStyles } from '../../components/styles/containerStyles';

const AddDrinkSize = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.params.newDrink

    const [data, setData] = useState(null)
    let newKey = "size"
    let nextPage = "AddDrinkTime"

    // Finds the sizes we need to display based on what type we selected in the screen before
    useEffect(() => {
        setData(displayBasedOnType(types, newDrink, 'sizes', sizes))
    }, [])

    const handleAddDrinksInput = (inputValue, unitValue) => {
        let newValue = {}
        if (unitValue == 'oz') {
            newValue = {
                unit: 'ml',
                value: inputValue * 29.5735296 / 1e3
            }
        } else {
            newValue = {
                unit: 'ml',
                value: inputValue / 1e3
            }
        }
        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }

    if (data !== null) {
        return (
            <ScrollView style={containerStyles.phoneScreen}>
                <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
                <AddDrinkCustomInput 
                    inputDescriptor={"Size"}
                    placeholderText={"125, 54, ..."}
                    presetUnitPressed={"ml"}
                    handleAddDrinksInput={handleAddDrinksInput} 
                    includeButtons={true}
                />
            </ScrollView>
        )
    } else {
        return(<ScrollView></ScrollView>)
    }
 
}

export default AddDrinkSize