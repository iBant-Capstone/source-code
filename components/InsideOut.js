import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";


// Import BAC Levels and Effects JSON data
import BACLevelsEffects from '../json/bac-levels-and-effects.json'

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;


const InsideOut = ({ onInside, toggleInsideOut, BAC }) => {

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
            <Text>{toReturn}</Text>
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
            <Text>{toReturn}</Text>
        )
    }

    return (
        <View style={[styles.row, styles.centered, { backgroundColor: '#FFFFFF' }]}>
            <Pressable
                onPress={() => toggleInsideOut(true)}
                accessibilityLabel="Change the description to the inside version"
                style={styles.whiteButton}
            >
                <Text style={onInside ? styles.yellowUnderline : ""}>Inside</Text>
            </Pressable>
            <Pressable
                onPress={() => toggleInsideOut(false)}
                accessibilityLabel="Change the description to the outside version"
                style={styles.whiteButton}
            >
                <Text style={onInside ? "" : styles.yellowUnderline}>Out</Text>
            </Pressable>
            {/* <Text style={{ paddingBottom: 20 }}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text> */}
            
            <Text style={{ paddingBottom: 20 }}>{BAC && onInside ? displayInsideBACEffects(BAC) : displayOutsideBACEffects(BAC)}</Text>
        </View>
    )
}

export default InsideOut