import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import * as StyleSheet from '../styles';
let styles = StyleSheet.styles;


const AddDrinkSizeCustomInput = ({ handleAddDrinksInput }) => {

    const [sizeInputValue, setSizeInputValue] = useState(0)

    const handlePress = () => {
        // TODO add in checks here
        // TODO add in option for oz here
        handleAddDrinksInput({
            unit: "ml",
            size: sizeInputValue
        })
    }

    return (
        <View>
            <View style={styles.leftContainer}>
                <Text>Drink Size (ml)</Text>
            </View>
            <TextInput
                style={styles.largeTextInput}
                value={sizeInputValue}
                onChangeText={setSizeInputValue}
                placeholder="145, 250, 70.."
                placeholderTextColor={'grey'}
            />
            <View style={styles.centered}>
                <Pressable
                    onPress={handlePress}
                    accessibilityLabel="Button to add drink"
                    style={styles.centerRedButton}
                >
                    <Text style={styles.mainRedButtonText}>Add Custom Size</Text>
                </Pressable>
            </View>
        </View>
    )
  }
  
  export default AddDrinkSizeCustomInput;