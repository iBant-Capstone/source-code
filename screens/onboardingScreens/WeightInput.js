import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

const WeightInput = ({ navigation }) => {
    const [hasFocused, setHasFocused] = useState(false);

    // ______ TEXT INPUTS __________
    const [cmInputValue, setCmInputValue] = useState('')
    const [ftInputValue, setFtInputValue] = useState('')
    const [inInputValue, setInInputValue] = useState('')

    const [kgInputValue, setKgInputValue] = useState('')
    const [lbsInputValue, setlbsInputValue] = useState('')

    // Keeps track of what weight/height unit we're using

    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState();
    const [weightUnitValueChecked, setWeightUnitValueChecked] = useState('kg');

    // sets this values as false because user will not have gone through other two screens
    const sexValueChecked = 'unchecked';

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
                    // we should have the height value already stored
                    let personalDetailsParsed = personalDetailsAsync ? JSON.parse(personalDetailsAsync) : emptyPD;

                    // Set our state personalDetails
                    setCmInputValue(personalDetailsParsed["height"]["unit"] === "cm" ? personalDetailsParsed["height"]["value"] : '')
                    setFtInputValue(personalDetailsParsed["height"]["unit"] === "ft" ? Math.floor(Number(personalDetailsParsed["height"]["value"]) / 12) : '')
                    setInInputValue(personalDetailsParsed["height"]["unit"] === "ft" ? Number(personalDetailsParsed["height"]["value"]) % 12 : '')
                    setKgInputValue(personalDetailsParsed["weight"]["unit"] === "kg" ? personalDetailsParsed["weight"]["value"] : '')
                    setlbsInputValue(personalDetailsParsed["weight"]["unit"] === "lbs" ? personalDetailsParsed["weight"]["value"] : '')

                    setHeightUnitValueChecked(personalDetailsParsed["height"]["unit"])
                    setWeightUnitValueChecked(personalDetailsParsed["weight"]["unit"])

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
        let weightValue = weightUnitValueChecked === 'kg' ? kgInputValue : lbsInputValue

        // Set up the personal details to send
        let newPersonalDetails = {
            height: {
                unit: heightUnitValueChecked,
                value: heightValue
            },
            weight: {
                unit: weightUnitValueChecked,
                value: weightValue
            },
            sex: sexValueChecked
        }

        try {
            await AsyncStorage.setItem('personalDetails', JSON.stringify(newPersonalDetails));
        } catch (err) {
            console.log(err)
        }

    };
    return (
        <View style={styles.centerContainer}>
            <Text style={styles.onboardingHeaderText}>Select Weight</Text>
            <View style={{ paddingHorizontal: 15 }}>
                <Text>Input your weight here in lbs or kg</Text>
            </View>

            <View style={[styles.row, styles.centered, { paddingTop: 15, flexWrap: 'nowrap' }]}>
                <Pressable
                    style={weightUnitValueChecked === 'lbs' ? styles.radioButtonSelected : styles.radioButtonRegular}
                    onPress={() => setWeightUnitValueChecked('lbs')}
                >
                    <Text>lbs</Text></Pressable>
                <Pressable
                    style={weightUnitValueChecked === 'kg' ? styles.radioButtonSelected : styles.radioButtonRegular}
                    onPress={() => setWeightUnitValueChecked('kg')}
                ><Text>kg</Text></Pressable>
            </View>

            <View style={[styles.row, styles.centered]}>
                {weightUnitValueChecked === 'kg' ?
                    <TextInput
                        style={styles.textInput}
                        value={kgInputValue}
                        onChangeText={setKgInputValue}
                        placeholder={'kg'}
                    />
                    :
                    <TextInput
                        style={styles.textInput}
                        value={lbsInputValue}
                        onChangeText={setlbsInputValue}
                        placeholder={'lbs'}
                    />
                }

            </View>
            
            {/* <View style={styles.centered}>
                <Pressable
                    onPress={handleAddPersonalDetails}
                    style={styles.centerRedButton}
                ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>
            </View> */}
            <Footer rightButtonLabel="Save" rightButtonPress={() => { handleAddPersonalDetails(); navigation.navigate('BiologicalSex'); }} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('Welcome'); }} />
        </View>

    );
};

export default WeightInput