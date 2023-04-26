import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import SectionHeaderWithRadioButtons from '../SectionHeaderWithRadioButtons';

// Import styles
import { containerStyles } from '../styles/containerStyles';
import { buttonStyles } from '../styles/buttonStyles';
import { textStyles } from '../styles/textStyles';
import { textInputStyles } from '../styles/textInputStyles';

const AddDrinkCustomInput = ({ inputDescriptor, placeholderText, presetUnitPressed, handleAddDrinksInput, includeButtons }) => {

    const [inputValue, setInputValue] = useState()
    const [unitValueChecked, setUnitValue] = useState(presetUnitPressed)

    const handlePress = () => {
        // TODO add in option for oz here
        handleAddDrinksInput(inputValue, unitValueChecked)
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