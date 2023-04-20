import React from 'react';
import { View, Text } from 'react-native';

import GetHomeSafelyButtons from './GetHomeSafelyButtons';

import * as StyleSheet from '../styles'
import { textStyles } from '../styles/textStyles';
let styles = StyleSheet.styles;

const GetHomeSafelySection = (props) => {
    let BAC = props.BAC;
    let warningText = "";

    if (BAC >= 0.08 && BAC < 0.25) {
        warningText = "Your BAC level is at or above the federal legal intoxication level. It is illegal for you to drive or ride a bike.\n";
    } else if (BAC >= 0.25 && BAC < 0.35) {
        warningText = "At this BAC level, you are *severely intoxicated* and are in danger of significant health risks including loss of consciousness and choking/aspirating on vomit. Consuming additional alcohol may lead to danger of death.\n";
    } else if (BAC >= 0.35) {
        warningText = "At this BAC level, you are *severely intoxicated* and are in danger of death due to coma or respiratory failure. You require immediate medical attention.\n";
    }

    return (
        <View style={{ backgroundColor: '#FFFFFF', padding: 15, maxWidth: '90%', borderRadius: 15 }}>
            <Text style={textStyles.redSemiBoldText}>Get Home Safely</Text>
            {/* <Text style={textStyles.redSemiBoldText}>Your BAC is: {BAC}</Text> */}
            <Text style={textStyles.text}>{warningText}</Text>
            {/* <br></br> */}
            <Text style={textStyles.text}>For your own safety and for the safety of everyone else on the road, please don't drink and drive regardless of whether your BAC is below the federal limit. We recommend getting an Uber, riding with a designated driver, calling someone you trust, walking, or using public transit instead.</Text>
            <GetHomeSafelyButtons />
        </View>
    )
}

export default GetHomeSafelySection