import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import Footer from '../../components/Footer';

import handlePersonaDetailInput from '../../components/onboarding-components/handlePersonalDetailInput';
import validateSexInput from '../../components/inputValidationPersonalDetails/validateSexInput'
import InvalidInputWarning from '../../components/InvalidInputWarning';

// Import styles
import { styles } from '../../components/styles';
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { textStyles } from '../../components/styles/textStyles';


const BiologicalSex = ({ navigation, route }) => {

    const [sexValueChecked, setSexValueChecked] = useState('');

    // ______ Invalid input text ________
    const [showInvalidInputText, setShowInvalidInputText] = useState(false);

    let personalDetailsSoFar = route.params.personalDetailsSoFar
    let newKey = "sex"
    let nextPage = "Welcome"

    const handleSexInput = () => {
        let sex = sexValueChecked
        if (validateSexInput(sex)) {
            let newValue = sex
            handlePersonaDetailInput( personalDetailsSoFar, newKey, newValue, nextPage, navigation)
        } else {
            setShowInvalidInputText(true)
        }
    }

    return (
        <View style={containerStyles.centerWhiteContainer}>
            <Text style={[textStyles.text, textStyles.headerText]}>Select Biological Sex</Text>
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
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={textStyles.redSemiBoldText}>Please note:</Text>
                <Text>We are using an algorithm that uses male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Current research on BAC calculation for trans or intersex individuals is greatly lacking.</Text>
            </View>
            {showInvalidInputText && <InvalidInputWarning />}
            <Footer rightButtonLabel="Next" rightButtonPress={handleSexInput} />
        </View>

    );

};

export default BiologicalSex