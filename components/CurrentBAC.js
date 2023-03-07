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
    let [drinksPDInitialState, setDrinksPDInitialState] = useState(false) // TODO update naming to make more sense with other drinkspd state update

    // Keeps track of if the drinksConsumed and personalDetails states are both fleshed out with additional info
    let [drinksPDState, setDrinksPDState] = useState(false)



    async function getAsyncData() {
        try {
            // Get the list of drinks from the async storage
            const drinksListAsync = await AsyncStorage.getItem('drinks');
            // Get the parsed version of the drinkslist (or empy array if we don't have any drinks saved)
            let drinksList = drinksListAsync ? JSON.parse(drinksListAsync) : [];

            // TODO: get it from async storage
            const asyncPersonalDetails = await AsyncStorage.getItem('personalDetails'); 
            // Get the parsed version of the personalDetails (or empty object if we don't have any personalDetails saved)
            let personalDetailsParsed = asyncPersonalDetails ? JSON.parse(asyncPersonalDetails) : {};

            // Set the drinks we have to the state
            await setDrinksConsumed(drinksList)
            // Set the personalDrinks to state
            await setPersonalDetails(personalDetailsParsed)

            // set that we're done with gathering from async storage 
            setDrinksPDInitialState(true)
        } catch (error) {
            console.log(error);
        }
    }

    async function addToAsyncData() {
        try {
            console.log("Add to Async Data PersonalDetails: " + JSON.stringify(personalDetails))
            console.log("Add to Async Data drinksConsumed: " + drinksConsumed)

            // ___ DRINKS CONSUMED ___
            const fleshedOutDrinksList = drinksConsumed.map((drink) => {
                let parsedDrink = JSON.parse(drink)
                return ({
                    ...parsedDrink,
                    drinkFullLife: getDrinkFullLife(parsedDrink.halfLife), // TODO evaluate if we need this drinkFullLife if we don't actually touch it
                    drinkAlcoholGrams: calculateAlcoholGrams(parsedDrink.size.value, parsedDrink.strength),
                    drinkTimeConsumedAsDateObject: setDateObjectSecondsAndMillisecondsToZero(new Date(e.drinkConsumedTimeAsDateObject)),
                    drinkFullyAbsorbedTimeAsDateObject: getDrinkFullyAbsorbedTimeAsDateObject(parsedDrink.timeOfDrink, getDrinkFullLife(parsedDrink.halfLife)),
                    drinkUnits: 1, // only one drink, TODO try and remove this being needed later
                })
            })
            await setDrinksConsumed(fleshedOutDrinksList)

            
            // ___ PERSONAL DETAILS ___

            // get the right measures for caluclating the widmark factor
            let heightInMeters = personalDetails.height.unit === "cm" ? personalDetails.height.value * 100 : personalDetails.height.value * 0.0254
            let weightInKilograms = personalDetails.weight.unit === "kg" ? personalDetails.weight.value : personalDetails.weight.value * 0.45359237

            const fleshedOutPersonalDetails = {
                ...personalDetails,
                widmarkFactor: calculateWidmarkFactorFemale(heightInMeters, weightInKilograms)
            }
            await setPersonalDetails(fleshedOutPersonalDetails)

            // Let people know we're done with adding in and setting the new calculations
            setDrinksPDState(true)

        } catch (err) {
            console.log(err)
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getAsyncData();
        }, [])
    )
      
    useEffect(() => {
        if (drinksPDInitialState) {
            addToAsyncData();
        }
    }, [drinksPDInitialState]);

    // Waits until both the personalDetails and drinksConsumed states are fully set before calculating the BAC
    useEffect(() => {
        // console.log("3 Last Use Effect: " + drinksConsumed)
        // console.log("4 Last Use Effect: " + personalDetails)
        // setBAC(calculateCurrentBAC())
    }, [drinksPDState])


    // useFocusEffect(
    //     React.useCallback(() => {
    //         async function getDrinks() {
    //             try {

    //                 // Get the list of drinks from the async storage
    //                 const drinksListAsync = await AsyncStorage.getItem('drinks');
    //                 // Get the parsed version of the drinkslist (or empy array if we don't have any drinks saved)
    //                 let drinksList = drinksListAsync ? JSON.parse(drinksListAsync) : [];

    //                 // TODO: get it from async storage
    //                 const asyncPersonalDetails = await AsyncStorage.getItem('personalDetails'); 
    //                 // Get the parsed version of the personalDetails (or empty object if we don't have any personalDetails saved)
    //                 let personalDetailsParsed = asyncPersonalDetails ? JSON.parse(asyncPersonalDetails) : {};

    //                 // Set the drinks we have to the state
    //                 await setDrinksConsumed(drinksList)
    //                 // Set the personalDrinks to state
    //                 await setPersonalDetails(personalDetailsParsed)

    //                 // set that we're done with gathering from async storage 
    //                 await setDrinksPDInitialState(true)

    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //         getDrinks();
    //     }, [])
    // );

    // // Waits until we've collected the drinks from async storage before fleshing them out more
    // useEffect(() => {
    //     async function addToData() {
    //         console.log("1 Initial Drinks Consumed: " + JSON.stringify(drinksConsumed))
    //         console.log("2 Initial Personal Details: " + JSON.stringify(personalDetails))
            
    //         // ____ DRINKS CONSUMED _____
    //         // Add in the calulcated properties to the drinks consumed
    //         let fleshedOutDrinksList = drinksConsumed.map((drink) => {
    //             console.log("Drink Size: " + drink.size)
    //             return ({
    //                 ...drink,
    //                 drinkFullLife: getDrinkFullLife(drink.drinkHalfLife), // TODO evaluate if we need this drinkFullLife if we don't actually touch it
    //                 drinkAlcoholGrams: calculateAlcoholGrams(JSON.parse(drink.size).value, drink.strength),
    //                 drinkFullyAbsorbedTimeAsDateObject: getDrinkFullyAbsorbedTimeAsDateObject(drink.drinkConsumedTimeAsDateObject, getDrinkFullLife(drink.drinkHalfLife)),
    //                 drinkUnits: 1, // only one drink, TODO try and remove this being needed later
    //             })
    //         })
    //         await setDrinksConsumed(fleshedOutDrinksList)

    //         // ____ PERSONAL DETAILS _____
    //         let fleshedOutPersonalDetails = personalDetails
    //         // Get info ready and then calculate the widmark factor
    //         let heightInMeters = JSON.parse(fleshedOutPersonalDetails.height).unit === "cm" ? JSON.parse(fleshedOutPersonalDetails.height).value * 100 : JSON.parse(fleshedOutPersonalDetails.height).value * 0.0254
    //         let weightInKilograms = JSON.parse(fleshedOutPersonalDetails.weight).unit === "kg" ? JSON.parse(fleshedOutPersonalDetails.weight).value : JSON.parse(fleshedOutPersonalDetails.weight).value * 0.45359237

    //         // TODO add in the option of the male version of the widmark calculation
    //         fleshedOutPersonalDetails.widmarkFactor = calculateWidmarkFactorFemale(heightInMeters, weightInKilograms)

    //         await setPersonalDetails(fleshedOutPersonalDetails)

    //         // Let people know we're done with adding in and setting the new calculations
    //         await setDrinksPDState(true)
    //     }
    //     addToData();
    // }, [drinksPDInitialState])




    // // Waits until both the personalDetails and drinksConsumed states are fully set before calculating the BAC
    // useEffect(() => {
    //     console.log("3 Last Use Effect: " + drinksConsumed)
    //     console.log("4 Last Use Effect: " + personalDetails)
    //     setBAC(calculateCurrentBAC())
    // }, [drinksPDState])
    



    // initializes calculating the BAC
    function calculateCurrentBAC() {

        // console.log("Drinks consumed " + drinksConsumed)
        // console.log("Personal Details " + JSON.stringify(personalDetails))

        let currentBAC = calculateBAC(setDateObjectSecondsAndMillisecondsToZero(new Date))
        return currentBAC
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
            console.log("Got into the drinksConsumed foreach loop")
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
        console.log("Type of time2: " + typeof time2)

        let time2DateObj = new Date(time2)

        console.log("Type of time2 after converting: " + typeof time2)

        let timeDiffInMin = Math.round((time1.getTime() - time2.getTime()) / 6e4)
        // console.log("(getTimeDifferenceBetweenDateObjectsInMinutes) " + timeDiffInMin)

        return timeDiffInMin
    }

    function getTimeOfFirstDrinkAsDateObject() { // TODO actually figure out the time of first drink
        // return drinksConsumed[drinksConsumed.length - 1].drinkConsumedTimeAsDateObject
        console.log("drinks right before timeOfFirstDrink: " + JSON.stringify(drinksConsumed))
        let timeOfFirstDrink = drinksConsumed[drinksConsumed.length - 1].drinkConsumedTimeAsDateObject
        console.log("time of first drink: " + timeOfFirstDrink)
        return timeOfFirstDrink
    }

    // _____ FUNCTIONS TO HELP CALCULATE EITHER personalDetails or drinksConsumed _____

    // TODO check with DrunkCalc to make sure
    function getDrinkFullLife(drinkHalfLife) {
        console.log("__ drinkHalfLife: " + drinkHalfLife)
        return Math.round(6.66 * drinkHalfLife)
    }

    function calculateAlcoholGrams(drinkSize, drinkStrength) {
        let alcoholGrams = drinkStrength * (1e3 * drinkSize) * .789

        console.log("(calculateAlcoholGrams) " + alcoholGrams)

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
        console.log("____ timeConsumed: " + timeConsumed)
        console.log("____ drinkFullLife: " + drinkFullLife)

        // Original code (subbed hard coded expressions for now, will functionalize later)
        let drinkFullyAbsorbedTimeAsDateObject = setDateObjectSecondsAndMillisecondsToZero(new Date(new Date(timeConsumed).getTime() + 6e4 * drinkFullLife))

        console.log("(getDrinkFullyAbsorbedTimeAsDateObject) " + drinkFullyAbsorbedTimeAsDateObject)

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