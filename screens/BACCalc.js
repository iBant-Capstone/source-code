import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, ScrollView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import used components
import CalcDrinkCards from '../components/CalcDrinkCards';
import CurrentBAC from '../components/CurrentBAC';

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;


const BACCalc = ({ route, navigation }) => {

    const [BAC, setBAC] = useState(0)

    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)


    const changeBAC = (newBAC) => {
        setBAC(newBAC)
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


    return (
        <ScrollView>
            <View>
                <CurrentBAC setBAC={changeBAC} BAC={BAC}/>
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
                    <Text style={{ paddingBottom: 20 }}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text>
                </View>
                <View style={styles.redContainer}>
                    <Pressable
                        onPress={() => navigation.navigate('AddDrinkPage', { title: 'Add a Drink' })}
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
                    <CalcDrinkCards />
                    <Pressable
                        onPress={() => AsyncStorage.setItem('drinks', [])}
                        accessibilityLabel="Add a drink"
                        style={styles.whiteButton}
                    >
                        <Text>Clear Drinks</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};


export default BACCalc