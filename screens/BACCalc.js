import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Pressable, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// Import used components
import CalcDrinkCards from '../components/CalcDrinkCards';
import CurrentBAC from '../components/CurrentBAC';

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;

// Import BAC Levels and Effects JSON data
import BACLevelsEffects from '../json/bac-levels-and-effects.json'


const BACCalc = ({ route, navigation }) => {

    const [BAC, setBAC] = useState(0)
    const [drinks, setDrinks] = useState([])

    // retrieves the drinks from async storage eveytime the component is refocused 
    // (had to use a FocusEffect because the regular useEffect only remounted the component after a bigger reload of the entire app)
    // useFocusEffect(
    //     React.useCallback(() => {
    //     async function getDrinks() {
    //         try {
    //             // Get the list of drinks from the async storage
    //             const drinksListAsync = await AsyncStorage.getItem('drinks');

    //             // Get the parsed version of the drinkslist (or empy array if we don't have any drinks saved)
    //             let drinksList = drinksListAsync ? JSON.parse(drinksListAsync) : [];
    //             // console.log("Drinks list: " + drinksList)

    //             // Set our state drinksList
    //             setDrinks(drinksList);

    //             console.log("______I FOCUSED_____")
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getDrinks();
    //     }, [])
    // );

    // check if we have the drinks in the navigation

    // Handles the change of drinks in children components/other pages
    const changeDrinks = useCallback((newDrinksList) => {
        setDrinks(newDrinksList)
    }, [])

    // Handles the changing of BAC in children components
    const changeBAC = (newBAC) => {
        setBAC(newBAC)
    }

    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)

    // Function to determine BAC inside effects based on given BAC -> need to make async to update when BAC changes?
    const displayInsideBACEffects = (BAC) => { 
        let i = 0;
        let toReturn = "";

        while (i < BACLevelsEffects.length) {            
            let BACLevelsEffectsData = BACLevelsEffects[i];
            let minBACLevel = BACLevelsEffectsData[0];
            let maxBACLevel = BACLevelsEffectsData[1];
            let insideEffects = BACLevelsEffectsData[2];

            if (BAC >= minBACLevel && BAC <= maxBACLevel) {
                toReturn = "BAC: " + BAC + "\n" + insideEffects;
                break;
            } else {
                i++;
            }            
        }

        return (
            <Text>{toReturn}</Text>
        )
    }

    // Function to determine BAC outside effects based on given BAC -> need to make async to update when BAC changes?
    const displayOutsideBACEffects = (BAC) => { 
        let i = 0;
        let toReturn = "";

        while (i < BACLevelsEffects.length) {            
            let BACLevelsEffectsData = BACLevelsEffects[i];
            let minBACLevel = BACLevelsEffectsData[0];
            let maxBACLevel = BACLevelsEffectsData[1];
            let outsideEffects = BACLevelsEffectsData[3];

            if (BAC >= minBACLevel && BAC <= maxBACLevel) {
                toReturn = "BAC: " + BAC + "\n" + outsideEffects;
                break;
            } else {
                i++;
            }            
        }

        return (
            <Text>{toReturn}</Text>
        )
    }


    // TEST DRINK ADDER COMMENT OUT THIS FUNCTION WHEN YOU WANT ANOTHER DRINK IN STORAGE
    const handleAddEntry = async () => {

        // Create the JSON structure for the new drink
        let newDrink = {
            name: "testName",
            size: {
                unit: "ml",
                value: 15
            },
            strength: 2.3 / 100,
            time: "testTime"
        }
        

        try {
            const existingDrinks = await AsyncStorage.getItem('drinks');
            const drinks = existingDrinks ? JSON.parse(existingDrinks) : [];

            drinks.push(JSON.stringify(newDrink));

            await AsyncStorage.setItem('drinks', JSON.stringify(drinks));
        } catch (error) {
            console.log(error);
        }
    };

    if (drinks !== []) {
        return (
            <ScrollView>
                <View>
                    <CurrentBAC setBAC={changeBAC} BAC={BAC} drinks={drinks} />
                    <View style={[styles.row, styles.centered, { backgroundColor: '#FFFFFF' }]}>
                        <Pressable
                            onPress={() => changeInsideOut(true)}
                            accessibilityLabel="Change the description to the inside version"
                            style={styles.whiteButton}
                        >
                            <Text style={onInside ? styles.yellowUnderline : ""}>Inside</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => changeInsideOut(false)}
                            accessibilityLabel="Change the description to the outside version"
                            style={styles.whiteButton}
                        >
                            <Text style={onInside ? "" : styles.yellowUnderline}>Out</Text>
                        </Pressable>
                        {/* <Text style={{ paddingBottom: 20 }}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text> */}
                        <Text style={{ paddingBottom: 20 }}>{onInside ? displayInsideBACEffects(BAC) : displayOutsideBACEffects(BAC)}</Text>
                    </View>
                    <View style={styles.redContainer}>
                        <Pressable
                            onPress={() => navigation.navigate('AddDrinkPage', { title: 'Add a Drink', changeDrinks, drinks })}
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
                        <CalcDrinkCards drinks={drinks}  />
                        <Pressable
                            onPress={() => {
                                AsyncStorage.setItem('drinks', [])
                                setDrinks([])
                                console.log("changed drinkz")
                            }}
                            accessibilityLabel="Add a drink"
                            style={styles.whiteButton}
                        >
                            <Text>Clear Drinks</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => setBAC(0)}
                            accessibilityLabel="Add a drink"
                            style={styles.whiteButton}
                        >
                            <Text>Set BAC to Zero</Text>
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