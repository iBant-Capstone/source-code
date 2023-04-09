import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';

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
        let currentTypeSizes = []
        types.map((type) => {
            if (type.title == newDrink.type) {
                currentTypeSizes = type.sizes
            }
        })
        let sizesBasedOnType = sizes.filter(size => currentTypeSizes.includes(size.id))
        setData(sizesBasedOnType)
    }, [])

    if (data !== null) {
        return (
            <ScrollView>
                <AddDrinkCards data={data} drinks={drinks} newDrink={newDrink} newKey={newKey} nextPage={nextPage} navigation={navigation}/>
            </ScrollView>
        )
    } else {
        return(<ScrollView></ScrollView>)
    }
 
}

export default AddDrinkSize