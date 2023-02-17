import React, {useState} from 'react';
import {Text, View, Button } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";

let styles = StyleSheet.styles;
const headerTitle = 'BAC Calculator';

function BACCalc() {

    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)

    // TODO: make the Add Drink button navigate to the AddDrink.js page (make the AddDrink.js page)
    // TODO: build the cards of the drinks added below the add drink button
    // TODO: make the BAC number updateable
    // TODO: add a buffer div to the top of the page

    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>BAC 0.00%</Text>
            <Button
                onPress={() => changeInsideOut(true)}
                title="Inside"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => changeInsideOut(false)}
                title="Out"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Text style={styles.centered}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text>
            <Button
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};


export default BACCalc