import React from "react";
import { ScrollView } from "react-native";

import AddDrinkCards from "../../components/addDrink-components/AddDrinkCards";
import handleInput from "../../components/addDrink-components/handleInput";
import { containerStyles } from "../../components/styles/containerStyles";

const AddDrinkEmotion = ({ route, navigation }) => {

  let drinks = route.params.drinks;
  let newDrink = route.params.newDrink;
  let emotionValues = [1, 2, 3, 4, 5];

  let data = emotionValues;
  let newKey = "emotion";
  let nextPage = "AddDrinkType";

  const handleAddDrinksInput = (emotionValues) => {
    // handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation);
    let newValue = Number(emotionValues);
    handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation);
  };

  return (
    <ScrollView style={containerStyles.phoneScreen}>
      <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
    </ScrollView>
  );
};

export default AddDrinkEmotion;
