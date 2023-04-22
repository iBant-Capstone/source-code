import React from 'react';
import { Text, View, TextInput } from 'react-native';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textInputStyles } from '../../components/styles/textInputStyles';


const PersonalDetailsDoubleTextInput = ({ label1, label2, setInputValue1, inputValue1, setInputValue2, inputValue2 }) => {
    return (
        <View>
            <View style={containerStyles.row}>
                <Text style={textInputStyles.label}>{label1}</Text>
                <Text style={textInputStyles.label}>{label2}</Text>
            </View>
            <View style={containerStyles.row}>
                <TextInput
                    style={textInputStyles.textInput}
                    value={inputValue1}
                    onChangeText={setInputValue1}
                />
                <TextInput
                    style={textInputStyles.textInput}
                    value={inputValue2}
                    onChangeText={setInputValue2}
                />
            </View>
        </View>
    )
}

export default PersonalDetailsDoubleTextInput