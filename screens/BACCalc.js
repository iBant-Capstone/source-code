import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Pressable, ScrollView, FlatList, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// Import used components
import CalcDrinkCards from '../components/BACCalc-components/CalcDrinkCards';
import CurrentBAC from '../components/BACCalc-components/CurrentBAC';
import InsideOut from '../components/BACCalc-components/InsideOut';
import AddDrinkButton from '../components/BACCalc-components/AddDrinkButton';
import ClearDrinksButton from '../components/BACCalc-components/ClearDrinksButton';
import GetHomeSafelySection from '../components/BACCalc-components/GetHomeSafelySection';

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;

const BACCalc = ({ navigation }) => {

    const [BAC, setBAC] = useState(0)
    const [drinks, setDrinks] = useState(null)
    const [onInside, changeInsideOut] = useState(true)

    const [drinksReady, changeDrinksReady] = useState(false)

 
    // Handles the change of BAC in children components
    const changeBAC = useCallback((newBAC) => {
        setBAC(newBAC)
    }, [])

    // Handles the change of onInside in children components
    const toggleInsideOut = useCallback((state) => {
        changeInsideOut(state)
    })

    // Handles the change of whether or not the drinks are ready
    const handleChangeDrinksReady = useCallback((state) => {
        changeDrinksReady(state)
    })

    // Checks async storage and refreshes the 
    useEffect(() => {
        if (!drinksReady) {
            const getAsyncDrinks = async () => {
                try {
                    console.log("BACCalc.js ---- drinksReady useEffect, drinks have been processed", drinks)
                    const asyncStorageData = await AsyncStorage.getItem("drinks") 
                    const asyncStorageParsed = asyncStorageData !== null ? JSON.parse(asyncStorageData) : []
                    await setDrinks(asyncStorageParsed)
                    //console.log("BACCalc.js ---- drinksReady useEffect, drinks have been processed", drinks)
                } catch (err) {
                    console.log(err)
                }
            }
            getAsyncDrinks()
        }
    }, [drinksReady])

    // Checks if we've successfully processed async data drinks, and then show that drinks are ready
    useEffect(() => {
        if (drinks !== null) {
            console.log("BACCALC.js -- drinks processed right!", drinks)
            changeDrinksReady(true)
        } else {
            console.log('BACCalc.js ----- drinks have changed but they\'re null', drinks)
        }
    }, [drinks])

    // only load the components once we've 
    if (drinksReady) {
        return (
            <ScrollView>
                <View style={styles.pageFillContainer}>
                    <CurrentBAC setBAC={changeBAC} BAC={BAC} drinks={drinks} />
                    <InsideOut onInside={onInside} toggleInsideOut={toggleInsideOut} BAC={BAC} />
                    <View style={styles.redContainer}>
                        <AddDrinkButton navigation={navigation} drinks={drinks} />
                        <CalcDrinkCards drinks={drinks} />
                        <ClearDrinksButton setBAC={changeBAC} changeDrinksReady={handleChangeDrinksReady} />
                        <GetHomeSafelySection />
                    </View>
                </View>
            </ScrollView >
        );
    } else {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    }

}

export default BACCalc
