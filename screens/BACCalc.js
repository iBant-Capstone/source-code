import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Pressable, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// Import used components
import CalcDrinkCards from '../components/CalcDrinkCards';
import CurrentBAC from '../components/CurrentBAC';
import InsideOut from '../components/InsideOut';

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
                <View>
                    <CurrentBAC setBAC={changeBAC} BAC={BAC} drinks={drinks} />

                    <InsideOut onInside={onInside} toggleInsideOut={toggleInsideOut} BAC={BAC} />
                    
                    <View style={styles.redContainer}>
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
                        <View style={{width: '100%'}}>
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
                    </View>

                    <View>
                        <Text style={styles.redBoldText}>Get Home Safely</Text>
                        <Text>For your own safety and for the safety of everyone else on the road, please don't drink and drive regardless of whether your BAC is below the federal limit. We recommend getting an Uber, calling someone you trust, walking, or using public transport instead.</Text>
                        <Pressable style={styles.whiteButton}>
                            <Text>Call an Uber</Text>
                        </Pressable>
                        <Pressable style={styles.whiteButton}>
                            <Text>Find public transport</Text>
                        </Pressable>
                        <Pressable style={styles.whiteButton}>
                            <Text>DUI Laws Resource</Text>
                        </Pressable>
                        <Pressable style={styles.whiteButton}>
                            <Text>BAC Resource</Text>
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
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