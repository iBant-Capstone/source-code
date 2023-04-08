import React from 'react';
import { Text, Pressable } from 'react-native';

// Import styles
import * as StyleSheet from '../styles'
let styles = StyleSheet.styles;

const AddDrinkButton = ({ navigation, drinks }) => {
    return (
        <Pressable
            onPress={() => {
                navigation.navigate('AddDrinkType', { drinks: drinks })
            }}
            accessibilityLabel="Add a drink"
            style={[styles.whiteButton, { marginTop: -20 }]}
        >
            <Text>Add Drink</Text>
        </Pressable>
    )
}

export default AddDrinkButton