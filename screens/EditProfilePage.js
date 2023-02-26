import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, Pressable} from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';

let styles = StyleSheet.styles;


const EditProfilePage = ({ navigation }) => {

    // TODO : maybe make radio buttons their own component?

    // Keeps track of radio buttons
    const [value, setValue] = React.useState('female');

    return (
        <View>
            <Text>Edit your info here</Text>
            <Text>Add in your height here</Text>
            <Text>Add in your weight here</Text>
            <Text>Chose Sex: {value}</Text>
            {/* {radioButtons.map((button) => (
                <RadioButton.Item
                    label={button.label}
                    value={button.value}
                    key={button.value}
                    status={checked === button.value ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(button.value)}
                />
            ))} */}
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View>
                    <Text>Female</Text>
                    <RadioButton value="female" />
                </View>
                <View>
                    <Text>Male</Text>
                    <RadioButton value="male" />
                </View>
            </RadioButton.Group>
            <Pressable 
                style={styles.mainRedButton}
            ><Text style={styles.mainRedButtonText}>Save</Text></Pressable>

        </View>
    )

}

export default EditProfilePage