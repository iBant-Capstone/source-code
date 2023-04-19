import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

// Import styles
import { styles } from '../styles';
import { containerStyles } from '../styles/containerStyles';
import { buttonStyles } from '../styles/buttonStyles';
import { textStyles } from '../styles/textStyles';
import { textInputStyles } from '../styles/textInput';

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
            <View style={containerStyles.leftContainer}>
                <Text>Drink Size (ml)</Text>
            </View>
            <TextInput
                style={[textInputStyles.textInput, textInputStyles.largeTextInput]}
                value={sizeInputValue}
                onChangeText={setSizeInputValue}
                placeholder="145, 250, 70.."
                placeholderTextColor={'grey'}
            />
            <View style={containerStyles.centerContainer}>
                <Pressable
                    onPress={handlePress}
                    accessibilityLabel="Button to add drink"
                    style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]}
                >
                    <Text style={textStyles.whiteSemiBoldText}>Add Custom Size</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AddDrinkSizeCustomInput;