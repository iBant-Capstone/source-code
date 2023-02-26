import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, Pressable} from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';

let styles = StyleSheet.styles;


const EditProfilePage = ({ navigation }) => {

    // TODO : maybe make radio buttons their own component in their own file??

    // ______ TEXT INPUTS __________
    const [heightInputValue, setHeightInputValue] = useState('')
    const [weightInputValue, setWeightInputValue] = useState('')

    
    // ______ RADIO BUTTONS ________

    // Keeps track of what height unit we're using
    const [heightUnitValueChecked, setHeightUnitValueChecked] = useState('ft');

    // Keeps track of what weight unit we're using
    const [weightUnitValueChecked, setWeightUnitValueChecked] = useState('lbs');

    // Keeps track of what sex value is selected
    const [sexValueChecked, setSexValueChecked] = useState('');



    return (
        <View>
            <Text>Edit your info here</Text>

            <Text>Add in your height here</Text>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Text>ft</Text>
                    <RadioButton
                        value="ft"
                        status={ heightUnitValueChecked === 'ft' ? 'checked' : 'unchecked' }
                        onPress={() => setHeightUnitValueChecked('ft')}
                    />
                </View>
                <View>
                    <Text>cm</Text>
                    <RadioButton
                        value="cm"
                        status={ heightUnitValueChecked === 'cm' ? 'checked' : 'unchecked' }
                        onPress={() => setHeightUnitValueChecked('cm')}
                    />
                </View>
            </View>
            <TextInput 
                value={heightInputValue}
                onChangeText={setHeightInputValue}
                placeholder={"height (" + heightUnitValueChecked + ")"}
            />
            

            <Text>Add in your weight here</Text>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Text>lbs</Text>
                    <RadioButton
                        value="lbs"
                        status={ weightUnitValueChecked === 'lbs' ? 'checked' : 'unchecked' }
                        onPress={() => setWeightUnitValueChecked('lbs')}
                    />
                </View>
                <View>
                    <Text>kg</Text>
                    <RadioButton
                        value="kg"
                        status={ weightUnitValueChecked === 'kg' ? 'checked' : 'unchecked' }
                        onPress={() => setWeightUnitValueChecked('kg')}
                    />
                </View>
            </View>
            <TextInput 
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
                style={styles.mainRedButton}
            ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>

        </View>
    )

}

export default EditProfilePage