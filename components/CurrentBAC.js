import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

// Import styles
import * as StyleSheet from './styles';
let styles = StyleSheet.styles;

const CurrentBAC = ({ BAC, setBAC, drinks }) => {

    let [drinksConsumed, setDrinksConsumed] = useState([])
    let [personalDetails, setPersonalDetails] = useState({})

    // Keeps track of if we've got the info from storage
    let [drinksPDInitialState, setDrinksPDInitialState] = useState(false) // TODO update naming to make more sense with other drinkspd state update

    // Keeps track of if the drinksConsumed and personalDetails states are both fleshed out with additional info
    let [drinksPDState, setDrinksPDState] = useState(false)


    async function getAsyncData() {
        try {
            // // Get the list of drinks from the async storage
            // const drinksListAsync = await AsyncStorage.getItem('drinks');
            // // Get the parsed version of the drinkslist (or empy array if we don't have any drinks saved)
            // let drinksList = drinksListAsync ? JSON.parse(drinksListAsync) : [];
            
            // TODO: get it from async storage
            const asyncPersonalDetails = await AsyncStorage.getItem('personalDetails'); 
            // Get the parsed version of the personalDetails (or empty object if we don't have any personalDetails saved)
            let personalDetailsParsed = asyncPersonalDetails ? JSON.parse(asyncPersonalDetails) : {};

            // // Set the drinks we have to the state
            // await setDrinksConsumed(drinksList)

            // Set the personalDrinks to state
            await setPersonalDetails(personalDetailsParsed)
        } catch (error) {
            console.log(error);
        }
    }

    async function addToAsyncData() {
        try {
            // ___ DRINKS CONSUMED ___
            const fleshedOutDrinksList = drinks.map((drink) => {
                let parsedDrink = JSON.parse(drink)
                return ({
                    ...parsedDrink,
                    drinkFullLife: getDrinkFullLife(parsedDrink.halfLife), // TODO evaluate if we need this drinkFullLife if we don't actually touch it
                    drinkAlcoholGrams: calculateAlcoholGrams(parsedDrink.size.value, parsedDrink.strength),
                    drinkFullyAbsorbedTimeAsDateObject: getDrinkFullyAbsorbedTimeAsDateObject(parsedDrink.timeOfDrink, getDrinkFullLife(parsedDrink.halfLife)),
                    drinkUnits: 1, // only one drink, TODO try and remove this being needed later
                })
            })
            await setDrinksConsumed(fleshedOutDrinksList)
            
            // ___ PERSONAL DETAILS ___

            // get the right measures for caluclating the widmark factor
            let heightInMeters = personalDetails.height.unit === "cm" ? personalDetails.height.value * 100 : personalDetails.height.value * 0.0254
            let weightInKilograms = personalDetails.weight.unit === "kg" ? personalDetails.weight.value : personalDetails.weight.value * 0.45359237

            let widmarkFactor = calculateWidmarkFactorFemale(heightInMeters, weightInKilograms)
            console.log("WIDMARK: " + widmarkFactor)

            const fleshedOutPersonalDetails = {
                ...personalDetails,
                widmarkFactor: widmarkFactor
            }

            await setPersonalDetails(fleshedOutPersonalDetails)

        } catch (err) {
            console.log(err)
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            async function getAsyncDataWrapped() {
                await getAsyncData();
                setDrinksPDInitialState(true)
            }
            getAsyncDataWrapped()
        }, [])
    )
      
    useEffect(() => {
        async function addToAsyncDataWrapped() {
            if (drinksPDInitialState) {
                await addToAsyncData();
                setDrinksPDState(true)
            }
        }
        addToAsyncDataWrapped()
    }, [drinksPDInitialState]);

    // Waits until both the personalDetails and drinksConsumed states are fully set before calculating the BAC
    useEffect(() => {
        if (drinksPDState) {
            //setBAC(calculateCurrentBAC())
        }
    }, [drinksPDState])

    // initializes calculating the BAC
    function calculateCurrentBAC() {

        // console.log("Drinks consumed " + drinksConsumed)
        console.log("Personal Details " + JSON.stringify(personalDetails))

        let currentBAC = calculateBAC(setDateObjectSecondsAndMillisecondsToZero(new Date))
        return currentBAC
    }


    // _____MAIN FUNCTIONS TO CALCULATE BAC____

    function calculateBAC(currentDate) {
        console.log("(calculateBAC) Current Date: " + currentDate)

        // Initialize the minutes we'll be iterative through
        let timeDiffinMin = getTimeDifferenceBetweenDateObjectsInMinutes(currentDate, getTimeOfFirstDrinkAsDateObject())
        // Intialize BAC
        let workingBAC = 0

        // Iterate through minutes from first drink to now
        for (; timeDiffinMin >= 0;) {
            console.log("Minute working on: " + timeDiffinMin)

            workingBAC += increaseBACEveryMinute(currentDate, timeDiffinMin)
            console.log("\tworkingBAC after increase: " + workingBAC)

            workingBAC -= reduceBACEveryMinute(workingBAC)
            console.log("\tworkingBAC after decrease: " + workingBAC)

            timeDiffinMin--
        }

        console.log(workingBAC)
        return workingBAC
    }

    function increaseBACEveryMinute(currentDate, workingTimeDiffMin) {
        //console.log("got into increaseBACEveryMinute")

        let BACtoAdd = 0
        let currentMin = setDateObjectSecondsAndMillisecondsToZero(new Date(currentDate.getTime() - 6e4 * workingTimeDiffMin))

        // console.log(drinksConsumed)

        drinksConsumed.forEach(drink => {
            // console.log("Got into the drinksConsumed foreach loop")
            const timeDiffinMin = getTimeDifferenceBetweenDateObjectsInMinutes(currentMin, drink.timeOfDrink)

            console.log("\t\tfor each timeDiffinMin: " + timeDiffinMin)
            console.log("\t\tfor each drink.drinkFullyAbsorbedTimeAsDateObject: " + drink.drinkFullyAbsorbedTimeAsDateObject)
            console.log("\t\tfor each currentMin: " + currentMin)
            console.log("\t\tfor each drink.timeOfDrink " + drink.timeOfDrink)

            if (timeDiffinMin >= 0 && drink.drinkFullyAbsorbedTimeAsDateObject >= currentMin) {
                BACtoAdd += calculateBACToAdd(drink, timeDiffinMin)
            }  

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
        let percentAlcoholAbsorbedByMinute = calculatePercentAlcoholAbsorbedByMinute(timeDiffinMin, drink.halfLife)
        let percentAlcoholAbsorbedByMinute2 = calculatePercentAlcoholAbsorbedByMinute(timeDiffinMin - 1, drink.halfLife)

        console.log("\t\t\tcalculateBACToAdd")
        console.log("\t\t\tdrinkAlcoholGrams: " + drinkAlcoholGrams)
        console.log("\t\t\tpercentAlcoholAbsorbedByMinute: " + percentAlcoholAbsorbedByMinute)
        console.log("\t\t\tpercentAlcoholAbsorbedByMinute2: " + percentAlcoholAbsorbedByMinute2)
        console.log("\t\t\tpersonalDetails.widmarkFactor: " + personalDetails.widmarkFactor)
        console.log("\t\t\tpersonalDetails.weight.units: " + personalDetails.weight.unit)
        console.log("\t\t\tpersonalDetails.weight.value: " + personalDetails.weight.value)
        console.log("\t\t\tcalculateWeightKilograms: " + calculateWeightKilograms(personalDetails.weight.unit, personalDetails.weight.value))

        return (
            (percentAlcoholAbsorbedByMinute - percentAlcoholAbsorbedByMinute2) * drinkAlcoholGrams / (personalDetails.widmarkFactor * calculateWeightKilograms(personalDetails.weight.units, personalDetails.weight.value) * 1e3) * 100
        )
    }

    function calculateWeightKilograms(units, value) {
        return "kg" === units ? value : value / 2.205

    }

    function calculatePercentAlcoholAbsorbedByMinute(timeDiffinMin, drinkHalfLife) {
        console.log("\t\t\t\ttimeDiffinMin: " + timeDiffinMin)
        console.log("\t\t\t\tdrinkHalfLife: " + drinkHalfLife)
        let percentAlcoholAbsorbedByMinute = timeDiffinMin >= 0 ? (100 - 100 / 2 ** (timeDiffinMin / drinkHalfLife)) / 100 : 0
        console.log("\t\t\t\tpercentAlcoholAbsorbedByMinute: " + percentAlcoholAbsorbedByMinute)
        return percentAlcoholAbsorbedByMinute
    }

    // _____HELPER FUNCTIONS____

    function setDateObjectSecondsAndMillisecondsToZero(e) {
        return new Date(e.setSeconds(0, 0))
    }

    function getTimeDifferenceBetweenDateObjectsInMinutes(time1, time2) {
        console.log("time 1: " + time1)
        console.log("time 2: " + time2)

        let time1DateObj = new Date(time1)
        let time2DateObj = new Date(time2)

        let timeDiffInMin = Math.round((time1DateObj.getTime() - time2DateObj.getTime()) / 6e4)

        console.log("Time Diff In Min: " + timeDiffInMin)

        return timeDiffInMin
    }

    function getTimeOfFirstDrinkAsDateObject() { // TODO sort array and 
        // return drinksConsumed[drinksConsumed.length - 1].drinkConsumedTimeAsDateObject
        console.log("drinks right before timeOfFirstDrink: " + JSON.stringify(drinksConsumed))

        const firstDrink = drinksConsumed[0]
        console.log(typeof firstDrink)

        console.log(JSON.stringify(firstDrink))

        const timeOfFirstDrink = firstDrink.timeOfDrink

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

    // TODO Check with DrunkCalc
    function getDrinkFullyAbsorbedTimeAsDateObject(timeConsumed, drinkFullLife) {
        console.log("____ timeConsumed: " + timeConsumed)
        console.log("____ drinkFullLife: " + drinkFullLife)

        // Original code (subbed hard coded expressions for now, will functionalize later)
        let drinkFullyAbsorbedTimeAsDateObject = setDateObjectSecondsAndMillisecondsToZero(new Date(new Date(timeConsumed).getTime() + 6e4 * drinkFullLife))

        console.log("(getDrinkFullyAbsorbedTimeAsDateObject) " + drinkFullyAbsorbedTimeAsDateObject)

        return drinkFullyAbsorbedTimeAsDateObject
    }

    function calculateWidmarkFactorFemale(heightInMeters, weightInKilograms) {
        return .50766 + .11165 * heightInMeters - weightInKilograms * (.001612 + .0031 / (heightInMeters * heightInMeters)) - 1 / (weightInKilograms * (.62115 - 3.1665 * heightInMeters))
    }

    // We first check that there are drinks to calculate and then we check to see if the BAC is calculated
    return (
        <View>
            {drinksConsumed[0] ?
                BAC ?
                <View style={styles.centered}>
                    <Text style={styles.currentBACText}>Current BAC: <Text style={styles.redBoldText}>{Number(BAC).toFixed(3)}%</Text></Text>
                    {/* <Pressable
                        onPress={() => { calculateCurrentBAC() }}
                        style={styles.centerRedButton}
                    >
                        <Text style={styles.mainRedButtonText}>Update BAC</Text>
                    </Pressable> */}
                </View>
                :
                <Text>Loading...</Text>
            :
            <Text>Add in Drinks to Calculate BAC</Text>
            }
        </View>  
    )
}

export default CurrentBAC