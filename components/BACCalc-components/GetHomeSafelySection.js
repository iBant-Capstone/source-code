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
        warningText = "At this BAC level, you are SEVERELY intoxicated and are in danger of significant health risks including loss of consciousness and choking/aspirating on vomit. Consuming additional alcohol may lead to danger of death.\n";
    } else if (BAC >= 0.35) {
        warningText = "At this BAC level, you are SEVERELY intoxicated and are in danger of death due to coma or respiratory failure. You require immediate medical attention.\n";
    }

    let warningTextSection;
    if (warningText != "") {
        warningTextSection = <View style={{ backgroundColor: "#CF5260", opacity: 0.75, borderRadius: 5, padding: 10 }}>
            <Text style={textStyles.whiteText}>{warningText}</Text>
        </View>
    } else {
        warningTextSection = <Text style={textStyles.whiteText}>{warningText}</Text>
    }

    return (
        <View style={{ backgroundColor: '#FFFFFF', padding: 15, maxWidth: '90%', borderRadius: 15 }}>
            <Text style={textStyles.redSemiBoldLargeText}>Get Home Safely</Text>
            {warningTextSection}
            <GetHomeSafelyButtons />
        </View>
    )
}

export default GetHomeSafelySection