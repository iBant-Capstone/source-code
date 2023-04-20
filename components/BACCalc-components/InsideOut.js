import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";


// Import BAC Levels and Effects JSON data
import BACLevelsEffects from '../../json/bac-levels-and-effects.json'

// Import styles
import { textStyles } from '../styles/textStyles';
import { containerStyles } from '../styles/containerStyles';
import { buttonStyles } from '../styles/buttonStyles';

const InsideOut = ({ onInside, setOnInside, BAC }) => {

    // Function to determine BAC inside effects based on given BAC -> need to make async to update when BAC changes?
    const displayInsideBACEffects = (BAC) => {
        let i = 0;
        let toReturn = "";

        while (i < BACLevelsEffects.length) {
            let BACLevelsEffectsData = BACLevelsEffects[i];
            let minBACLevel = BACLevelsEffectsData[0];
            let maxBACLevel = BACLevelsEffectsData[1];
            let insideEffects = BACLevelsEffectsData[2];

            if (BAC >= minBACLevel && BAC <= maxBACLevel) {
                toReturn = insideEffects;
                break;
            } else {
                i++;
            }
        }

        return (
            <Text style={textStyles.text}>{toReturn}</Text>
        )
    }

    // Function to determine BAC outside effects based on given BAC -> need to make async to update when BAC changes?
    const displayOutsideBACEffects = (BAC) => {
        let i = 0;
        let toReturn = "";

        while (i < BACLevelsEffects.length) {
            let BACLevelsEffectsData = BACLevelsEffects[i];
            let minBACLevel = BACLevelsEffectsData[0];
            let maxBACLevel = BACLevelsEffectsData[1];
            let outsideEffects = BACLevelsEffectsData[3];

            if (BAC >= minBACLevel && BAC <= maxBACLevel) {
                toReturn = outsideEffects;
                break;
            } else {
                i++;
            }
        }

        return (
            <Text style={textStyles.text}>{toReturn}</Text>
        )
    }

    return (
        <View style={[containerStyles.row, containerStyles.centerContainer, { backgroundColor: '#FFFFFF' }]}>
            <Pressable
                onPress={() => setOnInside(true)}
                accessibilityLabel="Change the description to the inside version"
                style={[buttonStyles.alignCenter, buttonStyles.whiteButton, buttonStyles.defaultButton]}
            >
                <Text style={onInside ? [textStyles.text, textStyles.selectedOption] : textStyles.text}>Internal Effects</Text>
            </Pressable>
            <Pressable
                onPress={() => setOnInside(false)}
                accessibilityLabel="Change the description to the outside version"
                style={[buttonStyles.alignCenter, buttonStyles.whiteButton, buttonStyles.defaultButton]}
            >
                <Text style={onInside ? textStyles.text : [textStyles.text, textStyles.selectedOption]}>External Effects</Text>
            </Pressable>

            <Text style={{ paddingBottom: 20 }}>{onInside ? displayInsideBACEffects(BAC) : displayOutsideBACEffects(BAC)}</Text>
        </View>
    )
}

export default InsideOut