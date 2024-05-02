import React from 'react';
import { Text, Pressable, Image } from 'react-native';

// Import styles
import { buttonStyles } from '../styles/buttonStyles';
import { textStyles } from '../styles/textStyles';
import { Row } from 'react-native-table-component';

const AddDrinkButton = ({ navigation, drinks }) => {
    return (
        <Pressable
            onPress={() => {
                navigation.navigate('AddDrinkEmotion', { drinks: drinks })
            }}
            accessibilityLabel="Add a drink"
            style={[buttonStyles.alignCenter, buttonStyles.whiteButton, buttonStyles.defaultButton, {position:"absolute", top:-20, display: "flex", flexDirection: "row", justifyContent:"center", alignItems:'center'}]}
        >
            <Image source={require('../../assets/icons/plus_sign.png')} style={{height: 12, width: 12, marginRight: 8}}/>
            <Text style={[textStyles.text, textStyles.boldText]}>Add Drink</Text>
        </Pressable>
    )
}

export default AddDrinkButton