import React from 'react';
import { View, Text } from 'react-native';

import GetHomeSafelyButtons from './GetHomeSafelyButtons';

import * as StyleSheet from '../styles'
let styles = StyleSheet.styles;

const GetHomeSafelySection = () => {
    return (
        <View style={{ backgroundColor: '#FFFFFF', padding: 15, maxWidth: '90%', borderRadius: 15 }}>
            <Text style={styles.redBoldText}>Get Home Safely</Text>
            <Text>For your own safety and for the safety of everyone else on the road, please don't drink and drive regardless of whether your BAC is below the federal limit. We recommend getting an Uber, riding with a designated driver, calling someone you trust, walking, or using public transit instead.</Text>
            <GetHomeSafelyButtons />
        </View>
    )
}

export default GetHomeSafelySection