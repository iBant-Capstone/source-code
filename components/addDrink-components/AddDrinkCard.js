import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from '../styles';
import { containerStyles } from '../styles/containerStyles';

const AddDrinkCard = ({ option, handleAddDrinksInput }) => {

    const handlePress = () => {
        handleAddDrinksInput(option.value)
    }

    return (
        <Pressable
            style={[styles.drinkCard, containerStyles.row]}
            onPress={handlePress}
        >
            <View style={styles.drinkCardInfoContainer}>
                <Text style={styles.drinkCardNameText}>{option.title}</Text>
                <Text style={styles.smallText}>{option.subtitle}</Text>
            </View>
        </Pressable>
    )
}

export default AddDrinkCard;