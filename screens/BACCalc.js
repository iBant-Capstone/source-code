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

<<<<<<< HEAD

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
=======
>>>>>>> newAddDrink
    if (drinksReady) {
        return (
            <ScrollView>
                <View style={styles.pageFillContainer}>
                    <CurrentBAC setBAC={handleSetBAC} BAC={BAC} drinks={drinks} />
                    <InsideOut onInside={onInside} setOnInside={handleSetOnInside} BAC={BAC} />
                    <View style={styles.redContainer}>
<<<<<<< HEAD
                        <Pressable
                            onPress={() => {
                                console.log("pressed")
                                navigation.navigate('AddDrinkPage', { drinks: drinks })
                            }}
                            accessibilityLabel="Add a drink"
                            style={[styles.whiteButton, { marginTop: -20 }]}
                        >
                            <Text>Add Drink</Text>
                        </Pressable>
                        {/* TEST DRINK, COMMENT OUT IF YOU DON'T WANT THE BUTTON */}
                        {/* <Pressable
                            onPress={() => handleAddEntry() }
                            accessibilityLabel="Add a drink"
                            style={[styles.whiteButton, {marginTop: -20}]}
                        >
                            <Text>Add TEST Drink</Text>
                        </Pressable> */}
                        {/* END COMMENTING HERE */}
                        <View style={{ width: '100%' }}>
                            <CalcDrinkCards drinks={drinks} />
                        </View>
                        <Pressable
                            onPress={() => {
                                AsyncStorage.removeItem("drinks") 
                                setBAC(0)
                                changeDrinksReady(false)
                            }}
                            accessibilityLabel="Add a drink"
                            style={styles.whiteButton}
                        >
                            <Text>Clear Drinks</Text>
                        </Pressable>
                        <View style={{ backgroundColor: '#FFFFFF', padding: 15, maxWidth: '90%', borderRadius: 15 }}>
                            <Text style={styles.redBoldText}>Get Home Safely</Text>
                            <Text>For your own safety and for the safety of everyone else on the road, please don't drink and drive regardless of whether your BAC is below the federal limit. We recommend getting an Uber, riding with a designated driver, calling someone you trust, walking, or using public transit instead.</Text>
                            <View style={[styles.row, styles.centered]}>
                                <Pressable
                                    onPress={() => Linking.openURL("https://www.uber.com/")}
                                    accessibilityLabel="Call an Uber"
                                    style={styles.leftRedButton}>
                                    <Text style={styles.mainRedButtonText}>Call an Uber</Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => Linking.openURL("https://vaden.stanford.edu/super/learn/alcohol-drug-info/reduce-your-risk/what-blood-alcohol-concentration-bac")}
                                    accessibilityLabel="BAC Resource"
                                    style={styles.leftRedButton}>
                                    <Text style={styles.mainRedButtonText}>BAC Resource</Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => Linking.openURL("https://www.google.com/maps")}
                                    accessibilityLabel="Find public transit"
                                    style={styles.leftRedButton}>
                                    <Text style={styles.mainRedButtonText}>Find public transit</Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => Linking.openURL("https://www.findlaw.com/dui/laws-resources/comparing-state-dui-laws.html")}
                                    accessibilityLabel="DUI Laws Resource"
                                    style={styles.leftRedButton}>
                                    <Text style={styles.mainRedButtonText}>DUI Laws Resource</Text>
                                </Pressable>
                            </View>
                        </View>
=======
                        <AddDrinkButton navigation={navigation} drinks={drinks} />
                        <CalcDrinkCards drinks={drinks} />
                        <ClearDrinksButton setBAC={handleSetBAC} changeDrinksReady={handleChangeDrinksReady} />
                        <GetHomeSafelySection />
>>>>>>> newAddDrink
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
