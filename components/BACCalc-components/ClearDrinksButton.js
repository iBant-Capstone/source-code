import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Text, Pressable } from 'react-native';

//import AsyncStorage from '@react-native-async-storage/async-storage';

// Import styles
import { buttonStyles } from '../styles/buttonStyles';
import { textStyles } from '../styles/textStyles';

const ClearDrinksButton = ({ setBAC, changeDrinksReady }) => {
    return (
        <Pressable
            onPress={() => {
                AsyncStorage.removeItem("drinks")
                setBAC(0)
                changeDrinksReady(false)
            }}
            accessibilityLabel="Add a drink"
            style={[buttonStyles.alignCenter, buttonStyles.whiteButton, buttonStyles.defaultButton]}
        >
            <Text style={textStyles.text}>Clear Drinks</Text>
        </Pressable>
    )
}

export default ClearDrinksButton