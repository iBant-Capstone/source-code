import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;


const AddDrink = ({ route, navigation }) => {

    // const drinks = JSON.parse(route.params.drinks)

    // Holds the state of the drink added in here
    const [nameInputValue, setNameInputValue] = useState('');
    const [sizeInputValue, setSizeInputValue] = useState('');
    const [strengthInputValue, setStrengthInputValue] = useState('');
    const [hungerValueSelected, setHungerValueSelected] = useState('')

    // WEB Time Selection
    const [hoursInputValue, setHoursInputValue] = useState('')
    const [minuteInputValue, setMinuteInputValue] = useState('')
    const [timeOfDay, setTimeOfDay] = useState('PM')

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

        // Current Day (for year/month/day)
        let currentDate = new Date()

        // Create the time of drink
        let timeOfDrink = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), (timeOfDay === 'AM' ? Number(hoursInputValue) : Number(hoursInputValue) + 12), Number(minuteInputValue))

        // new Date(year, monthIndex, day, hours, minutes)

        console.log(timeOfDrink.toString())

        // Create the JSON structure for the new drink
        let newDrink = {
            name: nameInputValue,
            size: {
                unit: "ml",
                value: sizeInputValue / 1e3
            },
            strength: strengthInputValue / 100,
            halfLife: Number(hungerValueSelected),
            timeOfDrink: timeOfDrink
        }

        try {
            // const existingDrinks = await AsyncStorage.getItem('drinks');
            // const drinks = existingDrinks ? JSON.parse(existingDrinks) : [];

            // drinks.push(JSON.stringify(newDrink));

            // await AsyncStorage.setItem('drinks', JSON.stringify(drinks));

            // drinks.push(newDrink)
            // console.log("drinks.push(newDrink): " + drinks.push(newDrink))

            // route.params.drinks = JSON.stringify(drinks)
            // console.log("JSON.stringify(drinks) " + JSON.stringify(drinks))

            // console.log("route.params.drinks: " + route.params.drinks)

            route.params.addDrink(newDrink)

            navigation.goBack()
            
            console.log("new drink: " + route.params.drinks)

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ScrollView>
            <View style={styles.centerContainer}>
                <View style={{ minWidth: '100%' }}>
                    <View style={styles.leftContainer}>
                        <Text>Drink name</Text>
                    </View>
                    <TextInput
                        style={styles.largeTextInput}
                        value={nameInputValue}
                        onChangeText={setNameInputValue}
                        placeholder="Wine, Beer, Martini..."
                    />
                    <View style={styles.leftContainer}>
                        <Text>Drink Size (ml)</Text>
                    </View>
                    <TextInput
                        style={styles.largeTextInput}
                        value={sizeInputValue}
                        onChangeText={setSizeInputValue}
                        placeholder="12, 45, 76..."
                    />
                    <View style={styles.leftContainer}>
                        <Text>Drink Strength (ABV) (example: 2.3 for 2.3%)</Text>
                    </View>
                    <TextInput
                        style={styles.largeTextInput}
                        value={strengthInputValue}
                        onChangeText={setStrengthInputValue}
                        placeholder="2.3, 13.7, 9.65..."
                    />
                    <View style={styles.leftContainer}>
                        <Text>Hunger Level</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            value="6"
                            style={hungerValueSelected === '6' ? styles.hungerButtonPressed : styles.hungerButtonRegular}
                            onPress={() => setHungerValueSelected('6')}
                        >
                            <Text>Very Hungry</Text>
                        </Pressable>
                        <Pressable
                            value="9"
                            style={hungerValueSelected === '9' ? styles.hungerButtonPressed : styles.hungerButtonRegular}
                            onPress={() => setHungerValueSelected('9')}
                        >
                            <Text>Hungry</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            value="12"
                            style={hungerValueSelected === '12' ? styles.hungerButtonPressed : styles.hungerButtonRegular}
                            onPress={() => setHungerValueSelected('12')}
                        >
                            <Text>Not Hungry</Text>
                        </Pressable>
                        <Pressable
                            value="15"
                            style={hungerValueSelected === '15' ? styles.hungerButtonPressed : styles.hungerButtonRegular}
                            onPress={() => setHungerValueSelected('15')}
                        >
                            <Text>Full</Text>
                        </Pressable>
                    </View>

                    <View style={styles.leftContainer}>
                        <Text>Time Drank</Text>
                    </View>
                    <View style={styles.centerContainer}>
                        {/* Displays custom time input for web and DateTimePickerModal library for IOS/Android */}
                        {Platform.OS === "web" ?
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    style={styles.smallTextInput}
                                    value={hoursInputValue}
                                    onChangeText={setHoursInputValue}
                                    placeholder="Hour"
                                />
                                <Text> : </Text>
                                <TextInput
                                    style={styles.smallTextInput}
                                    value={minuteInputValue}
                                    onChangeText={setMinuteInputValue}
                                    placeholder="Minute"
                                />
                                <Pressable
                                    value="AM"
                                    style={timeOfDay === 'AM' ? styles.AMPMButtomPressed : styles.AMPMButtonRegular}
                                    onPress={() => setTimeOfDay('AM')}
                                >
                                    <Text>AM</Text>
                                </Pressable>
                                <Pressable
                                    value="PM"
                                    style={timeOfDay === 'PM' ? styles.AMPMButtomPressed : styles.AMPMButtonRegular}
                                    onPress={() => setTimeOfDay('PM')}
                                >
                                    <Text>PM</Text>
                                </Pressable>
                            </View>
                            :
                            <View>
                                <Pressable onPress={showTimePicker} >
                                    <Time>Pick Time</Time>
                                </Pressable>
                                <DateTimePickerModal
                                    isVisible={isTimePickerVisible}
                                    mode="time"
                                    date={selectedTime}
                                    onConfirm={handleTimeConfirm}
                                    onCancel={hideTimePicker}
                                />
                            </View>
                        }
                    </View>

                    <View style={styles.centered}>
                        <Pressable
                            onPress={handleAddEntry}
                            accessibilityLabel="Button to add drink"
                            style={styles.centerRedButton}
                        >
                            <Text style={styles.mainRedButtonText}>Add Drink</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default AddDrink