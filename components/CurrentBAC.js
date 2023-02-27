import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Pressable } from 'react-native';
import * as StyleSheet from './styles';
import { useFocusEffect } from '@react-navigation/native'
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

let styles = StyleSheet.styles;

const CurrentBAC = () => {

    let [drinksConsumed, setDrinksConsumed] = useState([])
    let [personalDetails, setPersonalDetails] = useState({})

    useFocusEffect(
        React.useCallback(() => {
            async function getDrinks() {
                try {

                    // GET THE DRINKS CONSUMED

                    // Get the list of drinks from the async storage
                    const drinksListAsync = await AsyncStorage.getItem('drinks');

                    // Get the parsed version of the drinkslist (or empy array if we don't have any drinks saved)
                    let drinksList = drinksListAsync ? JSON.parse(drinksListAsync) : [];
                    console.log("Drinks list: " + drinksList)

                    // TODO: get it from async storage
                    let asyncPersonalDetails = {
                        sex: "Female",
                        height: {
                            units: "Meters",
                            value: 1.80,
                        },
                        weight: {
                            units: "Kilograms",
                            value: 63
                        }
                    }

                    // Add in additonal information with the functions 
                    asyncPersonalDetails.widmarkFactor = calculateWidmarkFactorFemale()

                    // Set the personalDrinks to state
                    setPersonalDetails(asyncPersonalDetails)

                } catch (error) {
                    console.log(error);
                }
            }
            getDrinks();
        }, [])
    );


    useEffect(() => {

        // Load the drinks with the info we have


        // Set the drinksConsumed
        setDrinksConsumed([
            {
                drinkName: "beer", // currently
                drinkType: "beer",
                drinkStrength: 0.027, // 2.7% ABV
                drinkSize: 0.285, // 285ml
                drinkHalfLife: 6, // corresponds to "Very Hungry" (meaning the 1/2 the alcohol will be absorbed in 6 minutes)
                drinkFullLife: getDrinkFullLife(),
                drinkAlcoholGrams: calculateAlcoholGrams(0.285, 0.027), // drink size and drink strength go into the calculation
                drinkUnits: 1, // only one drink
                drinkConsumedTimeAsDateObject: thirtyMinAgoDateObj(), // when created it always thinks this drink was consumed 30 minutes ago
                drinkFullyAbsorbedTimeAsDateObject: getDrinkFullyAbsorbedTimeAsDateObject()
            },
            {
                drinkName: "beer", // currently
                drinkType: "beer",
                drinkStrength: 0.027, // 2.7% ABV
                drinkSize: 0.285, // 285ml
                drinkHalfLife: 6, // corresponds to "Very Hungry" (meaning the 1/2 the alcohol will be absorbed in 6 minutes)
                drinkFullLife: getDrinkFullLife(),
                drinkAlcoholGrams: calculateAlcoholGrams(0.285, 0.027), // drink size and drink strength go into the calculation
                drinkUnits: 1, // only one drunk
                drinkConsumedTimeAsDateObject: thirtyMinAgoDateObj(), // when created it always thinks this drink was consumed 30 minutes ago
                drinkFullyAbsorbedTimeAsDateObject: getDrinkFullyAbsorbedTimeAsDateObject()
            }
        ])

        // Set the personal details

    }, [])



    // initializes calculating the BAC
    function calculateCurrentBAC() {

        console.log("Drinks consumed " + drinksConsumed)
        console.log("Personal Details " + JSON.stringify(personalDetails))

        calculateBAC(setDateObjectSecondsAndMillisecondsToZero(new Date))
    }




    // _____MAIN FUNCTIONS TO CALCULATE BAC____

    function calculateBAC(currentDate) {
        console.log("(calculateBAC) Current Date: " + currentDate)

        // Initialize the minutes we'll be iterative through
        let timeDiffinMin = getTimeDifferenceBetweenDateObjectsInMinutes(currentDate, getTimeOfFirstDrinkAsDateObject())
        // Intialize BAC
        let BAC = 0

        // Iterate through minutes from first drink to now
        for (; timeDiffinMin >= 0;) {
            console.log("Minute working on: " + timeDiffinMin)

            BAC += increaseBACEveryMinute(currentDate, timeDiffinMin)
            console.log("\tBAC after increase: " + BAC)

            BAC -= reduceBACEveryMinute(BAC)
            console.log("\tBAC after decrease: " + BAC)

            timeDiffinMin--
        }

        console.log(BAC)
        return BAC
    }

    function increaseBACEveryMinute(currentDate, workingTimeDiffMin) {
        //console.log("got into increaseBACEveryMinute")

        let BACtoAdd = 0
        let currentMin = setDateObjectSecondsAndMillisecondsToZero(new Date(currentDate.getTime() - 6e4 * workingTimeDiffMin))

        // console.log(drinksConsumed)

        drinksConsumed.forEach(drink => {
            //console.log("Got into the drinksConsumed foreach loop")
            const timeDiffinMin = getTimeDifferenceBetweenDateObjectsInMinutes(currentMin, drink.drinkConsumedTimeAsDateObject)

            timeDiffinMin >= 0 && drink.drinkFullyAbsorbedTimeAsDateObject >= currentMin && (BACtoAdd += calculateBACToAdd(drink, timeDiffinMin))
            console.log("\t\tBACtoAdd: " + BACtoAdd)
        })

        return BACtoAdd
    }

    function reduceBACEveryMinute(workingBAC) {
        let BAC_REDUCTION_PER_MINUTE = 25e-5
        return workingBAC >= BAC_REDUCTION_PER_MINUTE ? BAC_REDUCTION_PER_MINUTE : workingBAC
    }

    function calculateBACToAdd(drink, timeDiffinMin) {
        let drinkAlcoholGrams = Number(drink.drinkAlcoholGrams)
        return (
            (calculatePercentAlcoholAbsorbedByMinute(timeDiffinMin, drink.drinkHalfLife) - calculatePercentAlcoholAbsorbedByMinute(timeDiffinMin - 1, drink.drinkHalfLife)) * drinkAlcoholGrams / (personalDetails.widmarkFactor * calculateWeightKilograms(personalDetails.weight.units, personalDetails.weight.value) * 1e3) * 100
        )
    }

    function calculateWeightKilograms(units, value) {
        return "Kilograms" === units ? value : value / 2.205

    }

    function calculatePercentAlcoholAbsorbedByMinute(timeDiffinMin, drinkHalfLife) {
        return timeDiffinMin >= 0 ? (100 - 100 / 2 ** (timeDiffinMin / drinkHalfLife)) / 100 : 0
    }



    // _____HELPER FUNCTIONS____

    function setDateObjectSecondsAndMillisecondsToZero(e) {
        return new Date(e.setSeconds(0, 0))
    }

    function getTimeDifferenceBetweenDateObjectsInMinutes(time1, time2) {
        let timeDiffInMin = Math.round((time1.getTime() - time2.getTime()) / 6e4)
        // console.log("(getTimeDifferenceBetweenDateObjectsInMinutes) " + timeDiffInMin)

        return timeDiffInMin
    }

    function getTimeOfFirstDrinkAsDateObject() { // TODO actually figure out the time of first drink
        // return drinksConsumed[drinksConsumed.length - 1].drinkConsumedTimeAsDateObject
        return thirtyMinAgoDateObj()
    }



    // _____ FUNCTIONS TO HELP CALCULATE EITHER personalDetails or drinksConsumed _____

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
        let thirtyMinAgo = new Date(new Date().getTime() - (30 * 60000))

        console.log("(thirtyMinAgoDateObj) " + thirtyMinAgo)

        return thirtyMinAgo
    }

    function getDrinkFullyAbsorbedTimeAsDateObject() {
        // Original code (subbed hard coded expressions for now, will functionalize later)
        // return setDateObjectSecondsAndMillisecondsToZero(new Date(getDrinkConsumedTimeAsDateObject().getTime() + 6e4 * getDrinkFullLife()))
        let drinkFullyAbsorbedTimeAsDateObject = setDateObjectSecondsAndMillisecondsToZero(new Date((new Date().getTime() - (30 * 60000)) + 6e4 * Math.round(6.66 * 6)))

        console.log("(getDrinkFullyAbsorbedTimeAsDateObject) " + drinkFullyAbsorbedTimeAsDateObject)

        return drinkFullyAbsorbedTimeAsDateObject
    }

    function calculateWidmarkFactorFemale() { // TODO pass in height and weight
        let height = 1.80
        let weight = 63
        return .50766 + .11165 * height - weight * (.001612 + .0031 / (height * height)) - 1 / (weight * (.62115 - 3.1665 * height))
    }



    return (
        <View style={styles.centered}>
            <Text style={styles.currentBACText}>Current BAC: <Text style={styles.redBoldText}>0.00%</Text></Text>
            <Pressable
                onPress={() => { calculateCurrentBAC() }}
                style={styles.centerRedButton}
            >
                <Text style={styles.mainRedButtonText}>Update BAC</Text>
            </Pressable>
        </View>
    )
}

export default CurrentBAC