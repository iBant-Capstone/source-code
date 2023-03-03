import React, { useState } from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

// Import components
import Footer from '../../components/Footer';
import { on } from 'events';

// Import styles
import * as StyleSheet from '../../components/styles'; 
let styles = StyleSheet.styles;

// First Login Screen: just BACtracker logo
// redirects to infoHub based on if they have gone through the login process before
// stores the drinks in the component's state. 
const LoginScreen1 = ({navigation}) => {
    // Create state of onboarded or not
    const [hasOnboarded, setOnboarded] = useState(false);
    
// retrieves the value from async storage to only show the login if 
useFocusEffect(
    React.useCallback(() => {
        async function getOnboarded() {
        try {
            // Get value from async storage
            const onboard = await AsyncStorage.getItem('onboarding');
            console.log(onboard);
            // Set our state 
            if(onboard === null) {
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
            <View >
                <Image style={styles.largeLogoWithText} source={require('../../assets/icons/BACtracker_logo.png')} resizeMode='contain' />
                <Pressable
                    style={styles.mainRedButton}
                    onPress={async () => { await AsyncStorage.setItem('onboarding', false); 
                    console.log("clearing async storage")
                    console.log(await AsyncStorage.getItem('onboarding'))
                    setOnboarded(false)}} >
                    <Text style={styles.mainRedButtonText}>Clear Async Storage</Text>
                </Pressable>
             </View>    
             <Footer rightButtonLabel="Next" rightButtonPress={() => 
             {  
                if(hasOnboarded){
                    navigation.navigate('InformationHub');
                }
                else{
                    navigation.navigate('Login2');
                }
                }}/>        
        </View>
    );
};

export default LoginScreen1