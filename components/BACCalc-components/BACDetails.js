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

const InsideOut = ({ BAC }) => {

    // Function to determine BAC inside effects based on given BAC
    const displayInsideBACEffects = (BAC) => {

        let i = 0;

        let insideEffects = '';
        let outsideEffects = '';

        while (i < BACLevelsEffects.length) {
            let BACLevelsEffectsData = BACLevelsEffects[i];
            let minBACLevel = BACLevelsEffectsData[0];
            let maxBACLevel = BACLevelsEffectsData[1];


            if (BAC >= minBACLevel && BAC <= maxBACLevel) {
                insideEffects = BACLevelsEffectsData[2];
                outsideEffects = BACLevelsEffectsData[3];
                break;
            } else {
                i++;
            }
        }

        return (
            <View style={[containerStyles.row, containerStyles.centerContainer, { backgroundColor: '#FFFFFF', paddingBottom: 24, paddingTop: 24, borderRadius: 8, margin: 16, marginBottom: 74, display: "flex", flexDirection: "column"}]} >
                <Text style={[textStyles.text, {paddingBottom: 8, textAlign: "center"}]}>{insideEffects}</Text>
                <Text style={[textStyles.text, {textAlign: "center"}]}>{outsideEffects}</Text>
            </View>
        )
    }

    return (
        <View>
            {displayInsideBACEffects(BAC)}
        </View>
    )
}

export default InsideOut