import React from "react"
import { View, Text, Image } from "react-native"

import * as StyleSheet from '../styles';
let styles = StyleSheet.styles;

const PersonalDetailsIncorrect = () => {
    return (
        <View>
            <Image style={styles.rosieRightImage} source={require('../../assets/avatars/Casual_Rosie.png')} resizeMode='contain' />
            <Text>Personal Details aren't ready! Try again soooon!</Text>
        </View>
    )
}

export default PersonalDetailsIncorrect