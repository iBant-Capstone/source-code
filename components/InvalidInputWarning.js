import React from 'react'
import { Text, View } from 'react-native'

import { containerStyles } from './styles/containerStyles';
import { textStyles } from './styles/textStyles';

const InvalidInputWarning = () => {
    return (
        <View style={containerStyles.centerContainer}>
            <Text style={textStyles.redSemiBoldText}>Invalid Input, Try Again</Text>
        </View>
    )
}

export default InvalidInputWarning