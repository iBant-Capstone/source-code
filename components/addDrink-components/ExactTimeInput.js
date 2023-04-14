import React, { useState } from "react"
import { View, Text, Pressable, TextInput } from 'react-native';

import * as StyleSheet from '../styles';
let styles = StyleSheet.styles;

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
            <View style={styles.leftContainer}>
                <Text>Time Drank</Text>
            </View>
            <View style={styles.centerContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={styles.smallTextInput}
                        value={hoursInputValue}
                        onChangeText={setHoursInputValue}
                        placeholder="Hour"
                        placeholderTextColor={'grey'}
                    />
                    <Text> : </Text>
                    <TextInput
                        style={styles.smallTextInput}
                        value={minuteInputValue}
                        onChangeText={setMinuteInputValue}
                        placeholder="Minute"
                        placeholderTextColor={'grey'}
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
            </View>
            {/* TODO Add next button to own component */}
            <View style={styles.centered}>
                <Pressable
                    onPress={handlePress}
                    accessibilityLabel="Next"
                    style={styles.centerRedButton}
                >
                    <Text style={styles.mainRedButtonText}>Next</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ExactTimeInput