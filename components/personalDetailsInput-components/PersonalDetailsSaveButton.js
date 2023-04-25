import React from 'react';
import { Text, View, Pressable } from 'react-native';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { textStyles } from '../../components/styles/textStyles';

const PersonalDetailsSaveButton = ({ handleAddPersonalDetails }) => {
    return (
        <View style={[containerStyles.centerContainer, {paddingTop: 32}]}>
            <Pressable
                onPress={handleAddPersonalDetails}
                style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]}
            ><Text style={textStyles.whiteSemiBoldText}>Save</Text></Pressable>
        </View>
    )
}

export default PersonalDetailsSaveButton