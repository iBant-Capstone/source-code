import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, Pressable, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";

let styles = StyleSheet.styles;


const AddDrink = ({route, navigation}) => {
    // Holds the state of the drink added in here
    const [textInputValue, setTextInputValue] = useState('');
    const [nameInputValue, setNameInputValue] = useState('');
    const [sizeInputValue, setSizeInputValue] = useState('');
    const [strengthInputValue, setStrengthInputValue] = useState('');
    const [hungerValueSelected, setHungerValueSelected] = useState('')

    // WEB Time Selection
    const [hoursInputValue, setHoursInputValue] = useState('')
    const [minuteInputValue, setMinuteInputValue] = useState('')
    const [timeOfDay, setTimeOfDay] = useState('')

    // IOS or ANDROID Time Selection
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
      
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    
    const handleTimeConfirm = (time) => {
        setSelectedTime(time);
        hideTimePicker();
    };



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

            <Text>Time Drank</Text>
            
            {/* Displays custom time input for web and DateTimePickerModal library for IOS/Android */}
            {Platform.OS === "web" ?
                <View styles={{flexDirection: 'row'}}>
                    <View>
                        <Text>Hour</Text>
                        <TextInput
                            style={styles.textInput}
                            value={hoursInputValue}
                            onChangeText={setHoursInputValue}
                            //placeholder="2.3, 13.7, 9.65..."
                        />
                    </View>
                    <View>
                        <Text>Minute</Text>
                        <TextInput
                            style={styles.textInput}
                            value={minuteInputValue}
                            onChangeText={setMinuteInputValue}
                            //placeholder="2.3, 13.7, 9.65..."
                        />
                    </View>
                    <Pressable
                        value="AM"
                        style={ timeOfDay === 'AM' ? styles.hungerButtonPressed : styles.hungerButtonRegular}
                        onPress={() => setTimeOfDay('AM')}
                    ><Text>AM</Text></Pressable>
                    <Pressable
                        value="AM"
                        style={ timeOfDay === 'PM' ? styles.hungerButtonPressed : styles.hungerButtonRegular }
                        onPress={() => setTimeOfDay('PM')}
                    ><Text>PM</Text></Pressable>
                </View>
                :
                <View>
                    <Button title="Pick Time" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        date={selectedTime}
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                    />
                </View>
            }

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