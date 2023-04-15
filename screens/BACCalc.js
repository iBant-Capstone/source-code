import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CalcDrinkCards from '../components/BACCalc-components/CalcDrinkCards';
import CurrentBAC from '../components/BACCalc-components/CurrentBAC';
import InsideOut from '../components/BACCalc-components/InsideOut';
import AddDrinkButton from '../components/BACCalc-components/AddDrinkButton';
import ClearDrinksButton from '../components/BACCalc-components/ClearDrinksButton';
import GetHomeSafelySection from '../components/BACCalc-components/GetHomeSafelySection';

import Popup from '../components/AlcoholPopUp';

import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;

const BACCalc = ({ navigation, route }) => {

    const [BAC, setBAC] = useState(0)
    const [drinks, setDrinks] = useState(route && route.drinks ? route.drinks : null)
    const [onInside, setOnInside] = useState(true)
    const [drinksReady, changeDrinksReady] = useState(false)

    const handleSetBAC = useCallback((newBAC) => {
        setBAC(newBAC)
        callPopUp(newBAC) // call pop-up here with newBAC
        // TODO: add conditioning so callPopUp is only called with if newBAC >= 0.08?
    }, [])

    const handleSetOnInside = useCallback((state) => {
        setOnInside(state)
    })

    const handleChangeDrinksReady = useCallback((state) => {
        changeDrinksReady(state)
    })

    useEffect(() => {
        changeDrinksReady(false)
        console.log("route useEffect drinksready:", drinksReady)
    }, [route])

    useEffect(() => {
        if (!drinksReady) {
            console.log("drinksReady useEffect Drinks aren't ready")
            const getAsyncDrinks = async () => {
                try {
                    const asyncStorageData = await AsyncStorage.getItem("drinks") 
                    const asyncStorageParsed = asyncStorageData !== null ? JSON.parse(asyncStorageData) : []
                    setDrinks(asyncStorageParsed)
                    console.log(asyncStorageParsed)
                } catch (err) {
                    console.log(err)
                }
            }
            getAsyncDrinks()
        }
    }, [drinksReady])

    useEffect(() => {
        if (drinks !== null) {
            changeDrinksReady(true)
        }
        console.log("drinks was changed to this: ", drinks)
    }, [drinks])


    // BAC pop-up functions:
    // Call the popup with given BAC
    function callPopUp(BAC) {
        console.log("called BAC pop-up");
        console.log("BAC: ", BAC);
        return (
            <View>
                <Popup BAC={BAC}/>
            </View>
        );
    }

    // only load the components once we've 
    if (drinksReady) {
        return (
            <ScrollView>
                <View style={styles.pageFillContainer}>
                    <CurrentBAC setBAC={handleSetBAC} BAC={BAC} drinks={drinks} />
                    <InsideOut onInside={onInside} setOnInside={handleSetOnInside} BAC={BAC} />
                    <View style={styles.redContainer}>
                        <AddDrinkButton navigation={navigation} drinks={drinks} />
                        <CalcDrinkCards drinks={drinks} navigation={navigation}/>
                        <ClearDrinksButton setBAC={handleSetBAC} changeDrinksReady={handleChangeDrinksReady} />
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
