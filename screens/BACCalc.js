import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CalcDrinkCards from '../components/BACCalc-components/CalcDrinkCards';
import CurrentBAC from '../components/BACCalc-components/CurrentBAC';
import InsideOut from '../components/BACCalc-components/InsideOut';
import AddDrinkButton from '../components/BACCalc-components/AddDrinkButton';
import ClearDrinksButton from '../components/BACCalc-components/ClearDrinksButton';
import GetHomeSafelySection from '../components/BACCalc-components/GetHomeSafelySection';

import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;

const BACCalc = ({ navigation }) => {

    const [BAC, setBAC] = useState(0)
    const [drinks, setDrinks] = useState(null)
    const [onInside, setOnInside] = useState(true)
    const [drinksReady, changeDrinksReady] = useState(false)

    const handleSetBAC = useCallback((newBAC) => {
        setBAC(newBAC)
    }, [])

    const handleSetOnInside = useCallback((state) => {
        setOnInside(state)
    })

    const handleChangeDrinksReady = useCallback((state) => {
        changeDrinksReady(state)
    })

    useEffect(() => {
        if (!drinksReady) {
            const getAsyncDrinks = async () => {
                try {
                    const asyncStorageData = await AsyncStorage.getItem("drinks") 
                    const asyncStorageParsed = asyncStorageData !== null ? JSON.parse(asyncStorageData) : []
                    setDrinks(asyncStorageParsed)
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
    }, [drinks])

    if (drinksReady) {
        return (
            <ScrollView>
                <View style={styles.pageFillContainer}>
                    <CurrentBAC setBAC={handleSetBAC} BAC={BAC} drinks={drinks} />
                    <InsideOut onInside={onInside} setOnInside={handleSetOnInside} BAC={BAC} />
                    <View style={styles.redContainer}>
                        <AddDrinkButton navigation={navigation} drinks={drinks} />
                        <CalcDrinkCards drinks={drinks} />
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
