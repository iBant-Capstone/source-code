import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import SectionHeaderWithRadioButtons from '../personalDetailsInput-components/SectionHeaderWithRadioButtons';

// Import styles
import { containerStyles } from '../styles/containerStyles';
import { buttonStyles } from '../styles/buttonStyles';
import { textStyles } from '../styles/textStyles';
import { textInputStyles } from '../styles/textInputStyles';

const AddDrinkCustomInput = ({ inputDescriptor, placeholderText, presetUnitPressed, handleAddDrinksInput }) => {

    const [inputValue, setInputValue] = useState(0)
    const [unitValueChecked, setUnitValue] = useState(presetUnitPressed)

    const handlePress = () => {
        // TODO add in option for oz here
        handleAddDrinksInput(inputValue)
    }

    return (
        <View>
            <SectionHeaderWithRadioButtons
                headerText={"Custom " + inputDescriptor}
                unitValueChecked={unitValueChecked}
                setUnitValue={setUnitValue}
                unitOption1={"floz"}
                unitOption2={"ml"}
            />
            <TextInput
                style={[textInputStyles.textInput, textInputStyles.largeTextInput]}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder={placeholderText}
                placeholderTextColor={'grey'}
            />
            <View style={containerStyles.centerContainer}>
                <Pressable
                    onPress={handlePress}
                    accessibilityLabel={"Button to add custom " + inputDescriptor}
                    style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]}
                >
                    <Text style={textStyles.whiteSemiBoldText}>Add Custom {inputDescriptor}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AddDrinkCustomInput;