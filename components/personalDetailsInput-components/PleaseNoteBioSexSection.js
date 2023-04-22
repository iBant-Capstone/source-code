import React from 'react';
import { Text, View } from 'react-native';

import { containerStyles } from '../../components/styles/containerStyles';
import { textStyles } from '../../components/styles/textStyles';

const PleaseNoteBioSexSection = () => {
    return (
        <View style={[containerStyles.row, { paddingHorizontal: 15, paddingVertical: 15 }]}>
            <Text style={textStyles.redSemiBoldText}>* Please note: </Text>
            <Text style={textStyles.text}>We are using a BAC algorithm that distinguishes between male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Unfortunately, current research on BAC calculation for trans or intersex individuals is greatly lacking.</Text>
        </View>
    )
}

export default PleaseNoteBioSexSection