import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import Footer from '../../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import handlePersonaDetailInput from '../../components/onboarding-components/handlePersonalDetailInput';
import validateHeightInput from '../../components/inputValidationPersonalDetails/validateHeightInput'
import validateWeightInput from '../../components/inputValidationPersonalDetails/validateWeightInput';
import validateSexInput from '../../components/inputValidationPersonalDetails/validateSexInput';
import InvalidInputWarning from '../../components/InvalidInputWarning';

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
    const [weightInputValue, setWeightInputValue] = useState('')


    // ______ RADIO BUTTONS ________

    // Keeps track of what height unit we're using
    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState('cm');
    // Keeps track of what weight unit we're using
    const [weightUnitValueChecked, setWeightUnitValueChecked] = useState('kg');
    // Keeps track of what sex value is selected
    const [sexValueChecked, setSexValueChecked] = useState('');


    // ______ Invalid input text ________
    const [showInvalidInputText, setShowInvalidInputText] = useState(false);

    // Adds the personal details to async storage
    const handleAddPersonalDetails = async () => {

        // calculate height value (converting to inches if input was ft)
        let heightValue = heightUnitValueChecked === "cm" ? cmInputValue : (Number(ftInputValue) * 12) + Number(inInputValue)

        // Set up the personal details to send
        let newPersonalDetails = {
            height: {
                unit: heightUnitValueChecked,
                value: heightValue
            },
            weight: {
                unit: weightUnitValueChecked,
                value: Number(weightInputValue)
            },
            sex: sexValueChecked
        }

        // Go through the checks
        if (passesChecks(newPersonalDetails)) {
            try {
                await AsyncStorage.setItem('personalDetails', JSON.stringify(newPersonalDetails));
                setShowInvalidInputText(false)
                navigation.navigate('Welcome')
            } catch (err) {
                console.log(err)
            }    
        } else {
            console.log("invalid input")
            setShowInvalidInputText(true)
        }


    };

    const passesChecks = (personalDetails) => {
        let passes = true
        if (validateHeightInput(personalDetails.height) && validateWeightInput(personalDetails.weight) && validateSexInput(personalDetails.sex)) {
            passes = true
        } else {
            passes = false
        }
        return passes
    }

    return (
        <View style={containerStyles.centerWhiteContainer}>
            <ScrollView style={{ minWidth: '100%' }}>
                {/* Insert picture of Rosie to the left of the text in the view below */}
                <View style={containerStyles.leftContainer}>
                    <Text style={[textStyles.redSemiBoldText, { fontSize: 32, marginBottom: '5%' }]}>Add In...</Text>
                    <Text style={[textStyles.redSemiBoldText, { fontSize: 12, marginBottom: '5%' }]}>Enter your information to enable the Blood Alcohol Concentration calculator</Text>
                </View>
                <View >
                    <View style={[containerStyles.row, { paddingLeft: 15, paddingTop: 15 }]}>
                        <Text>Add your height:  </Text>

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
                        <View>
                            <View style={containerStyles.row}>
                                <Text style={textInputStyles.label}>feet</Text>
                                <Text style={textInputStyles.label}>inches</Text>
                            </View>
                            <View style={containerStyles.row}>
                                <TextInput
                                    style={textInputStyles.textInput}
                                    value={ftInputValue}
                                    onChangeText={setFtInputValue}
                                    // placeholder={"feet"}
                                />
                                <TextInput
                                    style={textInputStyles.textInput}
                                    value={inInputValue}
                                    onChangeText={setInInputValue}
                                    //placeholder={"inches"}
                                />
                            </View>
                        </View>
                        :
                        <View>
                            <View style={containerStyles.row}>
                                <Text style={textInputStyles.label}>cm</Text>
                            </View>
                            <View style={containerStyles.row}>
                                <TextInput
                                    style={textInputStyles.textInput}
                                    value={cmInputValue}
                                    onChangeText={setCmInputValue}
                                    placeholder={"cm"}
                                />
                            </View>
                        </View>
                    }

                    <View style={[containerStyles.row, { paddingLeft: 15, paddingTop: 15 }]}>
                        <Text>Add your weight:  </Text>
                        <Pressable
                            style={weightUnitValueChecked === 'lbs' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setWeightUnitValueChecked('lbs')}
                        >
                            <Text>lbs</Text></Pressable>
                        <Pressable
                            style={weightUnitValueChecked === 'kg' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setWeightUnitValueChecked('kg')}
                        ><Text>kg</Text></Pressable>
                    </View>
                    <View>
                        <Text style={textInputStyles.label}>{weightUnitValueChecked}</Text>
                        <TextInput
                            style={textInputStyles.textInput}
                            value={weightInputValue}
                            onChangeText={setWeightInputValue}
                            placeholder={"weight (" + weightUnitValueChecked + ")"}
                        />

                    </View>

                    <View style={[{ paddingLeft: 15, paddingTop: 15 }]}>
                        <View style={containerStyles.row}>
                            <Text>Biological Sex*</Text>
                        </View>

                        <View style={[containerStyles.row, { justifyContent: 'center', paddingVertical: 15 }]}>
                            <Pressable
                                style={sexValueChecked === 'female' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                                onPress={() => setSexValueChecked('female')}
                            ><Text>Female</Text></Pressable>
                            <Pressable
                                style={sexValueChecked === 'male' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                                onPress={() => setSexValueChecked('male')}
                            ><Text>Male</Text></Pressable>
                        </View>
                    </View>
                    {showInvalidInputText && <Text>Invalid Input, Try Again</Text>} 
                    <View>
                        <Pressable
                            onPress={handleAddPersonalDetails}
                            style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]}
                        ><Text style={textStyles.whiteSemiBoldText}>Save</Text></Pressable>
                    </View>
                    <View style={[containerStyles.row, { paddingHorizontal: 15, paddingVertical: 15 }]}>
                        <Text style={textStyles.redSemiBoldText}>Please note: </Text>
                        <Text>We are using a BAC algorithm that distinguishes between male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Unfortunately, current research on BAC calculation for trans or intersex individuals is greatly lacking.</Text>
                    </View>
                </View>

                
            </ScrollView>
        </View >
    )
};

export default HeightInput