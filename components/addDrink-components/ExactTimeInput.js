import React, { useState } from "react"
import { View, Text, Pressable, TextInput } from 'react-native';

import { styles } from '../styles';
import { containerStyles } from "../styles/containerStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { textStyles } from '../styles/textStyles';
import { textInputStyles } from "../styles/textInput";

const ExactTimeInput = ({ handleExactTimeInput }) => {

    let [minuteInputValue, setMinuteInputValue] = useState("")
    let [hoursInputValue, setHoursInputValue] = useState("")
    const [timeOfDay, setTimeOfDay] = useState('PM')

    const handlePress = () => {
        handleExactTimeInput(minuteInputValue, hoursInputValue, timeOfDay)
    }

    return (
        <View>
            {/* TODO Add header to own component */}
            <View style={containerStyles.leftContainer}>
                <Text>Time Drank</Text>
            </View>
            <View style={containerStyles.centerWhiteContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={[textInputStyles.textInput, textInputStyles.smallTextInput]}
                        value={hoursInputValue}
                        onChangeText={setHoursInputValue}
                        placeholder="Hour"
                        placeholderTextColor={'grey'}
                    />
                    <Text> : </Text>
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
                        <Text>AM</Text>
                    </Pressable>
                    <Pressable
                        value="PM"
                        style={timeOfDay === 'PM' ? [buttonStyles.AMPMButton, buttonStyles.alignCenter] : [buttonStyles.AMPMButton, buttonStyles.AMPMButtonNotSelected, buttonStyles.alignCenter]}
                        onPress={() => setTimeOfDay('PM')}
                    >
                        <Text>PM</Text>
                    </Pressable>
                </View>
            </View>
            {/* TODO Add next button to own component */}
            <View style={containerStyles.centerContainer}>
                <Pressable
                    onPress={handlePress}
                    accessibilityLabel="Next"
                    style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]}
                >
                    <Text style={textStyles.whiteSemiBoldText}>Next</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ExactTimeInput