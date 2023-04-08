import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';

import sizes from "../../json/AddDrink-pages/drinkSizes.json"

const AddDrinkSize = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = {}

    let data = sizes
    let newKey = "size"
    let nextPage = "AddDrinkStrength"

    return (
        <ScrollView>
            <AddDrinkCards data={data} drinks={drinks} newDrink={newDrink} newKey={newKey} nextPage={nextPage} navigation={navigation}/>
        </ScrollView>
    )
}

export default AddDrinkSize