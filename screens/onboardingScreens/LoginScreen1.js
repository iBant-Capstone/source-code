import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';
import { on } from 'events';

let styles = StyleSheet.styles;

// First Login Screen: just BACtracker logo
// redirects to infoHub based on if they have gone through the login process before
// stores the drinks in the component's state. 


const LoginScreen1 = ({ navigation }) => {
    const [hasOnboarded, setOnboarded] = useState(false);

    // retrieves the value from async storage 

    useFocusEffect(
        React.useCallback(() => {
            async function getOnboarded() {
                try {
                    // Get value from async storage
                    const onboard = await AsyncStorage.getItem('onboarding');
                    console.log(onboard);
                    // Set our state 

                    if (onboard === null) {
                        setOnboarded(false);
                    }
                    else {
                        setOnboarded(true);
                    }


                } catch (error) {
                    console.log(error);
                }
            }
            getOnboarded();
        }, [])
    );

    return (
        <View style={styles.centerContainer}>
            <Image style={styles.largeLogoWithText} source={require('../../assets/icons/BACtracker_logo.png')} resizeMode='contain' />
            <Footer rightButtonLabel="Next" rightButtonPress={() => {
                if (hasOnboarded) {
                    navigation.navigate('InformationHub');
                }
                else {
                    navigation.navigate('Login2');
                }
            }} />
        </View>
    );
};

export default LoginScreen1