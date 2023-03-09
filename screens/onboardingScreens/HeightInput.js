// Accept user input for Height -> need to connect with stored Profile information
// Add Skip button (skips to InfoHub page)
// Add Next button (goes to WeightInput page)
import React, { useState} from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';

let styles = StyleSheet.styles;

const HeightInput = ({navigation}) => {

     // ______ TEXT INPUTS __________
     const [cmInputValue, setCmInputValue] = useState('')
     const [ftInputValue, setFtInputValue] = useState('')
     const [inInputValue, setInInputValue] = useState('')
     const [weightInputValue, setWeightInputValue] = useState('')

    // ______ RADIO BUTTONS ________

    // Keeps track of what height unit we're using
    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState();

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
        <View>
            <Text>
                <Text style={styles.onboardingHeaderText}>Select Height</Text>
                Input your height here in cm or ft/inches 
            </Text>
            <View >
                <View style={[styles.row, styles.informationTypeLabel]}>
                    <Text>ft</Text>
                    <RadioButton
                        value="ft"
                        status={heightUnitValueChecked === 'ft' ? 'checked' : 'unchecked'}
                        onPress={() => setHeightUnitValueChecked('ft')}
                    />
                    <Text>cm</Text>
                    <RadioButton
                        value="cm"
                        status={heightUnitValueChecked === 'cm' ? 'checked' : 'unchecked'}
                        onPress={() => setHeightUnitValueChecked('cm')}
                    />
                </View>
                    {heightUnitValueChecked === "ft" ?
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.textInputLabel}>feet</Text>
                            <Text style={styles.textInputLabel}>inches</Text>
                        </View>
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
                    </View>
                    :
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.textInputLabel}>cm</Text>
                        </View>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.textInput}
                                value={cmInputValue}
                                onChangeText={setCmInputValue}
                                placeholder={"cm"}
                            />
                        </View>
                    </View>}             
                    <View style={styles.centered}>
                        <Pressable
                            onPress={handleAddPersonalDetails}
                            style={styles.centerRedButton}
                        ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>
                    </View>
                </View>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('WeightInput');}} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('InformationHub');}}/>
        </View>
        
    );
};

export default HeightInput