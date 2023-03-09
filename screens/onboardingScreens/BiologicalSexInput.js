// Accept user input for Biological Sex -> need to connect with stored Profile information
// Include disclaimer
// Add Skip button (skips to InfoHub page)
// Add Next button (goes to InfoHub page)
import React, { useState} from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';


let styles = StyleSheet.styles;

const BiologicalSex = ({ navigation }) => {
     // const [personalDetails, setPersonalDetails] = useState({})
     const [hasFocused, setHasFocused] = useState(false);

     // ______ TEXT INPUTS __________
     const [cmInputValue, setCmInputValue] = useState('')
     const [ftInputValue, setFtInputValue] = useState('')
     const [inInputValue, setInInputValue] = useState('')
     const [weightInputValue, setWeightInputValue] = useState('')
 
     // Keeps track of what weight/height/sex unit we're using
      
     const [heightUnitValueChecked, setHeightUnitValueChecked] = useState();
     const [weightUnitValueChecked, setWeightUnitValueChecked] = useState();
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
                    // we should have the height value already stored
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
            
        } catch (err) {
            console.log(err)
        }

    };

    return (
        <View>
            <Text>
                <Text style={styles.onboardingHeaderText}>Select Biological Sex</Text>
                Input your biological sex here
                
                <Text style={styles.redBoldText}>Please note:</Text>
                We are using an algorithm that uses  male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Current research on BAC calculation for trans or intersex individuals is greatly lacking.
            </Text>
            <View style={[styles.row, styles.informationTypeLabel]}>
                <Text>Chosen Sex: {sexValueChecked}</Text>
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
            </View>
            <View style={styles.centered}>
                <Pressable
                    onPress={handleAddPersonalDetails}
                    style={styles.centerRedButton}
                ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>
            </View>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('InformationHub'); }} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('InformationHub'); }} />
        </View>

    );
};

export default BiologicalSex