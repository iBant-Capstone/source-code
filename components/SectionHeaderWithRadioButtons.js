import React from 'react';
import { Text, View, Pressable } from 'react-native';

// Import styles
import { containerStyles } from './styles/containerStyles';
import { buttonStyles } from './styles/buttonStyles';
import { textStyles } from './styles/textStyles';

const SectionHeaderWithRadioButtons = ({ headerText, unitValueChecked, setUnitValue, unitOption1, unitOption2 }) => {

    const CustomRadioButton = ({ unitValueChecked, setUnitValue, unitOption }) => {
        return(
            <Pressable
                style={unitValueChecked === unitOption ? [buttonStyles.radioButton, buttonStyles.alignCenter] : [buttonStyles.radioButton, buttonStyles.radioButtonNotSelected, buttonStyles.alignCenter]}
                onPress={() => setUnitValue(unitOption)}
            ><Text style={textStyles.text}>{unitOption}</Text></Pressable>
        )
    }

    return (
        <View style={[containerStyles.row, containerStyles.leftTopPadding, {display: "flex", justifyContent: "space-between", paddingHorizontal:24, alignItems: "center"}]}>
            <Text style={textStyles.boldText}>{headerText}</Text>
            <View style={{display: "flex", flexDirection: "row", paddingRight: 8}}>
                <CustomRadioButton unitValueChecked={unitValueChecked} setUnitValue={setUnitValue} unitOption={unitOption1} />
                <CustomRadioButton unitValueChecked={unitValueChecked} setUnitValue={setUnitValue} unitOption={unitOption2} />
            </View>
        </View>
    )
}

export default SectionHeaderWithRadioButtons