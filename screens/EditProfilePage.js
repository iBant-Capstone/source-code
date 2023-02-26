import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, Pressable} from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';

let styles = StyleSheet.styles;


const EditProfilePage = ({ navigation }) => {

    // TODO : maybe make radio buttons their own component in their own file??

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

    const handleAddPersonalDetails = async () => {

        // calculate height value (converting to inches if input was ft)
        let heightValue = heightUnitValueChecked === "cm" ? cmInputValue : (ftInputValue * 12) + inInputValue

        // Set up the personal details to send
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
            <Text>Edit your info here</Text>
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>Add your height   </Text>
                    <Text>ft</Text>
                    <RadioButton
                        value="ft"
                        status={ heightUnitValueChecked === 'ft' ? 'checked' : 'unchecked' }
                        onPress={() => setHeightUnitValueChecked('ft')}
                    />
                    <Text>cm</Text>
                    <RadioButton
                        value="cm"
                        status={ heightUnitValueChecked === 'cm' ? 'checked' : 'unchecked' }
                        onPress={() => setHeightUnitValueChecked('cm')}
                    />
            </View>
            {heightUnitValueChecked === "ft" ?
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text>feet</Text>
                        <TextInput 
                            style={styles.textInput}
                            value={ftInputValue}
                            onChangeText={setFtInputValue}
                            placeholder={"feet"}
                        />
                    </View>
                    <View>
                        <Text>inches</Text>
                        <TextInput 
                            style={styles.textInput}
                            value={inInputValue}
                            onChangeText={setInInputValue}
                            placeholder={"inches"}
                        />
                    </View>
                </View>
                :
                <TextInput 
                    style={styles.textInput}
                    value={cmInputValue}
                    onChangeText={setCmInputValue}
                    placeholder={"height (cm)"}
                />
            }
            

            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>Add your weight  </Text>
                    <Text>lbs</Text>
                    <RadioButton
                        value="lbs"
                        status={ weightUnitValueChecked === 'lbs' ? 'checked' : 'unchecked' }
                        onPress={() => setWeightUnitValueChecked('lbs')}
                    />
                    <Text>kg</Text>
                    <RadioButton
                        value="kg"
                        status={ weightUnitValueChecked === 'kg' ? 'checked' : 'unchecked' }
                        onPress={() => setWeightUnitValueChecked('kg')}
                    />
            </View>
            <TextInput 
                style={styles.textInput}
                value={weightInputValue}
                onChangeText={setWeightInputValue}
                placeholder={"weight (" + weightUnitValueChecked + ")"}
            />
            

            <Text>Chose Sex: {sexValueChecked}</Text>

            <View style={{flexDirection: 'row'}}>
                <View>
                    <Text>Female</Text>
                    <RadioButton
                        value="female"
                        status={ sexValueChecked === 'female' ? 'checked' : 'unchecked' }
                        onPress={() => setSexValueChecked('female')}
                    />
                </View>
                <View>
                    <Text>Male</Text>
                    <RadioButton
                        value="Male"
                        status={ sexValueChecked === 'male' ? 'checked' : 'unchecked' }
                        onPress={() => setSexValueChecked('male')}
                    />
                </View>
            </View>
            
            
            <Pressable 
                onPress={handleAddPersonalDetails}
                style={styles.mainRedButton}
            ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>

        </View>
    )

}

export default EditProfilePage