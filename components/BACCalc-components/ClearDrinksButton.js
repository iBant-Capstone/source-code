import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Text, Pressable } from 'react-native';

//import AsyncStorage from '@react-native-async-storage/async-storage';

// Import styles
import { styles } from '../styles'
import { buttonStyles } from '../styles/buttonStyles';

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
            <Text>Clear Drinks</Text>
        </Pressable>
    )
}

export default ClearDrinksButton