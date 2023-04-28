import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import SectionHeaderWithRadioButtons from '../SectionHeaderWithRadioButtons';
import InvalidInputWarning from '../InvalidInputWarning';

// Import styles
import { containerStyles } from '../styles/containerStyles';
import { buttonStyles } from '../styles/buttonStyles';
import { textStyles } from '../styles/textStyles';
import { textInputStyles } from '../styles/textInputStyles';


const AddDrinkCustomInput = ({ inputDescriptor, placeholderText, presetUnitPressed, handleAddDrinksInput, includeButtons }) => {

    const [inputValue, setInputValue] = useState()
    const [unitValueChecked, setUnitValue] = useState(presetUnitPressed)

    const [showInvalidInputText, setShowInvalidInputText] = useState(false)

    const handlePress = () => {
        // Start checks
        let passes = false

        // Check if it's Strength
        if (inputDescriptor == 'Strength' && inputValue < 100) {
                passes = true

        // Check if it's Size
        } else if (inputDescriptor == "Size") {
            // 20 cans of beer in ml is 7097.6471
            if (unitValueChecked == 'ml' && inputValue < 7097.6471) {
                    passes = true
            // 240 oz is 20 cans of beer
            } else if (unitValueChecked == "oz" && inputValue < 240) {
                    passes = true
            }
        }

        // If the checks pass then we move on, otherwise show the error
        if (passes == true) {
            handleAddDrinksInput(inputValue, unitValueChecked)
        } else {
            setShowInvalidInputText(true)
        }
    }

    return (
        <View style={{background: "white"}}>
            {includeButtons ?
                <SectionHeaderWithRadioButtons
                    headerText={"Custom " + inputDescriptor}
                    unitValueChecked={unitValueChecked}
                    setUnitValue={setUnitValue}
                    unitOption1={"oz"}
                    unitOption2={"ml"}
                />
            :
                <View style={[containerStyles.row, containerStyles.leftTopPadding, {display: "flex", justifyContent: "space-between", paddingHorizontal:24, alignItems: "center"}]}>
                    <Text style={textStyles.boldText}>{"Custom " + inputDescriptor}</Text>
                </View>
            }
            <TextInput
                style={[textInputStyles.textInput, textInputStyles.largeTextInput, {marginTop: 8, marginBottom: 8}]}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder={placeholderText}
                placeholderTextColor={'grey'}
            />
            {showInvalidInputText && <InvalidInputWarning />}
            <View style={[containerStyles.centerContainer]}>
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