import React from 'react';
import { Text, View, TextInput } from 'react-native';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textInputStyles } from '../../components/styles/textInputStyles';


const PersonalDetailsSingleTextInput = ({ unitValueChecked, setInputValue, inputValue }) => {
    return (
        <View>
            <View style={containerStyles.row}>
                <Text style={textInputStyles.label}>{unitValueChecked}</Text>
            </View>
            <View style={containerStyles.row}>
                <TextInput
                    style={[textInputStyles.textInput, textInputStyles.largeTextInput]}
                    value={inputValue}
                    onChangeText={setInputValue}
                />
            </View>
        </View>
    )
}

export default PersonalDetailsSingleTextInput