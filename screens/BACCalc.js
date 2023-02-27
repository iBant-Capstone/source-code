import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';
import CalcDrinkCards from '../components/CalcDrinkCards';
import CurrentBAC from '../components/CurrentBAC';


let styles = StyleSheet.styles;


const BACCalc = ({ route, navigation }) => {

    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)

    // TODO: build the cards of the drinks added below the add drink button
    // TODO: make the BAC number updateable
    // TODO: add a buffer div to the top of the page

    return (
        <View>
            <CurrentBAC />
            <View style={[styles.row, styles.centerContainer]}>
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
            </View>
            <View style={styles.centerContainer}>
                <Text style={styles.centered}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text>
            </View>
            <View style={styles.redContainer}>
                <Pressable
                    onPress={() => navigation.navigate('AddDrinkPage', { title: 'Add a Drink' })}
                    accessibilityLabel="Add a drink"
                    style={styles.whiteButton}
                >
                    <Text>Add Drink</Text>
                </Pressable>
                <CalcDrinkCards />
                <Pressable
                    onPress={() => AsyncStorage.clear()}
                    accessibilityLabel="Add a drink"
                    style={styles.whiteButton}
                >
                    <Text>Clear Drinks</Text>
                </Pressable>
            </View>
        </View>
    );
};


export default BACCalc