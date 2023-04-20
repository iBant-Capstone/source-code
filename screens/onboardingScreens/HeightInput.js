import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import Footer from '../../components/Footer';

import handlePersonaDetailInput from '../../components/onboarding-components/handlePersonalDetailInput';
import validateHeightInput from '../../components/inputValidationPersonalDetails/validateHeightInput'
import InvalidInputWarning from '../../components/InvalidInputWarning';

// Import styles
import { textStyles } from '../../components/styles/textStyles';
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { textInputStyles } from '../../components/styles/textInputStyles';

const HeightInput = ({ navigation }) => {

    // ______ User Input ________
    const [cmInputValue, setCmInputValue] = useState('')
    const [ftInputValue, setFtInputValue] = useState('')
    const [inInputValue, setInInputValue] = useState('')
    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState('cm');

    const [showInvalidInputText, setShowInvalidInputText] = useState(false);

    // Sets the infomration neede for the handlePersonalDetailsInput function below
    let personalDetailsSoFar = {}
    let newKey = "height"
    let nextPage = "WeightInput"

    // Formats the height data before sending off to add to the personalDetailsSoFar object and navigating to the next page
    const handleHeightInput = () => {
        let heightValue = heightUnitValueChecked === "cm" ? Number(cmInputValue) : (Number(ftInputValue) * 12) + Number(inInputValue)
        let heightData = {
            unit: heightUnitValueChecked,
            value: heightValue
        }
        if (validateHeightInput(heightData)) {
            let newValue = heightData
            handlePersonaDetailInput(personalDetailsSoFar, newKey, newValue, nextPage, navigation)
        } else {
            setShowInvalidInputText(true)
        }
    }

    return (
        <View style={containerStyles.centerWhiteContainer}>
            <Text style={[textStyles.text, textStyles.headerText]}>Select Height</Text>

            <View style={[containerStyles.row, containerStyles.centerContainer, { paddingTop: 15, flexWrap: 'nowrap' }]}>
                <Pressable
                    style={heightUnitValueChecked === 'ft' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setHeightUnitValueChecked('ft')}
                ><Text style={textStyles.text}>ft</Text></Pressable>
                <Pressable
                    style={heightUnitValueChecked === 'cm' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setHeightUnitValueChecked('cm')}
                ><Text style={textStyles.text}>cm</Text></Pressable>
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
            {showInvalidInputText && <InvalidInputWarning />}
            <Footer rightButtonLabel="Save" rightButtonPress={handleHeightInput} />
        </View>
    );
};

export default HeightInput