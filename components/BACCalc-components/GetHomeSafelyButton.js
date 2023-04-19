import React from 'react';
import { Pressable, Text, Linking } from 'react-native';

import { buttonStyles } from '../styles/buttonStyles';
import { textStyles } from '../styles/textStyles';

const GetHomeSafelyButton = ({ url, title }) => {
    return (
        <Pressable
            onPress={() => Linking.openURL(url)}
            accessibilityLabel={title}
            style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}>
            <Text style={textStyles.whiteSemiBoldText}>{title}</Text>
        </Pressable>
    )
}

export default GetHomeSafelyButton;