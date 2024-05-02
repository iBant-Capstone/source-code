import React from 'react';
import { Text, View, TextInput } from 'react-native';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textInputStyles } from '../../components/styles/textInputStyles';

const PersonalDetailsAgeInput = ({ label, setDateValue, dateValue }) => {
    return (
        <View>
            <View style={containerStyles.row}>
                <Text style={textInputStyles.label}>{label}</Text>
            </View>
            <View style={containerStyles.row}>
                <TextInput
                    style={[textInputStyles.textInput, textInputStyles.largeTextInput]}
                    value={dateValue}
                    onChangeText={setDateValue}
                    placeholder="YYYY/MM/DD"
                    keyboardType="numeric"
                    maxLength={10}
                />
            </View>
        </View>
    );
};

export default PersonalDetailsAgeInput;