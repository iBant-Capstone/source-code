import React from 'react';
import { Text, View, Pressable } from 'react-native';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { textStyles } from '../../components/styles/textStyles';

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
        <View style={[containerStyles.row, containerStyles.leftTopPadding, {display: "flex", justifyContent: "space-between", paddingRight:24, alignItems: "center"}]}>
            <Text style={textStyles.boldText}>{headerText}</Text>
            <View style={{display: "flex", flexDirection: "row"}}>
                <CustomRadioButton unitValueChecked={unitValueChecked} setUnitValue={setUnitValue} unitOption={unitOption1} />
                <CustomRadioButton unitValueChecked={unitValueChecked} setUnitValue={setUnitValue} unitOption={unitOption2} />
            </View>
        </View>
    )
}

export default SectionHeaderWithRadioButtons