import React from 'react';
import { View, Text, Pressable } from 'react-native';

// Import styles
import * as StyleSheet from '../styles';
let styles = StyleSheet.styles;

import handleInput from './handleInput';

const AddDrinkCard = ({ option, drinks, newDrink, newKey, nextPage, navigation }) => {

    const handlePress = () => {
        console.log("I'm in handlePress")
        handleInput(drinks, newDrink, newKey, option.value, nextPage, navigation)
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