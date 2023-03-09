import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

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
        <View style={styles.centerContainer}>
            <Text style={styles.onboardingHeaderText}>Select Height</Text>
            <View style={{ paddingHorizontal: 15 }}>
                <Text>Input your height here in cm or ft/inches</Text>
            </View>

            <View style={[styles.row, styles.centered, { paddingTop: 15, flexWrap: 'nowrap' }]}>
                <Pressable
                    style={heightUnitValueChecked === 'ft' ? styles.radioButtonSelected : styles.radioButtonRegular}
                    onPress={() => setHeightUnitValueChecked('ft')}
                ><Text>ft</Text></Pressable>
                <Pressable
                    style={heightUnitValueChecked === 'cm' ? styles.radioButtonSelected : styles.radioButtonRegular}
                    onPress={() => setHeightUnitValueChecked('cm')}
                ><Text>cm</Text></Pressable>
                </View>
                {heightUnitValueChecked === "ft" ?
                    <View style={styles.row}>
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
                    <View style={[styles.row, styles.centered]}>
                        <TextInput
                            style={styles.textInput}
                            value={cmInputValue}
                            onChangeText={setCmInputValue}
                            placeholder={"cm"}
                        />
                    </View>}
                <View style={styles.centered}>
                    <Pressable
                        onPress={handleAddPersonalDetails}
                        style={styles.centerRedButton}
                    ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>
                </View>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('WeightInput'); }} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('Welcome'); }} />
        </View>
    );
};

export default HeightInput