import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text } from 'react-native';
import * as StyleSheet from './styles';
import { useFocusEffect } from '@react-navigation/native'
import { Button } from 'react-native-web';

let styles = StyleSheet.styles;

const CurrentBAC = () => {

    // INFO NEEDED
    personalDetails = {
        sex: "Female",
        height: {
            units: "cm",
            value: 180,
        }
    }

    drinksConsumed = [
        {
            drinkName: "wine", // currently
            drinkType: "wine",
            drinkStrength: 0.13, // 13% ABV
            drinkSize: 0.570, // 570ml
            drinkHalfLife: 6, // corresponds to "Very Hungry" (meaning the 1/2 the alcohol will be absorbed in 6 minutes)
            drinkFullLife: getDrinkFullLife(),
            drinkAlcoholGrams: calculateAlcoholGrams(0.570, 0.13), // drink size and drink strength go into the calculation
            drinkUnits: 1, // only one drunk
            drinkConsumedTimeAsDateObject: thirtyMinAgoDateObj(), // when created it always thinks this drink was consumed 30 minutes ago
            drinkFullyAbsorbedTimeAsDateObject: getDrinkFullyAbsorbedTimeAsDateObject()
        }
    ]

    // FUNCTIONS TO HELP CALCULATE EITHER personalDetails or drinksConsumed

    function getDrinkFullLife() {
        return Math.round(6.66 * 6) // 6 being the drinkHalfLife I'm assuming right now for both drinks
    }

    function calculateAlcoholGrams(drinkSize, drinkStrength) {
        let alcoholGrams = drinkStrength * (1e3 * drinkSize) * .789

        console.log("(calculateAlcoholGrams) " + alcoholGrams)

        return alcoholGrams
    }

    // returns a new date objects that has 30 minutes removed from the current time
    function thirtyMinAgoDateObj() {
        let thirtyMinAgo = new Date(new Date.getTime() - (30 * 60000)) 

        console.log("(thirtyMinAgoDateObj) " + thirtyMinAgo)
        
        return thirtyMinAgo
    }

    function getDrinkFullyAbsorbedTimeAsDateObject() {
        // Original code (subbed hard coded expressions for now, will functionalize later)
        // return setDateObjectSecondsAndMillisecondsToZero(new Date(getDrinkConsumedTimeAsDateObject().getTime() + 6e4 * getDrinkFullLife()))
        let drinkFullyAbsorbedTimeAsDateObject = setDateObjectSecondsAndMillisecondsToZero(new Date((new Date.getTime() - (30 * 60000)) + 6e4 * Math.round(6.66 * 6)))

        console.log("(getDrinkFullyAbsorbedTimeAsDateObject) " + drinkFullyAbsorbedTimeAsDateObject)

        return drinkFullyAbsorbedTimeAsDateObject
    }



    
    // _____MAIN FUNCTIONS TO CALCULATE BAC____

    // initializes calculating the BAC
    function calculateCurrentBAC() {
        // Create the widmark factor
        return calculateBAC(setDateObjectSecondsAndMillisecondsToZero(new Date))
    }

    function calculateBAC(currentDate) {
        console.log("(calculateBAC) Current Date: " + currentDate)

        // Initialize the minutes we'll be iterative through
        let timeDiffinMin = getTimeDifferenceBetweenDateObjectsInMinutes(currentDate, getTimeOfFirstDrinkAsDateObject())
        // Intialize BAC
        let BAC = 0

        // Iterate through minutes from first drink to now
        for (; timeDiffinMin >= 0 ;) {
            BAC += increaseBACEveryMinute(currentDate, timeDiffinMin)
            BAC -= reduceBACEveryMinute(BAC)
            t--
        }

        return BAC
    }

    function increaseBACEveryMinute(currentDate, workingTimeDiffMin) {
        let BACtoAdd = 0
        let currentMin = setDateObjectSecondsAndMillisecondsToZero(new Date(currentDate.getTime() - 6e4 * workingTimeDiffMin))

        return drinksConsumed.forEach(drink => {
            const timeDiffinMin = getTimeDifferenceBetweenDateObjectsInMinutes(currentMin, drink.drinkConsumedTimeAsDateObject)

            if (timeDiffinMin >= 0 && drink.drinkFullyAbsorbedTimeAsDateObject >= currentMin) {
                BACtoAdd += calculateBACToAdd(drink, timeDiffinMin)
            }
        }),
        BACtoAdd

    }

    function reduceBACEveryMinute(BAC) {

    }

    function calculateBACToAdd() {

    }

    function calculateWeightKilograms() {

    }

    function calculatePercentAlcoholAbsorbedByMinute() {

    }



    // _____HELPER FUNCTIONS____

    function setDateObjectSecondsAndMillisecondsToZero(e) {
        return new Date(e.setSeconds(0, 0))
    }

    function getTimeDifferenceBetweenDateObjectsInMinutes(time1, time2) {
        let timeDiffInMin = Math.round((time1.getTime() - time2.getTime()) / 6e4 )
        console.log("(getTimeDifferenceBetweenDateObjectsInMinutes) " + timeDiffInMin)
        
        return timeDiffInMin
    }

    function getTimeOfFirstDrinkAsDateObject() {
        return drinksConsumed[drinksConsumed.length - 1].drinkConsumedTimeAsDateObject
    }



    return (
        <View>
            <Text>Current BAC: 0.00%</Text>
            <Button 
                onPress={() => calculateCurrentBAC()}
                title = "Update BAC"
            />   
        </View>
    )
}

export default CurrentBAC