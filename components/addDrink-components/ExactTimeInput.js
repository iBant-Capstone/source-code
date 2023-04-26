import React, { useState } from "react"
import { View, Text, Pressable, TextInput } from 'react-native';

import SectionHeaderWithRadioButtons from "../SectionHeaderWithRadioButtons";
import PersonalDetailsDoubleTextInput from "../personalDetailsInput-components/PersonalDetailsDoubleTextInput";

import { containerStyles } from "../styles/containerStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { textStyles } from '../styles/textStyles';
import { textInputStyles } from "../styles/textInputStyles";

const ExactTimeInput = ({ handleExactTimeInput }) => {

    let [minuteInputValue, setMinuteInputValue] = useState("")
    let [hoursInputValue, setHoursInputValue] = useState("")
    const [timeOfDay, setTimeOfDay] = useState('PM')

    const handlePress = () => {
        handleExactTimeInput(minuteInputValue, hoursInputValue, timeOfDay)
    }

    return (
        <View style={{background: "white"}}>
            <SectionHeaderWithRadioButtons
                headerText={"Custom Time Input"}
                unitValueChecked={timeOfDay}
                setUnitValue={setTimeOfDay}
                unitOption1={'AM'}
                unitOption2={'PM'}
            />
            <View style={[containerStyles.row, {display: "flex", alignItems:"center", justifyContent:"center", marginTop: 12}]}>
                <TextInput
                    style={[textInputStyles.textInput, {maxWidth: "35%", marginBottom: 0}]}
                    value={hoursInputValue}
                    onChangeText={setHoursInputValue}
                />
                <Text> : </Text>
                <TextInput
                    style={[textInputStyles.textInput, {maxWidth: "35%", marginBottom: 0}]}
                    value={minuteInputValue}
                    onChangeText={setMinuteInputValue}
                />
            </View>
            <View style={containerStyles.centerContainer}>
                <Pressable
                    onPress={handlePress}
                    accessibilityLabel="Next"
                    style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]}
                >
                    <Text style={textStyles.whiteSemiBoldText}>Add Custom Time</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ExactTimeInput