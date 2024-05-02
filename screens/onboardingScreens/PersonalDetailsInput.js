import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import validateHeightInput from '../../components/inputValidationPersonalDetails/validateHeightInput';
import validateWeightInput from '../../components/inputValidationPersonalDetails/validateWeightInput';
import validateSexInput from '../../components/inputValidationPersonalDetails/validateSexInput';
import validateAgeInput from '../../components/inputValidationPersonalDetails/validateAgeInput'; // Import validateAgeInput

import TitleText from '../../components/Title';
import SectionHeaderWithRadioButtons from '../../components/SectionHeaderWithRadioButtons';
import PersonalDetailsSingleTextInput from '../../components/personalDetailsInput-components/PersonalDetailsSinlgeTextInput';
import PersonalDetailsDoubleTextInput from '../../components/personalDetailsInput-components/PersonalDetailsDoubleTextInput';
import PleaseNoteBioSexSection from '../../components/personalDetailsInput-components/PleaseNoteBioSexSection';
import PersonalDetailsSaveButton from '../../components/personalDetailsInput-components/PersonalDetailsSaveButton';
import InvalidInputWarning from '../../components/InvalidInputWarning';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { imageStyles } from '../../components/styles/imageStyles';
import { textStyles } from '../../components/styles/textStyles';

const PersonalDetailsInput = ({ navigation }) => {

    // ______ TEXT INPUTS __________
    const [cmInputValue, setCmInputValue] = useState('')
    const [ftInputValue, setFtInputValue] = useState('')
    const [inInputValue, setInInputValue] = useState('')
    const [weightInputValue, setWeightInputValue] = useState('')
    const [ageInputValue, setAgeInputValue] = useState(''); // State for date of birth input value

    // ______ RADIO BUTTONS ________

    // Keeps track of what height unit we're using
    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState('ft');
    // Keeps track of what weight unit we're using
    const [weightUnitValueChecked, setWeightUnitValueChecked] = useState('lbs');
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
            sex: sexValueChecked,
            dob: ageInputValue // Include date of birth
        }

        // Go through the checks
        if (passesChecks()) {
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

    // Validation function for inputs
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
        // Validate all inputs
        if (
            validateHeightInput(heightData) &&
            validateWeightInput(weightData) &&
            validateSexInput(sexValueChecked) &&
            validateAgeInput(ageInputValue) // Validate date of birth
        ) {
            passes = true
        } else {
            passes = false
        }
        return passes
    }

    return (
        <View style={[containerStyles.centerWhiteContainer, containerStyles.phoneScreen]}>
            <ScrollView style={{ minWidth: '100%' }}>
                <View style={[containerStyles.row, containerStyles.titleContainer]}>
                    <TitleText name={"Add In..."} />
                    <Image style={imageStyles.rightImage} source={require('../../assets/avatars/Casual_Rosie_shadow.png')} resizeMode='contain' />
                </View>
                <View >
                    <View style={[containerStyles.row, containerStyles.leftTopPadding]}>
                        <Text style={textStyles.text}>Enter your information to enable personalized Blood Alcohol Concentration (BAC) calculations:</Text>
                    </View>

                    {/* Date of Birth Header */}
                    <SectionHeaderWithRadioButtons
                        headerText={"Date of Birth"}
                    />

                    {/* Date of Birth Input Section */}
                    <TextInput
                        value={ageInputValue}
                        placeholder="YYYY/MM/DD"
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={setAgeInputValue}
                        style={textStyles.input}
                    />
                    {validateAgeInput(ageInputValue) && new Date().getFullYear() - new Date(ageInputValue).getFullYear() < 21 && (
                        <View style={{ paddingHorizontal: 25 }}>
                        <Text style={textStyles.errorText}><b>Warning: You must be at least 21 years old to drink alcohol.</b></Text>
                        </View>
                    )}

                    {/* Height Header */}
                    <SectionHeaderWithRadioButtons
                        headerText={"Height"}
                        unitValueChecked={heightUnitValueChecked}
                        setUnitValue={setHeightUnitValueChecked}
                        unitOption1={"ft"}
                        unitOption2={"cm"}
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
                    />

                    {showInvalidInputText && <InvalidInputWarning />}

                    <PersonalDetailsSaveButton handleAddPersonalDetails={handleAddPersonalDetails} />

                    <PleaseNoteBioSexSection />
                </View>
            </ScrollView>
        </View>
    )
};

export default PersonalDetailsInput;