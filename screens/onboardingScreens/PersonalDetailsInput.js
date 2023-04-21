import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Pressable, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import validateHeightInput from '../../components/inputValidationPersonalDetails/validateHeightInput';
import validateWeightInput from '../../components/inputValidationPersonalDetails/validateWeightInput';
import validateSexInput from '../../components/inputValidationPersonalDetails/validateSexInput';
import TitleText from '../../components/Title';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { textStyles } from '../../components/styles/textStyles';
import { textInputStyles } from '../../components/styles/textInputStyles';
import { imageStyles } from '../../components/styles/imageStyles';

const PersonalDetailsInput = ({ navigation }) => {

    // ______ TEXT INPUTS __________
    const [cmInputValue, setCmInputValue] = useState('')
    const [ftInputValue, setFtInputValue] = useState('')
    const [inInputValue, setInInputValue] = useState('')
    const [weightInputValue, setWeightInputValue] = useState('')


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
            sex: sexValueChecked
        }

        // Go through the checks
        if (passesChecks(newPersonalDetails)) {
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

    const passesChecks = (personalDetails) => {
        let passes = true
        if (validateHeightInput(personalDetails.height) && validateWeightInput(personalDetails.weight) && validateSexInput(personalDetails.sex)) {
            passes = true
        } else {
            passes = false
        }
        return passes
    }

    return (
        <View style={containerStyles.centerWhiteContainer}>
        <ScrollView style={{ minWidth: '100%' }}>
            <View style={[containerStyles.row, containerStyles.titleContainer]}>
                <TitleText name={"Add In..."} />
                <Image style={imageStyles.rightImage} source={require('../../assets/avatars/Casual_Rosie_shadow.png')} resizeMode='contain' />
                
            </View>
            <View >
                <View style={[containerStyles.row, containerStyles.leftTopPadding]}>
                    <Text>Enter your information to enable the BAC calculator</Text>
                </View>
                <View style={[containerStyles.row, containerStyles.leftTopPadding, {display: "flex", justifyContent: "space-between", paddingRight:24, alignItems: "center"}]}>
                    <Text style={textStyles.boldText}>Height</Text>
                    <View style={{display: "flex", flexDirection: "row"}}>
                        <Pressable
                            style={heightUnitValueChecked === 'ft' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setHeightUnitValueChecked('ft')}
                        ><Text style={textStyles.text}>ft</Text></Pressable>
                        <Pressable
                            style={heightUnitValueChecked === 'cm' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setHeightUnitValueChecked('cm')}
                        ><Text style={textStyles.text}>cm</Text></Pressable>
                    </View>
                </View>

                {heightUnitValueChecked === "ft" ?
                    <View>
                        <View style={containerStyles.row}>
                            <Text style={textInputStyles.label}>feet</Text>
                            <Text style={textInputStyles.label}>inches</Text>
                        </View>
                        <View style={containerStyles.row}>
                            <TextInput
                                style={textInputStyles.textInput}
                                value={ftInputValue}
                                onChangeText={setFtInputValue}
                                //placeholder={"feet"}
                            />
                            <TextInput
                                style={textInputStyles.textInput}
                                value={inInputValue}
                                onChangeText={setInInputValue}
                                //placeholder={"inches"}
                            />
                        </View>
                    </View>
                    :
                    <View>
                        <View style={containerStyles.row}>
                            <Text style={textInputStyles.label}>cm</Text>
                        </View>
                        <View style={containerStyles.row}>
                            <TextInput
                                style={[textInputStyles.textInput, textInputStyles.largeTextInput]}
                                value={cmInputValue}
                                onChangeText={setCmInputValue}
                                //placeholder={"cm"}
                            />
                        </View>
                    </View>
                }

                <View style={[containerStyles.row, containerStyles.leftTopPadding, {display: "flex", justifyContent: "space-between", paddingRight:24, alignItems: "center"}]}>
                    <Text style={textStyles.boldText}>Weight</Text>
                    <View style={{display: "flex", flexDirection: "row"}}>
                        <Pressable
                            style={weightUnitValueChecked === 'lbs' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setWeightUnitValueChecked('lbs')}
                        >
                            <Text style={textStyles.text}>lbs</Text></Pressable>
                        <Pressable
                            style={weightUnitValueChecked === 'kg' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setWeightUnitValueChecked('kg')}
                        ><Text style={textStyles.text}>kg</Text></Pressable>
                    </View>
                </View>
                <View>
                    <Text style={textInputStyles.label}>{weightUnitValueChecked}</Text>
                    <TextInput
                        style={[textInputStyles.textInput, textInputStyles.largeTextInput]}
                        value={weightInputValue}
                        onChangeText={setWeightInputValue}
                        //placeholder={weightUnitValueChecked}
                    />

                </View>

                <View style={[containerStyles.row, containerStyles.leftTopPadding, {display: "flex", justifyContent: "space-between", paddingRight:50, alignItems: "center", paddingBottom: 25}]}>
                    <Text style={textStyles.boldText}>Biological Sex*</Text>
                    <View style={{display: "flex", flexDirection: "row"}}>
                        <Pressable
                            style={sexValueChecked === 'female' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setSexValueChecked('female')}
                        ><Text style={textStyles.text}>Female</Text></Pressable>
                        <Pressable
                            style={sexValueChecked === 'male' ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setSexValueChecked('male')}
                        ><Text style={textStyles.text}>Male</Text></Pressable>
                    </View>
                </View>

                <View style={containerStyles.centerContainer}>
                    {showInvalidInputText && <Text style={textStyles.text}>Invalid Input, Try Again</Text>}
                    <Pressable
                        onPress={handleAddPersonalDetails}
                        style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]}
                    ><Text style={textStyles.whiteSemiBoldText}>Save</Text></Pressable>
                </View>
                <View style={[containerStyles.row, { paddingHorizontal: 15, paddingVertical: 15 }]}>
                    <Text style={textStyles.redSemiBoldText}>* Please note: </Text>
                    <Text style={textStyles.text}>We are using a BAC algorithm that distinguishes between male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Unfortunately, current research on BAC calculation for trans or intersex individuals is greatly lacking.</Text>
                </View>
            </View>
        </ScrollView>
        </View>
    )
};

export default PersonalDetailsInput