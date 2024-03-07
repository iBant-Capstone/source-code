import React from 'react';
import { ScrollView, Text, Pressable, Image } from "react-native";

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';

import types from "../../json/AddDrink-pages/drinkTypes.json"

// import { textStyles } from "../styles/textStyles";

import handleInput from '../../components/addDrink-components/handleInput';

import { containerStyles } from '../../components/styles/containerStyles';



const AddDrinkType = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = {}

    let data = types
    let newKey = "name"
    let nextPage = "AddDrinkStrength"

    const handleAddDrinksInput = (newValue) => {
        // If they click the custom card we don't start building the newDrink yet and head them over to
        //      the custom building page
        if (newValue == 'custom') {
            navigation.navigate("__", { drinks: drinks, newDrink: newDrink })
        }

        // Otherwise we proceed as normal
        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }

    return (
      <ScrollView style={containerStyles.phoneScreen}>
        <p>Add Your Feelings</p>
        
        {/* <Text style={[textStyles.text, textStyles.boldText]}>Add Drink</Text> */}

        <AddDrinkCards
          data={data}
          handleAddDrinksInput={handleAddDrinksInput}
        />
      </ScrollView>
    );
}

export default AddDrinkType