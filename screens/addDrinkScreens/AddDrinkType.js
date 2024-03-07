import React, { useState } from "react";

import { ScrollView, Text, View} from "react-native";

import Slider from "@react-native-community/slider";

import AddDrinkCards from "../../components/addDrink-components/AddDrinkCards";

import types from "../../json/AddDrink-pages/drinkTypes.json";

import handleInput from "../../components/addDrink-components/handleInput";

import { containerStyles } from "../../components/styles/containerStyles";

import { EmotionalSliderStyles } from "../../components/styles/emotionalSliderStyles";

const AddDrinkType = ({ route, navigation }) => {
  let drinks = route.params.drinks;
  let newDrink = {};

  let data = types;
  let newKey = "name";
  let nextPage = "AddDrinkStrength";

  const [emotionValue, setEmotionValue] = useState(50);
  const emotions = [
    "Very Unhappy",
    "Unhappy",
    "Neutral",
    "Happy",
    "Very Happy",
    ];

  const handleAddDrinksInput = (newValue) => {
    if (newValue == "custom") {
      navigation.navigate("__", { drinks: drinks, newDrink: newDrink });
    } else {
      handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation);
    }
  };

  // Function to map slider value to an emotion
  const getEmotion = (value) => {
    // Map the value from 0-100 to one of the five emotions
    const index = Math.floor((value / 100) * (emotions.length - 1));
    return emotions[index];
  };

  return (
    <ScrollView style={containerStyles.phoneScreen}>
      <Text
        style={[
          EmotionalSliderStyles.text,
          EmotionalSliderStyles.content,
        ]}
      >
        Add Your Feelings
      </Text>
      <View>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={emotionValue}
          onValueChange={setEmotionValue}
          minimumTrackTintColor="#CF5260"
          maximumTrackTintColor="#FFFFFF"
        />
        <Text>Emotion: {getEmotion(emotionValue)}</Text>
      </View>
      <AddDrinkCards data={data} handleAddDrinksInput={handleAddDrinksInput} />
    </ScrollView>
  );
};

export default AddDrinkType;