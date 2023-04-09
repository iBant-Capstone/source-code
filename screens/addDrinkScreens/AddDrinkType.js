import React from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';

import types from "../../json/AddDrink-pages/drinkTypes.json"

const AddDrinkType = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = {}

    let data = types
    let newKey = "type"
    let nextPage = "AddDrinkSize"

    return (
        <ScrollView>
            <AddDrinkCards data={data} drinks={drinks} newDrink={newDrink} newKey={newKey} nextPage={nextPage} navigation={navigation}/>
        </ScrollView>
    )
}

export default AddDrinkType