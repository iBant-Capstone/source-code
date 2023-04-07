import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Pressable, ScrollView, FlatList, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// Import used components
import CalcDrinkCards from '../components/CalcDrinkCards';
import CurrentBAC from '../components/CurrentBAC';
import InsideOut from '../components/InsideOut';

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;

const BACCalc = ({ route, navigation }) => {


    const [BAC, setBAC] = useState(0)
    const [drinks, setDrinks] = useState((route && route.params && route.params.drinks) ?? [])

    // Handles the change of BAC in children components
    const changeBAC = useCallback((newBAC) => {
        setBAC(newBAC)
    }, [])


    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)

    // Handles the change of onInside in children components
    const toggleInsideOut = useCallback((state) => {
        changeInsideOut(state)
    })


    // TEST DRINK WHEN YOU WANT ANOTHER DRINK IN STORAGE
    const handleAddEntry = async () => {

        // Create the JSON structure for the new drink
        let newDrink = {
            name: "testName",
            size: {
                unit: "ml",
                value: 15
            },
            strength: 12 / 100,
            halfLife: 6,
            timeOfDrink: "2023-03-09T06:30:00.000Z"
        }

        try {
            let newDrinks = [...drinks, newDrink]
            setDrinks(newDrinks)
        } catch (error) {
            console.log(error);
        }
    };


    if (drinks !== []) {
        return (
            <ScrollView>
                <View style={styles.pageFillContainer}>
                    <CurrentBAC setBAC={changeBAC} BAC={BAC} drinks={drinks} />

                    <InsideOut onInside={onInside} toggleInsideOut={toggleInsideOut} BAC={BAC} />

                    <View style={styles.redContainer}>
                        <Pressable
                            onPress={() => navigation.navigate('AddDrinkPage', { drinks: drinks })}
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
                                setDrinks([])
                                setBAC(0)
                                // console.log("changed drinkz")
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