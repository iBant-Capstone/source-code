import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';


let styles = StyleSheet.styles;


const BACCalc = ({route, navigation}) => {

    // Keeps track of whether we're looking at the inside vs out descriptions of the current BAC
    const [onInside, changeInsideOut] = useState(true)

    // React component displaying all the keys (eventually drinks)
    const AsyncKeys = () => {
        // the AsyncKeys component uses the useState and useEffect hooks to retrieve the keys from 
        // async storage and store them in the component state. 
        const [keys, setKeys] = useState([]);

        useEffect(() => {
            async function getKeys() {
              try {
                const keys = await AsyncStorage.getAllKeys();
                setKeys(keys);
              } catch (error) {
                console.log(error);
              }
            }

            getKeys();
        }, []);

        return (
            <View>
              <Text>Keys in async storage:</Text>
              {keys.map((key) => (
                <Text key={key}>{key}</Text>
              ))}
            </View>
        );
    }

    // TODO: figure out how to retrieve and simply display the data drom async storage
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
                accessibilityLabel="Change the description to the inside version"
            />
            <Button
                onPress={() => changeInsideOut(false)}
                title="Out"
                color="#841584"
                accessibilityLabel="Change the description to the outside version"
            />
            <Text style={styles.centered}>State: {onInside ? "I'm showing the inside description" : "I'm showing the outside description"}</Text>
            <Button
                onPress={() => navigation.navigate('AddDrinkPage', { title: 'Add a Drink', drinks: route.drinks})}
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Add a drink"
            />
            <AsyncKeys />
        </View>
    );
};


export default BACCalc