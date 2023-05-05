import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Pressable, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

import validateHeightInput from '../components/inputValidationPersonalDetails/validateHeightInput';
import validateWeightInput from '../components/inputValidationPersonalDetails/validateWeightInput';
import validateSexInput from '../components/inputValidationPersonalDetails/validateSexInput';

import TitleText from '../components/Title';
import SectionHeaderWithRadioButtons from '../components/SectionHeaderWithRadioButtons';
import PersonalDetailsSingleTextInput from '../components/personalDetailsInput-components/PersonalDetailsSinlgeTextInput';
import PersonalDetailsDoubleTextInput from '../components/personalDetailsInput-components/PersonalDetailsDoubleTextInput';
import PleaseNoteBioSexSection from '../components/personalDetailsInput-components/PleaseNoteBioSexSection';
import PersonalDetailsSaveButton from '../components/personalDetailsInput-components/PersonalDetailsSaveButton';
import InvalidInputWarning from '../components/InvalidInputWarning';

// Import styles
import { containerStyles } from '../components/styles/containerStyles';
import { textStyles } from '../components/styles/textStyles';
import { imageStyles } from '../components/styles/imageStyles';

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

    if (inInputValue !== '' && inInputValue >= 12) {
        setInInputValue('')
        setShowInvalidInputText(true)
    }

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
        // Go through the checks
        if (passesChecks()) {
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

    const passesChecks = () => {
        let passes = true

        // Format height data for validateHeightInput()
        let heightData = {}
        if (heightUnitValueChecked == "ft") {
            heightData = {
                unit: heightUnitValueChecked,
                ft: ftInputValue,
                in: inInputValue
            }
        } else {
            heightData = {
                unit: heightUnitValueChecked,
                cm: cmInputValue
            }
        }

        // Format weight data for validateWeightInput()
        let weightData = {
            unit: weightUnitValueChecked,
            value: weightInputValue
        }

        if (validateHeightInput(heightData) && validateWeightInput(weightData) && validateSexInput(sexValueChecked)) {
            passes = true
        } else {
            passes = false
        }
        return passes
    }

    return (
        <View style={[containerStyles.centerWhiteContainer, containerStyles.phoneScreen]}>
            {/* Only loads once the personal details have loaded */}
            {hasFocused ?
                <ScrollView style={{ minWidth: '100%' }}>
                    <View style={[containerStyles.row, containerStyles.titleContainer]}>
                        <TitleText name={"Edit"} />
                        <Image style={imageStyles.rightImage} source={require('../assets/avatars/Casual_Rosie.png')} resizeMode='contain' />
                    </View>
                    <View style={{paddingTop: 16}}>

                        {/* Height Header */}
                        <SectionHeaderWithRadioButtons 
                            headerText={"Height"} 
                            unitValueChecked={heightUnitValueChecked} 
                            setUnitValue={setHeightUnitValueChecked} 
                            unitOption1={"ft"} 
                            unitOption2={"cm"} 
                            includeButtons={true}
                        />

                        {/* Height Input Section */}
                        {heightUnitValueChecked === "ft" ?
                            <PersonalDetailsDoubleTextInput
                                label1={"feet"}
                                label2={"inches"}
                                inputValue1={ftInputValue}
                                setInputValue1={setFtInputValue}
                                inputValue2={inInputValue}
                                setInputValue2={setInInputValue}
                            />
                            :
                            <PersonalDetailsSingleTextInput
                                unitValueChecked={heightUnitValueChecked}
                                inputValue={cmInputValue}
                                setInputValue={setCmInputValue}
                            />
                        }

                        {/* Weight Header */}
                        <SectionHeaderWithRadioButtons 
                            headerText={"Weight"} 
                            unitValueChecked={weightUnitValueChecked} 
                            setUnitValue={setWeightUnitValueChecked} 
                            unitOption1={"lbs"} 
                            unitOption2={"kg"} 
                            includeButtons={true}
                        />

                        {/* Weight Input Section */}
                        <PersonalDetailsSingleTextInput
                            unitValueChecked={weightUnitValueChecked}
                            inputValue={weightInputValue}
                            setInputValue={setWeightInputValue}
                        />

                        {/* Biological Sex Input Section */}
                        <SectionHeaderWithRadioButtons 
                            headerText={"Biological Sex*"} 
                            unitValueChecked={sexValueChecked} 
                            setUnitValue={setSexValueChecked} 
                            unitOption1={"female"} 
                            unitOption2={"male"} 
                            includeButtons={true}
                        />

                        {showInvalidInputText && <InvalidInputWarning />}

                        <PersonalDetailsSaveButton handleAddPersonalDetails={handleAddPersonalDetails}/>

                        <PleaseNoteBioSexSection />
                    </View>
                </ScrollView>
                :
                <Text style={textStyles.text}>Loading...</Text>
            }
        </View>
    )
}

export default EditProfilePage