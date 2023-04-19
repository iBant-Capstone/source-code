import React from 'react';
import { Text } from 'react-native';

import { textStyles } from './styles/textStyles.js';

const TitleText = ({ name }) => {
    return (
        <Text style={textStyles.title}>{name}</Text>
    );
};

export default TitleText;