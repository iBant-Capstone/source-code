import React, { useState } from "react";

import { ScrollView, Text, View} from "react-native";

import AddDrinkCards from "../../components/addDrink-components/AddDrinkCards";

import types from "../../json/AddDrink-pages/drinkTypes.json";

import handleInput from "../../components/addDrink-components/handleInput";

import { containerStyles } from "../../components/styles/containerStyles";

import { EmotionalSliderStyles } from "../../components/styles/emotionalSliderStyles";

const AddDrinkType = ({ route, navigation }) => {
  let drinks = route.params.drinks;
  let newDrink = route.params.newDrink;

  let data = types;
  let newKey = "name";
  let nextPage = "AddDrinkStrength";

  const handleAddDrinksInput = (newValue) => {
    if (newValue == "custom") {
      navigation.navigate("__", { drinks: drinks, newDrink: newDrink });
    } else {
      handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation);
    }
  };

  return (
    <ScrollView style={containerStyles.phoneScreen}>
      <Text style={[EmotionalSliderStyles.title, EmotionalSliderStyles.content]}>
        Add your Drink Type
      </Text>
      <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
    </ScrollView>
  );
};

export default AddDrinkType;