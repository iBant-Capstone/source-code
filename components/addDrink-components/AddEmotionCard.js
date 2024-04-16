import React from "react";
import { View, Text, Pressable } from "react-native";

import { containerStyles } from "../styles/containerStyles";
import { textStyles } from "../styles/textStyles";
import { drinkCardStyles } from "../styles/drinkCardStyles";

const AddEmotionCard = ({ option, handleAddDrinksInput }) => {
  const handlePress = () => {
    handleAddDrinksInput(option.value);
  };

  return (
    <Pressable
      style={[containerStyles.row, drinkCardStyles.logEmotionCard]}
      onPress={handlePress}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text style={[textStyles.boldText, textStyles.logEmotionTittle]}>
            {option.title} - Log my feeling
          </Text>
          <Text style={[textStyles.smallText, textStyles.addDrinkCardSubtitle]}>
            {option.subtitle}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AddEmotionCard;
