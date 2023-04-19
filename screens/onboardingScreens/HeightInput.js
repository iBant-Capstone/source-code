import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../components/Footer';

// Import styles
import { styles } from '../../components/styles';
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';

const HeightInput = ({ navigation }) => {

    // ______ TEXT INPUTS __________
    const [cmInputValue, setCmInputValue] = useState('')
    const [ftInputValue, setFtInputValue] = useState('')
    const [inInputValue, setInInputValue] = useState('')
    const [weightInputValue, setWeightInputValue] = useState('')

    // ______ RADIO BUTTONS ________

    // Keeps track of what height unit we're using
    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState('cm');

    // sets these values as false because user will not have gone through other two screens
    const weightUnitValueChecked = false;
    const sexValueChecked = 'unchecked';


    // Adds the personal details to async storage
    const handleAddPersonalDetails = async () => {

        // calculate height value (converting to inches if input was ft)
        let heightValue = heightUnitValueChecked === "cm" ? cmInputValue : (Number(ftInputValue) * 12) + Number(inInputValue)

        // Set up the personal details to send
        // uses blank values for weight and sex
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
            <Text style={styles.onboardingHeaderText}>Select Height</Text>
            <View style={{ paddingHorizontal: 15 }}>
                <Text>Input your height here in cm or ft/inches</Text>
            </View>

            <View style={[containerStyles.row, containerStyles.centerContainer, { paddingTop: 15, flexWrap: 'nowrap' }]}>
                <Pressable
                    style={heightUnitValueChecked === 'ft' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setHeightUnitValueChecked('ft')}
                ><Text>ft</Text></Pressable>
                <Pressable
                    style={heightUnitValueChecked === 'cm' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                    onPress={() => setHeightUnitValueChecked('cm')}
                ><Text>cm</Text></Pressable>
            </View>
            {heightUnitValueChecked === "ft" ?
                <View style={containerStyles.row}>
                    <TextInput
                        style={styles.textInput}
                        value={ftInputValue}
                        onChangeText={setFtInputValue}
                        placeholder={"feet"}
                    />
                    <TextInput
                        style={styles.textInput}
                        value={inInputValue}
                        onChangeText={setInInputValue}
                        placeholder={"inches"}
                    />
                </View>
                :
                <View style={[containerStyles.row, containerStyles.centerContainer]}>
                    <TextInput
                        style={styles.textInput}
                        value={cmInputValue}
                        onChangeText={setCmInputValue}
                        placeholder={"cm"}
                    />
                </View>}
            <Footer rightButtonLabel="Save" rightButtonPress={() => { handleAddPersonalDetails(); navigation.navigate('WeightInput'); }} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('WeightInput'); }} />
        </View>
    );
};

export default HeightInput