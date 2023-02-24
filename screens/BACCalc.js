import React, {useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';
import CalcDrinkCards from '../components/CalcDrinkCards';
import CurrentBAC from '../components/CurrentBAC';


let styles = StyleSheet.styles;


const BACCalc = ({route, navigation}) => {

    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)

    // TODO: build the cards of the drinks added below the add drink button
    // TODO: make the BAC number updateable
    // TODO: add a buffer div to the top of the page

    return (
        <View style={styles.centered}>
            <CurrentBAC />
            <Pressable
                onPress={() => changeInsideOut(true)}
                accessibilityLabel="Change the description to the inside version"
                style={styles.mainRedButton}
            >
                <Text style={styles.mainRedButtonText}>Inside</Text>
            </Pressable>
            <Pressable
                onPress={() => changeInsideOut(false)}
                accessibilityLabel="Change the description to the outside version"
                style={styles.mainRedButton}
            >
                <Text style={styles.mainRedButtonText}>Out</Text>
            </Pressable>
            <Text style={styles.centered}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text>
            <Pressable
                onPress={() => navigation.navigate('AddDrinkPage', { title: 'Add a Drink'})}
                accessibilityLabel="Add a drink"
                style={styles.mainRedButton}
            >
                <Text style={styles.mainRedButtonText}>Add Drink</Text>
            </Pressable>
            <CalcDrinkCards />
            <Pressable
                onPress={() => AsyncStorage.clear()}
                accessibilityLabel="Add a drink"
                style={styles.mainRedButton}
            >
                <Text style={styles.mainRedButtonText}>Clear Drinks</Text>
            </Pressable>
        </View>
    );
};


export default BACCalc