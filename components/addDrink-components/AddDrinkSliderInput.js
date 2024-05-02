// AddDrinkSliderInput.js
import React, { useState, useCallback } from 'react';
import { View, Text, Pressable } from "react-native";
import Slider from '@react-native-community/slider';

// Import styles
import { containerStyles } from "../styles/containerStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { textStyles } from "../styles/textStyles";
import { EmotionalSliderStyles } from "../../components/styles/emotionalSliderStyles";




const AddDrinkSliderInput = ({inputDescriptor, handleAddDrinksInput, includeButtons = false, initialValue = 50, onValueChange = () => {}, }) => {
  
    const [sliderValue, setSliderValue] = useState(initialValue);
    const [emotionLabel, setEmotionLabel] = useState("Neutral"); // Set default based on initial value


  // Maps the slider value to a label
  const getEmotionLabel = useCallback((value) => {
    if (value <= 20) return "Very Unpleasant";
    if (value <= 40) return "Unpleasant";
    if (value <= 60) return "Neutral";
    if (value <= 80) return "Pleasant";
    return "Very Pleasant";
  }, []);

  // Handle changes in the slider, this does not trigger navigation
  const handleValueChange = (value) => {
    setSliderValue(value);
    const label = getEmotionLabel(value);
    setEmotionLabel(label); // Update the emotion label state
    onValueChange(value, label); // Optionally pass both the value and label
  };


  // Handle button press, this triggers navigation or next steps
  const handlePress = () => {
    const label = getEmotionLabel(sliderValue);
    if (typeof handleAddDrinksInput === "function") {
    //   handleAddDrinksInput(sliderValue, label);
    handleAddDrinksInput(label);
    }
    if (typeof navigateNext === "function") {
      navigateNext(); // Assuming navigateNext is the function to navigate to the next page
    }
  };

  return (
    <View style={[containerStyles.centerContainer]}>
      {inputDescriptor && (
        <Text
          style={[EmotionalSliderStyles.title, EmotionalSliderStyles.content]}
        >
          {"Add Your Feelings"}
        </Text>
      )}
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={sliderValue}
        onValueChange={handleValueChange}
        minimumTrackTintColor="#CF5260"
        maximumTrackTintColor="#FFFFFF"
      />
      <Text style={EmotionalSliderStyles.text}>
        {"Current Feeling: " + getEmotionLabel(sliderValue)}
      </Text>
      {includeButtons && (
        <Pressable
          style={[
            buttonStyles.alignCenter,
            buttonStyles.redButton,
            buttonStyles.defaultButton,
          ]}
          accessibilityLabel={"Button to add " + inputDescriptor}
          onPress={handlePress}
        >
          <Text style={textStyles.whiteSemiBoldText}>Log My Feeling</Text>
        </Pressable>
      )}
    </View>
  );
};

export default AddDrinkSliderInput;