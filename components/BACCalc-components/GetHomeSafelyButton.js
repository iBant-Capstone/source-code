import React from 'react';
import { Pressable, Text, Linking } from 'react-native';

import { styles } from '../styles'
import { buttonStyles } from '../styles/buttonStyles';

const GetHomeSafelyButton = ({ url, title }) => {
    return (
        <Pressable
            onPress={() => Linking.openURL(url)}
            accessibilityLabel={title}
            style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}>
            <Text style={styles.mainRedButtonText}>{title}</Text>
        </Pressable>
    )
}

export default GetHomeSafelyButton;