import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Pressable, ScrollView, FlatList, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// Import used components
import CalcDrinkCards from '../components/CalcDrinkCards';
import CurrentBAC from '../components/CurrentBAC';
import InsideOut from '../components/InsideOut';
import Popup from "../components/BACPopUp"; 

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
        // call pop-up here?
    }, [])

    // Handles the change of onInside in children components
    const toggleInsideOut = useCallback((state) => {
        changeInsideOut(state)
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


    // Add BAC pop-up functionality:

    // Call the popup with given BAC
    function callPopUp(BAC) {
        return (
            <View>
                <Popup //isOpen={getValue(alcoholName)} 
                 onChangeModal={() => changePopup(BAC)} 
                 BAC={BAC}/>
            </View>
        );
    }



    // only load the components once we've 
    if (drinksReady) {
        return (
            <ScrollView>
                <View style={styles.pageFillContainer}>
                    <CurrentBAC setBAC={changeBAC} BAC={BAC} drinks={drinks} />

                    <InsideOut onInside={onInside} toggleInsideOut={toggleInsideOut} BAC={BAC} />

                    <View style={styles.redContainer}>
                        <Pressable
                            onPress={() => {
                                console.log("pressed")
                                navigation.navigate('AddDrinkType', { drinks: drinks })
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



// TEST DRINK WHEN YOU WANT ANOTHER DRINK IN STORAGE
// const handleAddEntry = async () => {

//     // Create the JSON structure for the new drink
//     let newDrink = {
//         name: "testName",
//         size: {
//             unit: "ml",
//             value: 15
//         },
//         strength: 12 / 100,
//         halfLife: 6,
//         timeOfDrink: "2023-03-09T06:30:00.000Z"
//     }

//     try {
//         let newDrinks = [...drinks, newDrink]
//         setDrinks(newDrinks)
//     } catch (error) {
//         console.log(error);
//     }
// };