import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Import styles
import { containerStyles } from '../components/styles/containerStyles';
import { buttonStyles } from '../components/styles/buttonStyles';
import { textStyles } from '../components/styles/textStyles';
import { textInputStyles } from '../components/styles/textInputStyles';

const AddDrink = ({ route, navigation }) => {

    let drinks = route.params.drinks

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
            // Add new drink to the ones we got from the route
            drinks.push(newDrink)

            let drinksToSend = JSON.stringify(drinks)

            // Push the new list to async storage
            await AsyncStorage.setItem('drinks', drinksToSend)

            console.log("AddDrink.js ----- should have sent drinks")

            navigation.navigate('BAC Calc')

            setNameInputValue('')
            setSizeInputValue('')
            setStrengthInputValue('')
            setHungerValueSelected('')
            setHoursInputValue('')
            setMinuteInputValue('')
            setTimeOfDay("PM")

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ScrollView>
            <View style={containerStyles.centerWhiteContainer}>
                <View style={{ minWidth: '100%' }}>
                    <View style={containerStyles.leftContainer}>
                        <Text style={textStyles.text}>Drink name</Text>
                    </View>
                    <TextInput
                        style={[textInputStyles.textInput, textInputStyles.largeTextInput]}
                        value={nameInputValue}
                        onChangeText={setNameInputValue}
                        placeholder="Wine, Beer, Martini..."
                        placeholderTextColor={'grey'}
                    />
                    <View style={containerStyles.leftContainer}>
                        <Text style={textStyles.text}>Drink Size (ml)</Text>
                    </View>
                    <TextInput
                        style={[textInputStyles.textInput, textInputStyles.largeTextInput]}
                        value={sizeInputValue}
                        onChangeText={setSizeInputValue}
                        placeholder="145, 250, 70.."
                        placeholderTextColor={'grey'}
                    />
                    <View style={containerStyles.leftContainer}>
                        <Text style={textStyles.text}>Drink Strength (ABV) (example: 2.3 for 2.3%)</Text>
                    </View>
                    <TextInput
                        style={[textInputStyles.textInput, textInputStyles.largeTextInput]}
                        value={strengthInputValue}
                        onChangeText={setStrengthInputValue}
                        placeholder="2.3, 13.7, 9.65..."
                        placeholderTextColor={'grey'}
                    />
                    <View style={containerStyles.leftContainer}>
                        <Text style={textStyles.text}>Hunger Level</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            value="6"
                            style={hungerValueSelected === '6' ? [buttonStyles.hungerButton, buttonStyles.defaultButton, buttonStyles.alignCenter] : [buttonStyles.hungerButton, buttonStyles.defaultButton, buttonStyles.hungerButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setHungerValueSelected('6')}
                        >
                            <Text style={textStyles.text}>Very Hungry</Text>
                        </Pressable>
                        <Pressable
                            value="9"
                            style={hungerValueSelected === '9' ? [buttonStyles.hungerButton, buttonStyles.defaultButton, buttonStyles.alignCenter] : [buttonStyles.hungerButton, buttonStyles.defaultButton, buttonStyles.hungerButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setHungerValueSelected('9')}
                        >
                            <Text style={textStyles.text}>Hungry</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            value="12"
                            style={hungerValueSelected === '12' ? [buttonStyles.hungerButton, buttonStyles.defaultButton, buttonStyles.alignCenter] : [buttonStyles.hungerButton, buttonStyles.defaultButton, buttonStyles.hungerButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setHungerValueSelected('12')}
                        >
                            <Text style={textStyles.text}>Not Hungry</Text>
                        </Pressable>
                        <Pressable
                            value="15"
                            style={hungerValueSelected === '15' ? [buttonStyles.hungerButton, buttonStyles.defaultButton, buttonStyles.alignCenter] : [buttonStyles.hungerButton, buttonStyles.defaultButton, buttonStyles.hungerButtonNotSelected, buttonStyles.alignCenter]}
                            onPress={() => setHungerValueSelected('15')}
                        >
                            <Text style={textStyles.text}>Full</Text>
                        </Pressable>
                    </View>

                    <View style={containerStyles.leftContainer}>
                        <Text style={textStyles.text}>Time Drank</Text>
                    </View>
                    <View style={containerStyles.centerWhiteContainer}>
                        {/* Displays custom time input for web and DateTimePickerModal library for IOS/Android */}
                        {Platform.OS === "web" ?
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    style={[textInputStyles.textInput, textInputStyles.smallTextInput]}
                                    value={hoursInputValue}
                                    onChangeText={setHoursInputValue}
                                    placeholder="Hour"
                                    placeholderTextColor={'grey'}
                                />
                                <Text style={textStyles.text}> : </Text>
                                <TextInput
                                    style={[textInputStyles.textInput, textInputStyles.smallTextInput]}
                                    value={minuteInputValue}
                                    onChangeText={setMinuteInputValue}
                                    placeholder="Minute"
                                    placeholderTextColor={'grey'}
                                />
                                <Pressable
                                    value="AM"
                                    style={timeOfDay === 'AM' ? [buttonStyles.AMPMButton, buttonStyles.alignCenter] : [buttonStyles.AMPMButton, buttonStyles.AMPMButtonNotSelected, buttonStyles.alignCenter]}
                                    onPress={() => setTimeOfDay('AM')}
                                >
                                    <Text style={textStyles.text}>AM</Text>
                                </Pressable>
                                <Pressable
                                    value="PM"
                                    style={timeOfDay === 'PM' ? [buttonStyles.AMPMButton, buttonStyles.alignCenter] : [buttonStyles.AMPMButton, buttonStyles.AMPMButtonNotSelected, buttonStyles.alignCenter]}
                                    onPress={() => setTimeOfDay('PM')}
                                >
                                    <Text style={textStyles.text}>PM</Text>
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

                    <View style={containerStyles.centerContainer}>
                        <Pressable
                            onPress={handleAddEntry}
                            accessibilityLabel="Button to add drink"
                            style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]}
                        >
                            <Text style={textStyles.whiteSemiBoldText}>Add Drink</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default AddDrink