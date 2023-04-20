import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import Footer from '../../components/Footer';

import handlePersonaDetailInput from '../../components/onboarding-components/handlePersonalDetailInput';

// Import styles
import { styles } from '../../components/styles';
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { textStyles } from '../../components/styles/textStyles';


const BiologicalSex = ({ navigation, route }) => {

    const [sexValueChecked, setSexValueChecked] = useState('');

    let personalDetailsSoFar = route.params.personalDetailsSoFar
    let newKey = "sex"
    let nextPage = "Welcome"

    const handleSexInput = () => {
        let sex = sexValueChecked
        let newValue = sex
        handlePersonaDetailInput( personalDetailsSoFar, newKey, newValue, nextPage, navigation)
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
            <Footer rightButtonLabel="Next" rightButtonPress={handleSexInput} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('Welcome'); }} />
        </View>

    );

};

export default BiologicalSex