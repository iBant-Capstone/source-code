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
            <View style={[styles.row, styles.centered, {backgroundColor: '#FFFFFF'}]}>
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
                <Text style={{paddingBottom: 20}}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text>
            </View>
            <View style={styles.redContainer}>
                <Pressable
                    onPress={() => navigation.navigate('AddDrinkPage', { title: 'Add a Drink' })}
                    accessibilityLabel="Add a drink"
                    style={[styles.whiteButton, {marginTop: -20}]}
                >
                    <Text>Add Drink</Text>
                </Pressable>
                <Text style={styles.whiteText}>Drinks in async storage:</Text>
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