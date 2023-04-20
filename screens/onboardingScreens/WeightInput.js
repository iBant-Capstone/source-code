import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import Footer from '../../components/Footer';

import handlePersonaDetailInput from '../../components/onboarding-components/handlePersonalDetailInput';

// Import styles
import { styles } from '../../components/styles';
import { textStyles } from '../../components/styles/textStyles';
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { textInputStyles } from '../../components/styles/textInput';

const WeightInput = ({ navigation, route}) => {

    const [weightInputValue, setWeightInputValue] = useState('')
    const [weightUnitValueChecked, setWeightUnitValueChecked] = useState('kg');

    // Sets the infomration neede for the handlePersonalDetailsInput function below
    let personalDetailsSoFar = route.params.personalDetailsSoFar
    let newKey = "weight"
    let nextPage = "BiologicalSex"

    // Formats the weight data before sending off to add to the personalDetailsSoFar object and navigating to the next page
    const handleWeightInput = () => {
        let weightData = {
            unit: weightUnitValueChecked,
            value: Number(weightInputValue)
        }
        let newValue = weightData
        handlePersonaDetailInput( personalDetailsSoFar, newKey, newValue, nextPage, navigation)
    }

    return (
        <View style={containerStyles.centerWhiteContainer}>
            <Text style={[textStyles.text, textStyles.headerText]}>Select Weight</Text>
            {/* <View style={{ paddingHorizontal: 15 }}>
                <Text>Input your weight here in lbs or kg</Text>
            </View> */}
            <View style={[containerStyles.row, containerStyles.centerContainer, { paddingTop: 15, flexWrap: 'nowrap' }]}>
                <Pressable
                    style={weightUnitValueChecked === 'lbs' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setWeightUnitValueChecked('lbs')}
                >
                    <Text>lbs</Text></Pressable>
                <Pressable
                    style={weightUnitValueChecked === 'kg' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setWeightUnitValueChecked('kg')}
                ><Text>kg</Text></Pressable>
            </View>

            <View style={[containerStyles.row, containerStyles.centerContainer]}>
                <TextInput
                    style={styles.textInput}
                    value={weightInputValue}
                    onChangeText={setWeightInputValue}
                    placeholder={'test'}
                />
            </View>
            <Footer rightButtonLabel="Save" rightButtonPress={handleWeightInput} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('Welcome'); }} />
        </View>

    );
};

export default WeightInput