import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

// Import styles
import * as StyleSheet from './styles';
let styles = StyleSheet.styles;

const CurrentBAC = () => {

    let [BAC, setBAC] = useState()

    let [drinksConsumed, setDrinksConsumed] = useState([])
    let [personalDetails, setPersonalDetails] = useState({})

    // Keeps track of if we've got the info from storage
    let [drinksPDInitialState, setDrinksPDInitialState] = useState(false)

    // Keeps track of if the drinksConsumed and personalDetails states are both fleshed out with additional info
    let [drinksPDState, setDrinksPDState] = useState(false)

    useFocusEffect(
        React.useCallback(() => {
            async function getDrinks() {
                try {

                    // __ GET THE DRINKS CONSUMED FROM ASYNC __

                    // Get the list of drinks from the async storage
                    const drinksListAsync = await AsyncStorage.getItem('drinks');

                    // Get the parsed version of the drinkslist (or empy array if we don't have any drinks saved)
                    let drinksList = drinksListAsync ? JSON.parse(drinksListAsync) : [];
                    console.log("Drinks list from async: " + drinksList)

                    // Set the drinks we have to the state
                    setDrinksConsumed(drinksList)


                    // __ GET THE PERSONAL DETAILS FROM ASYNC __

                    // TODO: get it from async storage
                    const asyncPersonalDetails = await AsyncStorage.getItem('drinks'); 

                    // Get the parsed version of the personalDetails (or empty object if we don't have any personalDetails saved)
                    let personalDetailsParsed = asyncPersonalDetails ? JSON.parse(asyncPersonalDetails) : {};

                    // Get info ready and then calculate the widmark factor
                    let heightInMeters = JSON.parse(personalDetailsParsed.height).unit === "cm" ? JSON.parse(personalDetailsParsed.height).value * 100 : JSON.parse(personalDetailsParsed.height).value * 0.0254
                    let weightInKilograms = JSON.parse(personalDetailsParsed.weight).unit === "kg" ? JSON.parse(personalDetailsParsed.weight).value : JSON.parse(personalDetailsParsed.weight).value * 0.45359237

                    // TODO add in the male version of the widmark calculation
                    personalDetailsParsed.widmarkFactor = calculateWidmarkFactorFemale(heightInMeters, weightInKilograms)

                    // Set the personalDrinks to state
                    setPersonalDetails(personalDetailsParsed)

                    // __ SET THAT WE"RE DONE WITH CALUCLATING ___
                    setDrinksPDState(true)


                } catch (error) {
                    console.log(error);
                }
            }
            getDrinks();
        }, [])
    );

    // Waits until we've collected the drinks from async storage before fleshing them out more
    useEffect(() => {
        // Add in the calulcated properties to the drinks consumed
        let fleshedOutDrinksList = drinksConsumed.map((drink) => {
            console.log("Drink Size: " + drink.size)
            return ({
                ...drink,
                drinkFullLife: getDrinkFullLife(drink.drinkHalfLife), // TODO evaluate if we need this drinkFullLife if we don't actually touch it
                drinkAlcoholGrams: calculateAlcoholGrams(JSON.parse(drink.size).value, drink.strength),
                drinkFullyAbsorbedTimeAsDateObject: getDrinkFullyAbsorbedTimeAsDateObject(drink.drinkConsumedTimeAsDateObject, getDrinkFullLife(drink.drinkHalfLife)),
                drinkUnits: 1, // only one drink, TODO try and remove this being needed later
            })
        })
        setDrinksConsumed(fleshedOutDrinksList)

        // Add in the calulcated properties to the personalDetails consumed



    }, [drinksPDInitialState])

    // Waits until both the personalDetails and drinksConsumed states are fully set before calculating the BAC
    useEffect(() => {
        console.log(drinksConsumed)
        console.log(personalDetails)
        setBAC(calculateCurrentBAC())
    }, [drinksPDState])
    

    // initializes calculating the BAC
    function calculateCurrentBAC() {

        // console.log("Drinks consumed " + drinksConsumed)
        // console.log("Personal Details " + JSON.stringify(personalDetails))

        let currentBAC = calculateBAC(setDateObjectSecondsAndMillisecondsToZero(new Date))
        return currentBAC
    }


    // _____MAIN FUNCTIONS TO CALCULATE BAC____

    function calculateBAC(currentDate) {
        // console.log("(calculateBAC) Current Date: " + currentDate)

        // Initialize the minutes we'll be iterative through
        let timeDiffinMin = getTimeDifferenceBetweenDateObjectsInMinutes(currentDate, getTimeOfFirstDrinkAsDateObject())
        // Intialize BAC
        let BAC = 0

        // Iterate through minutes from first drink to now
        for (; timeDiffinMin >= 0;) {
            //console.log("Minute working on: " + timeDiffinMin)

            BAC += increaseBACEveryMinute(currentDate, timeDiffinMin)
            //console.log("\tBAC after increase: " + BAC)

            BAC -= reduceBACEveryMinute(BAC)
            //console.log("\tBAC after decrease: " + BAC)

            timeDiffinMin--
        }

        //console.log(BAC)
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
            //console.log("\t\tBACtoAdd: " + BACtoAdd)
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

    // TODO check with DrunkCalc to make sure
    function getDrinkFullLife(drinkHalfLife) {
        return Math.round(6.66 * drinkHalfLife)
    }

    function calculateAlcoholGrams(drinkSize, drinkStrength) {
        let alcoholGrams = drinkStrength * (1e3 * drinkSize) * .789

        // console.log("(calculateAlcoholGrams) " + alcoholGrams)

        return alcoholGrams
    }

    // returns a new date objects that has 30 minutes removed from the current time
    // TODO remove when we don't need it anymore
    function thirtyMinAgoDateObj() {
        let thirtyMinAgo = new Date(new Date().getTime() - (30 * 60000))

        // console.log("(thirtyMinAgoDateObj) " + thirtyMinAgo)

        return thirtyMinAgo
    }

    // TODO Check with DrunkCalc
    function getDrinkFullyAbsorbedTimeAsDateObject(timeConsumed, drinkFullLife) {
        // Original code (subbed hard coded expressions for now, will functionalize later)
        let drinkFullyAbsorbedTimeAsDateObject = setDateObjectSecondsAndMillisecondsToZero(new Date(new Date(timeConsumed).getTime() + 6e4 * drinkFullLife))

        // console.log("(getDrinkFullyAbsorbedTimeAsDateObject) " + drinkFullyAbsorbedTimeAsDateObject)

        return drinkFullyAbsorbedTimeAsDateObject
    }

    function calculateWidmarkFactorFemale(heightInMeters, weightInKilograms) { // TODO pass in height and weight
        let height = 1.80
        let weight = 63
        return .50766 + .11165 * height - weight * (.001612 + .0031 / (height * height)) - 1 / (weight * (.62115 - 3.1665 * height))
    }

    return (
        <View>
            {BAC ?
                <View style={styles.centered}>
                    <Text style={styles.currentBACText}>Current BAC: <Text style={styles.redBoldText}>{Number(BAC).toFixed(2)}%</Text></Text>
                    {/* <Pressable
                        onPress={() => { calculateCurrentBAC() }}
                        style={styles.centerRedButton}
                    >
                        <Text style={styles.mainRedButtonText}>Update BAC</Text>
                    </Pressable> */}
                </View>
            :
            <Text>Loading...</Text>
            }
        </View>  
    )
}

export default CurrentBAC