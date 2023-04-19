import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"
import { Pressable, Text } from 'react-native';

// Import styles
import { buttonStyles } from "./styles/buttonStyles";

const ClearDrinksButton = () => {
    return (
        <Pressable
        onPress={() => {
            AsyncStorage.removeItem("drinks") 
        }}
        accessibilityLabel="Add a drink"
        style={[buttonStyles.alignCenter, buttonStyles.whiteButton, buttonStyles.defaultButton]}
        >
            <Text>Clear Drinks</Text>
        </Pressable>
    )
}

export default ClearDrinksButton