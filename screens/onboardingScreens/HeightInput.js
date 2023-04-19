import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../components/Footer';

import handlePersonaDetailInput from '../../components/onboarding-components/handlePersonalDetailInput';

// Import styles
import { textStyles } from '../../components/styles/textStyles';
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { textInputStyles } from '../../components/styles/textInput';

const HeightInput = ({ navigation }) => {

    // ______ TEXT INPUTS __________
    const [cmInputValue, setCmInputValue] = useState('')
    const [ftInputValue, setFtInputValue] = useState('')
    const [inInputValue, setInInputValue] = useState('')

    // Keeps track of what height unit we're using
    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState('cm');

    let personalDetailsSoFar = {}
    let newKey = "height"
    let nextPage = "WeightInput"

    const handleHeightInput = () => {
        let heightValue = heightUnitValueChecked === "cm" ? cmInputValue : (Number(ftInputValue) * 12) + Number(inInputValue)
        let heightData = {
            unit: heightUnitValueChecked,
            value: heightValue
        }
        let newValue = heightData
        handlePersonaDetailInput( personalDetailsSoFar, newKey, newValue, nextPage, navigation)
    }

    return (
        <View style={containerStyles.centerWhiteContainer}>
            <Text style={[textStyles.text, textStyles.headerText]}>Select Height</Text>
            <View style={{ paddingHorizontal: 15 }}>
                <Text>Input your height here in cm or ft/inches</Text>
            </View>

            <View style={[containerStyles.row, containerStyles.centerContainer, { paddingTop: 15, flexWrap: 'nowrap' }]}>
                <Pressable
                    style={heightUnitValueChecked === 'ft' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setHeightUnitValueChecked('ft')}
                ><Text>ft</Text></Pressable>
                <Pressable
                    style={heightUnitValueChecked === 'cm' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setHeightUnitValueChecked('cm')}
                ><Text>cm</Text></Pressable>
            </View>
            {heightUnitValueChecked === "ft" ?
                <View style={containerStyles.row}>
                    <TextInput
                        style={textInputStyles.textInput}
                        value={ftInputValue}
                        onChangeText={setFtInputValue}
                        placeholder={"feet"}
                    />
                    <TextInput
                        style={textInputStyles.textInput}
                        value={inInputValue}
                        onChangeText={setInInputValue}
                        placeholder={"inches"}
                    />
                </View>
                :
                <View style={[containerStyles.row, containerStyles.centerContainer]}>
                    <TextInput
                        style={textInputStyles.textInput}
                        value={cmInputValue}
                        onChangeText={setCmInputValue}
                        placeholder={"cm"}
                    />
                </View>}
            <Footer rightButtonLabel="Save" rightButtonPress={handleHeightInput} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('WeightInput'); }} />
        </View>
    );
};

export default HeightInput