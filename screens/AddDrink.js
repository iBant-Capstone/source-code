import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";

let styles = StyleSheet.styles;


const AddDrink = ({route, navigation}) => {
    // Holds the state of the drink added in here
    const [textInputValue, setTextInputValue] = useState('');
    const [nameInputValue, setNameInputValue] = useState('');
    const [sizeInputValue, setSizeInputValue] = useState('');
    const [strengthInputValue, setStrengthInputValue] = useState('');
    const [timeInputValue, setTimeInputValue] = useState('');
    const [time, setTime] = useState(new Date());

    // MIGHT HAVE TO JUST TO TEXT ENTRY FOR TIME, ONE FOR HOUR ONE FOR MINUTE AND THEN CHOOSE AM/PM

    // adds the drink to the async storage
    const handleAddEntry = async () => {

        // Create the JSON structure for the new drink
        let newDrink = {
            name: nameInputValue,
            size: {
                unit: "ml",
                value: sizeInputValue
            },
            strength: strengthInputValue / 100,
            time: timeInputValue
        }

        console.log("new drink: " + JSON.stringify(newDrink))

        try {
            const existingDrinks = await AsyncStorage.getItem('drinks');
            const drinks = existingDrinks ? JSON.parse(existingDrinks) : [];
        
            drinks.push(JSON.stringify(newDrink));
        
            await AsyncStorage.setItem('drinks', JSON.stringify(drinks));
            //   setTextInputValue('');
            //   setNameInputValue('');
            //   setSizeInputValue('');
            //   setStrengthInputValue('');
            //   setTimeInputValue('');
            navigation.goBack()
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <View style={styles.centered}>
            <Text>Input The Name of the Drink Below</Text>
            <TextInput 
                value={nameInputValue}
                onChangeText={setNameInputValue}
                placeholder="Name of Drink"
            />
            <Text>Input the size of the drink (ml)</Text>
            <TextInput 
                value={sizeInputValue}
                onChangeText={setSizeInputValue}
                placeholder="Name of Drink"
            />
            <Text>Input the drink strength (ABV)</Text>
            <TextInput 
                value={strengthInputValue}
                onChangeText={setStrengthInputValue}
                placeholder="Name of Drink"
            />
            <Text>Input the time of drink</Text>
            <TextInput 
                value={timeInputValue}
                onChangeText={setTimeInputValue}
                placeholder="Name of Drink"
            />
            <Text>Enter the time</Text>
            <Flatpickr
                data-enable-time
                data-no-calendar
                value={time}
                onChange={(selectedTime) => setTime(selectedTime[0])}
            />
            <Button
                onPress={handleAddEntry}
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default AddDrink