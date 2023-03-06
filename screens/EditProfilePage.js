import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;


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
                value: weightInputValue
            },
            sex: sexValueChecked
        }

        try {
            await AsyncStorage.setItem('personalDetails', JSON.stringify(newPersonalDetails));
            navigation.goBack()
        } catch (err) {
            console.log(err)
        }

    };


    return (
        <View style={styles.centerContainer}>
            {/* Only loads once the personal details have loaded */}
            {hasFocused ?
                <View style={{minWidth: '100%'}}>
                    <View style={styles.leftContainer}>
                        <Text style={[styles.redBoldText, { fontSize: 32, marginBottom: '5%' }]}>Edit</Text>
                    </View>
                    <View >
                        <View style={[styles.row, styles.informationTypeLabel, styles.leftContainer]}>
                            <Text>Add your height   </Text>
                            <Text>ft</Text>
                            <RadioButton
                                value="ft"
                                status={heightUnitValueChecked === 'ft' ? 'checked' : 'unchecked'}
                                onPress={() => setHeightUnitValueChecked('ft')}
                            />
                            <Text>cm</Text>
                            <RadioButton
                                value="cm"
                                status={heightUnitValueChecked === 'cm' ? 'checked' : 'unchecked'}
                                onPress={() => setHeightUnitValueChecked('cm')}
                            />
                        </View>
                        {heightUnitValueChecked === "ft" ?
                            <View>
                                <View style={styles.row}>
                                    <Text style={styles.textInputLabel}>feet</Text>
                                    <Text style={styles.textInputLabel}>inches</Text>
                                </View>
                                <View style={styles.row}>
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
                                <View style={styles.row}>
                                    <Text style={styles.textInputLabel}>cm</Text>
                                </View>
                                <View style={styles.row}>
                                    <TextInput
                                        style={styles.textInput}
                                        value={cmInputValue}
                                        onChangeText={setCmInputValue}
                                        placeholder={"cm"}
                                    />
                                </View>
                            </View>
                        }
                        <View style={[styles.row, styles.informationTypeLabel, styles.leftContainer]}>
                            <Text>Add your weight  </Text>
                            <Text>lbs</Text>
                            <RadioButton
                                value="lbs"
                                status={weightUnitValueChecked === 'lbs' ? 'checked' : 'unchecked'}
                                onPress={() => setWeightUnitValueChecked('lbs')}
                            />
                            <Text>kg</Text>
                            <RadioButton
                                value="kg"
                                status={weightUnitValueChecked === 'kg' ? 'checked' : 'unchecked'}
                                onPress={() => setWeightUnitValueChecked('kg')}
                            />
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

                        {/* <View style={[styles.row, styles.informationTypeLabel, styles.leftContainer]}>
                            <Text>
                                <Text style={styles.redBoldText}>Please note: </Text>
                                We are using an algorithm that distinguished between male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Unfortunately, current research on BAC calculation for trans or intersex individuals in greatly lacking.
                            </Text>
                        </View> */}


                        <View style={[styles.row, styles.informationTypeLabel, styles.leftContainer]}>
                            <Text>Chosen Biological Sex: {sexValueChecked}</Text>
                        </View>
                        <View style={[styles.row, styles.informationTypeLabel]}>
                            <View>
                                <Text>Female</Text>
                                <RadioButton
                                    value="female"
                                    status={sexValueChecked === 'female' ? 'checked' : 'unchecked'}
                                    onPress={() => setSexValueChecked('female')}
                                />
                            </View>
                            <View>
                                <Text>Male</Text>
                                <RadioButton
                                    value="Male"
                                    status={sexValueChecked === 'male' ? 'checked' : 'unchecked'}
                                    onPress={() => setSexValueChecked('male')}
                                />
                            </View>

                            <Text>
                                <Text style={styles.redBoldText}>Please note: </Text>
                                We are using a BAC algorithm that distinguishes between male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Unfortunately, current research on BAC calculation for trans or intersex individuals in greatly lacking.
                            </Text>
                        </View>

                        <View style={styles.centered}>
                            <Pressable
                                onPress={handleAddPersonalDetails}
                                style={styles.centerRedButton}
                            ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>
                        </View>
                    </View>
                </View>
                :
                <Text>Loading...</Text>
            }
        </View >


    )

}

export default EditProfilePage