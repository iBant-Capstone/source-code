import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

import validateHeightInput from '../components/inputValidationPersonalDetails/validateHeightInput';

// Import styles
import { styles } from '../components/styles';
import { containerStyles } from '../components/styles/containerStyles';
import { buttonStyles } from '../components/styles/buttonStyles';


const EditProfilePage = ({ navigation }) => {

    // TODO : maybe find a way to make the components below into their own files?

    // const [personalDetails, setPersonalDetails] = useState({})
    const [hasFocused, setHasFocused] = useState(false);

    // ______ TEXT INPUTS __________
    const [cmInputValue, setCmInputValue] = useState('')
    const [ftInputValue, setFtInputValue] = useState('')
    const [inInputValue, setInInputValue] = useState('')
    const [weightInputValue, setWeightInputValue] = useState('')


    // ______ RADIO BUTTONS ________

    // Keeps track of what height unit we're using
    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState();
    // Keeps track of what weight unit we're using
    const [weightUnitValueChecked, setWeightUnitValueChecked] = useState();
    // Keeps track of what sex value is selected
    const [sexValueChecked, setSexValueChecked] = useState('');


    // ______ Invalid input text ________
    const [showInvalidInputText, setShowInvalidInputText] = useState(false);



    // Gets the personal details already stored to prefill the boxes last time 
    useFocusEffect(
        React.useCallback(() => {
            async function getPersonalDetails() {

                let emptyPD = {
                    height: {
                        unit: '',
                        value: ''
                    },
                    weight: {
                        unit: '',
                        value: ''
                    },
                    sex: ''
                }

                try {
                    // Get the personalDetials from  async storage
                    const personalDetailsAsync = await AsyncStorage.getItem('personalDetails');

                    // Get the parsed version of the personal details (or empy object if we don't have any personal details saved)
                    let personalDetailsParsed = personalDetailsAsync ? JSON.parse(personalDetailsAsync) : emptyPD;

                    // Set our state personalDetails
                    setCmInputValue(personalDetailsParsed["height"]["unit"] === "cm" ? personalDetailsParsed["height"]["value"] : '')
                    setFtInputValue(personalDetailsParsed["height"]["unit"] === "ft" ? Math.floor(Number(personalDetailsParsed["height"]["value"]) / 12) : '')
                    setInInputValue(personalDetailsParsed["height"]["unit"] === "ft" ? Number(personalDetailsParsed["height"]["value"]) % 12 : '')
                    setWeightInputValue(personalDetailsParsed["weight"]["value"])

                    setHeightUnitValueChecked(personalDetailsParsed["height"]["unit"])
                    setWeightUnitValueChecked(personalDetailsParsed["weight"]["unit"])
                    setSexValueChecked(personalDetailsParsed["sex"])

                    setHasFocused(true)

                } catch (error) {
                    console.log(error);
                }
            }
            getPersonalDetails();
        }, [])
    );

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
                navigation.goBack()
            } catch (err) {
                console.log(err)
            }    
        } else {
            console.log("invalid input")
            setShowInvalidInputText(true)
        }


    };

    const passesChecks = (personalDetails) => {
        let heightInMeters = personalDetails.height.unit === "cm" ? personalDetails.height.value * 100 : personalDetails.height.value * 0.0254
        let weightInKilograms = personalDetails.weight.unit === "kg" ? personalDetails.weight.value : personalDetails.weight.value * 0.45359237
        let sex = personalDetails.sex

        let passes = true

        passes = validateHeightInput(personalDetails)

        // max weight -> 700 lbs
        // min weight -> 40 lbs
        if ((weightInKilograms == 0) || (weightInKilograms > 317.5) || (weightInKilograms < 18.14)) {
            passes = false
        }

        if (sex == '') {
            passes = false
        }

        return passes
    }

    return (
        <View style={containerStyles.centerWhiteContainer}>
            {/* Only loads once the personal details have loaded */}
            {hasFocused ?
                <ScrollView style={{ minWidth: '100%' }}>
                    <View style={containerStyles.leftContainer}>
                        <Text style={[styles.redBoldText, { fontSize: 32, marginBottom: '5%' }]}>Edit</Text>
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
                                    <Text style={styles.textInputLabel}>feet</Text>
                                    <Text style={styles.textInputLabel}>inches</Text>
                                </View>
                                <View style={containerStyles.row}>
                                    <TextInput
                                        style={styles.textInput}
                                        value={ftInputValue}
                                        onChangeText={setFtInputValue}
                                        placeholder={"feet"}
                                    />
                                    <TextInput
                                        style={styles.textInput}
                                        value={inInputValue}
                                        onChangeText={setInInputValue}
                                        placeholder={"inches"}
                                    />
                                </View>
                            </View>
                            :
                            <View>
                                <View style={containerStyles.row}>
                                    <Text style={styles.textInputLabel}>cm</Text>
                                </View>
                                <View style={containerStyles.row}>
                                    <TextInput
                                        style={styles.textInput}
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
                            <Text style={styles.textInputLabel}>{weightUnitValueChecked}</Text>
                            <TextInput
                                style={styles.textInput}
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
                            ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>
                        </View>
                        <View style={[containerStyles.row, { paddingHorizontal: 15, paddingVertical: 15 }]}>
                            <Text style={styles.redBoldText}>*Please note: </Text>
                            <Text>We are using a BAC algorithm that distinguishes between male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Unfortunately, current research on BAC calculation for trans or intersex individuals is greatly lacking.</Text>
                        </View>
                    </View>

                   
                </ScrollView>

                :
                <Text>Loading...</Text>
            }
        </View >
    )
}

export default EditProfilePage