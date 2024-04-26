import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import emotions from "../../json/AddDrink-pages/drinkEmotion.json";
import handleInput from "../../components/addDrink-components/handleInput";
import { containerStyles } from "../../components/styles/containerStyles";
import { EmotionalSliderStyles } from "../../components/styles/emotionalSliderStyles";
import AddEmotionCard from "../../components/addDrink-components/AddEmotionCard";
import AddDrinkCards from "../../components/addDrink-components/AddDrinkCards";
import AddDrinkCustomInput from "../../components/addDrink-components/AddDrinkCustomInput";
import AddDrinkSliderInput from "../../components/addDrink-components/AddDrinkSliderInput";


const AddDrinkEmotion = ({ route, navigation }) => {
  let drinks = route.params.drinks;
  let newDrink = {};

  let data = emotions;
  let newKey = "emotion";
  let nextPage = "AddDrinkType";


  const handleAddDrinksInput = (newValue) => {
    if (newValue == "custom") {
      navigation.navigate("__", { drinks: drinks, newDrink: newDrink });
    } else {
      handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation);
    }
  };

  return (
    <ScrollView style={containerStyles.phoneScreen}>
      {/* <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} /> */}
      <AddDrinkSliderInput
        // handleSliderChange={handleSliderChange}
        handleAddDrinksInput={(value) => handleAddDrinksInput(value)}
        inputDescriptor="Emotion"
        includeButtons={true}
      />
    </ScrollView>
  );

};
export default AddDrinkEmotion;
