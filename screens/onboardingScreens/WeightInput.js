// Accept user input for Weight -> need to connect with stored Profile information
// Add Skip button (skips to InfoHub page)
// Add Next button (goes to BiologicalSexInput page)
import React, { useState} from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

const WeightInput = ({navigation}) => {
    // const [personalDetails, setPersonalDetails] = useState({})
    const [hasFocused, setHasFocused] = useState(false);

    // ______ TEXT INPUTS __________
    const [cmInputValue, setCmInputValue] = useState('')
    const [ftInputValue, setFtInputValue] = useState('')
    const [inInputValue, setInInputValue] = useState('')
    const [weightInputValue, setWeightInputValue] = useState('')

    // Keeps track of what weight/height unit we're using
     
    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState();
    const [weightUnitValueChecked, setWeightUnitValueChecked] = useState();

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
                    setWeightInputValue(personalDetailsParsed["weight"]["value"])

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
            
        } catch (err) {
            console.log(err)
        }

    };
    return (
        <View style={styles.centerContainer}>
            <Text>
                <Text style={styles.onboardingHeaderText}>Select Weight</Text>
                Input your weight here in lbs or kg 
            </Text>
            <View style={[styles.row, styles.informationTypeLabel]}>
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
            <View style={styles.centered}>
                <Pressable
                    onPress={handleAddPersonalDetails}
                    style={styles.centerRedButton}
                ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>
            </View>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('BiologicalSex');}} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('Welcome');}}/>
    </View>
        
    );

    /*
        // Variable from EditProfilePage that keeps track of what weight unit we're using
        const [weightUnitValueChecked, setWeightUnitValueChecked] = useState();

        <View>
            <View style={[styles.row, {paddingLeft: 15, paddingTop: 15}]}>
            <Text>Add your weight:  </Text>
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
        <View>
            <Text style={styles.textInputLabel}>{weightUnitValueChecked}</Text>
            <TextInput
                style={styles.textInput}
                value={weightInputValue}
                onChangeText={setWeightInputValue}
                placeholder={"weight (" + weightUnitValueChecked + ")"}
            />

        </View>
    */
};

export default WeightInput