import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Platform, ScrollView } from 'react-native';

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;

import types from "../json/AddDrink-pages/drinkTypes.json"

const AddDrinkType = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = {}

    const handleTypeInput = (typeValue) => {
        newDrink = {
            ...newDrink,
            type: typeValue
        }
        try {
            navigation.navigate('___', { drinks: drinks, newDrink: newDrink})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ScrollView>
            {types.map((type, index) => {
                return (
                    <Pressable 
                        key={index} 
                        style={[styles.drinkCard, styles.row]}
                        onPress={() => {handleTypeInput(type.value)}}
                    >
                        <View style={styles.drinkCardInfoContainer}>
                            <Text style={styles.drinkCardNameText}>{type.title}</Text>
                            <Text style={styles.smallText}>{type.subtitle}</Text>
                        </View>
                    </Pressable>
                )
            })}
        </ScrollView>
    )
}

export default AddDrinkType