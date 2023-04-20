import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { containerStyles } from '../styles/containerStyles';
import { textStyles } from '../styles/textStyles';
import { drinkCardStyles } from '../styles/drinkCardStyles';

const AddDrinkCard = ({ option, handleAddDrinksInput }) => {

    const handlePress = () => {
        handleAddDrinksInput(option.value)
    }

    return (
        <Pressable
            style={[drinkCardStyles.drinkCard, containerStyles.row]}
            onPress={handlePress}
        >
            <View style={drinkCardStyles.infoContainer}>
                <Text style={textStyles.boldText}>{option.title}</Text>
                <Text style={textStyles.smallText}>{option.subtitle}</Text>
            </View>
        </Pressable>
    )
}

export default AddDrinkCard;