import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';
import { TextInput } from 'react-native-web';

let styles = StyleSheet.styles;

// TODO: add a button to add drinks to an array that can be passed to BACCalc

const AddDrink = ({route, navigation}) => {
    // Holds the state of the drink added in here
    const [textInputValue, setTextInputValue] = useState('');

    // adds the drink to the async storage
    const handleAddEntry = async () => {
        try {
          const existingDrinks = await AsyncStorage.getItem('drinks');
          const drinks = existingDrinks ? JSON.parse(existingDrinks) : [];
    
          drinks.push(textInputValue);
    
          await AsyncStorage.setItem('drinks', JSON.stringify(drinks));
          setTextInputValue('');
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <View style={styles.centered}>
            <TextInput 
                value={textInputValue}
                onChangeText={setTextInputValue}
                placeholder="Name of Drink"
            />
            <Button
                onPress={handleAddEntry}
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => navigation.navigate('BACCalc')}
                title="Back to BACCalc"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default AddDrink