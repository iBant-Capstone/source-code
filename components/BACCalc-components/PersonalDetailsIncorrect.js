import React from "react"
import { View, Text, Image, Pressable } from "react-native"

// Import styles
import { styles } from '../styles';
import { containerStyles } from "../styles/containerStyles";
import { buttonStyles } from "../styles/buttonStyles";
import { imageStyles } from "../styles/imageStyles";

const PersonalDetailsIncorrect = ({ navigation }) => {
    return (
        <View style={[containerStyles.centerWhiteContainer, containerStyles.alignTextCenter, { paddingHorizontal: '15%' }]}>
            <Image style={imageStyles.largeCenterImage} source={require('../../assets/avatars/Casual_Rosie.png')} resizeMode='contain' />
            <Text style={{ marginBottom: '10%' }}>Add in your height, weight and sex to use the BAC Calculator</Text>
            <Pressable style={[buttonStyles.alignCenter, buttonStyles.defaultButton, buttonStyles.redButton]} onPress={() => navigation.navigate('EditProfilePage')}><Text style={styles.mainRedButtonText}>Add My Details</Text></Pressable>
            {/* <Text>Personal Details aren't ready! Try again soooon!</Text> */}
        </View>
    )
}

export default PersonalDetailsIncorrect