import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles.js';

const TitleText = ({ name }) => {
    return (
        <Text style={styles.title}>{name}</Text>
    );
};

export default TitleText;