// Accept user input for Biological Sex -> need to connect with stored Profile information
import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import Footer from '../../components/Footer';

// Import styles
import { styles } from '../../components/styles';
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';

// Page to return
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
        <View style={containerStyles.centerWhiteContainer}>
            <Text style={styles.onboardingHeaderText}>Select Biological Sex</Text>

            <View style={{ paddingHorizontal: 15 }}>
                <Text style={styles.redBoldText}>Please note:</Text>
                <Text>We are using an algorithm that uses male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Current research on BAC calculation for trans or intersex individuals is greatly lacking.</Text>
            </View>

            <View style={{ padding: 15 }}>
                <Text>Input your biological sex here</Text>
            </View>

            <View style={[containerStyles.row, containerStyles.centerContainer, { padding: 15 }]}>
                <Text>Chosen Sex: {sexValueChecked}</Text>
            </View>
            <View style={[containerStyles.row, { justifyContent: 'center', paddingVertical: 15, flexWrap: 'nowrap' }]}>
                <Pressable
                    style={sexValueChecked === 'female' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setSexValueChecked('female')}
                ><Text>Female</Text></Pressable>
                <Pressable
                    style={sexValueChecked === 'male' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setSexValueChecked('male')}
                ><Text>Male</Text></Pressable>
            </View>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { handleAddPersonalDetails(); navigation.navigate('Welcome'); }} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('Welcome'); }} />
        </View>

    );

};

export default BiologicalSex