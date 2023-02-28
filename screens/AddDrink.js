import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, Pressable, DatePickerIOS } from 'react-native';
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
    const [hungerValueSelected, setHungerValueSelected] = useState('')

    const [timeInputValue, setTimeInputValue] = useState('');
    const [time, setTime] = useState(new Date());

    // MIGHT HAVE TO JUST TO TEXT ENTRY FOR TIME, ONE FOR HOUR ONE FOR MINUTE AND THEN CHOOSE AM/PM

    // adds the drink to the async storage
    const handleAddEntry = async () => {

        // Create the time of drink
        let timeOfDrink = ''

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
            navigation.goBack()
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <View>
            <Text>Drink name</Text>
            <TextInput 
                style={styles.textInput}
                value={nameInputValue}
                onChangeText={setNameInputValue}
                placeholder="Wine, Beer, Martini..."
            />
            <Text>Drink Size (ml)</Text>
            <TextInput 
                style={styles.textInput}
                value={sizeInputValue}
                onChangeText={setSizeInputValue}
                placeholder="12, 45, 76..."
            />
            <Text>Drink Strength (ABV) (example: 2.3 for 2.3%)</Text>
            <TextInput 
                style={styles.textInput}
                value={strengthInputValue}
                onChangeText={setStrengthInputValue}
                placeholder="2.3, 13.7, 9.65..."
            />
            <Text>Hunger Level</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        value="6"
                        style={ hungerValueSelected === '6' ? styles.hungerButtonPressed : styles.hungerButtonRegular}
                        onPress={() => setHungerValueSelected('6')}
                    ><Text>Very Hungry</Text></Pressable>
                    <Pressable
                        value="9"
                        style={ hungerValueSelected === '9' ? styles.hungerButtonPressed : styles.hungerButtonRegular }
                        onPress={() => setHungerValueSelected('9')}
                    ><Text>Hungry</Text></Pressable>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        value="12"
                        style={ hungerValueSelected === '12' ? styles.hungerButtonPressed : styles.hungerButtonRegular}
                        onPress={() => setHungerValueSelected('12')}
                    ><Text>Not Hungry</Text></Pressable>
                    <Pressable
                        value="15"
                        style={ hungerValueSelected === '15' ? styles.hungerButtonPressed : styles.hungerButtonRegular }
                        onPress={() => setHungerValueSelected('15')}
                    ><Text>Full</Text></Pressable>
            </View>
            {/* <Text>Time of Drink Relative to Now</Text>
            <TextInput 
                style={styles.textInput}
                value={timeInputValue}
                onChangeText={setTimeInputValue}
                placeholder="Name of Drink"
            /> */}
            <Text>Enter the time</Text>
            
            {/* <Flatpickr
                data-enable-time
                data-no-calendar
                // style={{ backgroundColor: "000000" }}
                value={time}
                options={{ enableSeconds: false }}
                onChange={(selectedTime) => setTime(selectedTime[0])}
            /> */}
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