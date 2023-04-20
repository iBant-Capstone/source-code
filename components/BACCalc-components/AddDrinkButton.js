import React from 'react';
import { Text, Pressable } from 'react-native';

// Import styles
import { buttonStyles } from '../styles/buttonStyles';
import { textStyles } from '../styles/textStyles';

const AddDrinkButton = ({ navigation, drinks }) => {
    return (
        <Pressable
            onPress={() => {
                navigation.navigate('AddDrinkType', { drinks: drinks })
            }}
            accessibilityLabel="Add a drink"
            style={[buttonStyles.alignCenter, buttonStyles.whiteButton, buttonStyles.defaultButton, { marginTop: -20 }]}
        >
            <Text style={textStyles.text}>Add Drink</Text>
        </Pressable>
    )
}

export default AddDrinkButton