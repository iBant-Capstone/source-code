import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"
import { Pressable, Text } from 'react-native';

// Import styles
import { buttonStyles } from "./styles/buttonStyles";
import { textStyles } from "./styles/textStyles";

const ClearDrinksButton = () => {
    return (
        <Pressable
        onPress={() => {
            AsyncStorage.removeItem("drinks") 
        }}
        accessibilityLabel="Add a drink"
        style={[buttonStyles.alignCenter, buttonStyles.whiteButton, buttonStyles.defaultButton]}
        >
            <Text style={textStyles.text}>Clear Drinks</Text>
        </Pressable>
    )
}

export default ClearDrinksButton