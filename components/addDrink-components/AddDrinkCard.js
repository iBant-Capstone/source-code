import React from 'react';
import { View, Text, Pressable } from 'react-native';

import * as StyleSheet from '../styles';
let styles = StyleSheet.styles;

const AddDrinkCard = ({ option, handleAddDrinksInput }) => {

    const handlePress = () => {
        handleAddDrinksInput(option.value)
    }

    return (
        <Pressable 
        style={[styles.drinkCard, styles.row]}
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