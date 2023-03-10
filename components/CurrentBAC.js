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

    // Get's the personal details information from async storage
    async function getAsyncData() {
        try {
            const asyncPersonalDetails = await AsyncStorage.getItem('personalDetails'); 
            // Get the parsed version of the personalDetails (or empty object if we don't have any personalDetails saved)
            let personalDetailsParsed = asyncPersonalDetails ? JSON.parse(asyncPersonalDetails) : {};
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
                return ({
                    ...drink,
                    drinkFullLife: getDrinkFullLife(drink.halfLife), // TODO evaluate if we need this drinkFullLife if we don't actually touch it
                    drinkAlcoholGrams: calculateAlcoholGrams(drink.size.value, drink.strength),
                    drinkFullyAbsorbedTimeAsDateObject: getDrinkFullyAbsorbedTimeAsDateObject(drink.timeOfDrink, getDrinkFullLife(drink.halfLife)),
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
                if (JSON.stringify(drinks) !== "[]") {
                    await getAsyncData();
                    setDrinksPDInitialState(true)
                }
            }
            getAsyncDataWrapped()
        }, [])
    )

    // Updateds when drinks are changed
    // IMPLEMENTS THE SAME AS FOCUS EFFECT ABOVE
    useEffect(() => {
        async function startCalc() {
            if (JSON.stringify(drinks) !== "[]") {
                await getAsyncData();
                setDrinksPDInitialState(true)
            }
        }
        startCalc()
    }, [drinks])
      
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
        if (drinksPDState && JSON.stringify(drinks) !== "[]") {
            setBAC(calculateCurrentBAC())
        }
    }, [drinksPDState])

    // initializes calculating the BAC
    function calculateCurrentBAC() {
        let currentBAC = calculateBAC(setDateObjectSecondsAndMillisecondsToZero(new Date))
        
        // Resets our states that help up move through the BAC calculation
        setDrinksPDInitialState(false)
        setDrinksPDState(false)

        return currentBAC
    }


    // _____MAIN FUNCTIONS TO CALCULATE BAC____

    function calculateBAC(currentDate) {
        // Initialize the minutes we'll be iterative through
        let timeDiffinMin = getTimeDifferenceBetweenDateObjectsInMinutes(currentDate, getTimeOfFirstDrinkAsDateObject())
        // Intialize BAC
        let workingBAC = 0

        // Iterate through minutes from first drink to now
        for (; timeDiffinMin >= 0;) {
            workingBAC += increaseBACEveryMinute(currentDate, timeDiffinMin)
            workingBAC -= reduceBACEveryMinute(workingBAC)
            timeDiffinMin--
        }

        return workingBAC
    }

    function increaseBACEveryMinute(currentDate, workingTimeDiffMin) {
        let BACtoAdd = 0
        let currentMin = setDateObjectSecondsAndMillisecondsToZero(new Date(currentDate.getTime() - 6e4 * workingTimeDiffMin))

        drinksConsumed.forEach(drink => {
            const timeDiffinMin = getTimeDifferenceBetweenDateObjectsInMinutes(currentMin, drink.timeOfDrink)
            if (timeDiffinMin >= 0 && drink.drinkFullyAbsorbedTimeAsDateObject >= currentMin) {
                BACtoAdd += calculateBACToAdd(drink, timeDiffinMin)
            }  
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
        return (
            (percentAlcoholAbsorbedByMinute - percentAlcoholAbsorbedByMinute2) * drinkAlcoholGrams / (personalDetails.widmarkFactor * calculateWeightKilograms(personalDetails.weight.units, personalDetails.weight.value) * 1e3) * 100
        )
    }

    function calculateWeightKilograms(units, value) {
        return "kg" === units ? value : value / 2.205

    }

    function calculatePercentAlcoholAbsorbedByMinute(timeDiffinMin, drinkHalfLife) {
        let percentAlcoholAbsorbedByMinute = timeDiffinMin >= 0 ? (100 - 100 / 2 ** (timeDiffinMin / drinkHalfLife)) / 100 : 0
        return percentAlcoholAbsorbedByMinute
    }

    // _____HELPER FUNCTIONS____

    function setDateObjectSecondsAndMillisecondsToZero(e) {
        return new Date(e.setSeconds(0, 0))
    }

    function getTimeDifferenceBetweenDateObjectsInMinutes(time1, time2) {
        let time1DateObj = new Date(time1)
        let time2DateObj = new Date(time2)

        let timeDiffInMin = Math.round((time1DateObj.getTime() - time2DateObj.getTime()) / 6e4)
        return timeDiffInMin
    }

    function getTimeOfFirstDrinkAsDateObject() { // TODO sort array and figure out actual first drink
        const firstDrink = drinksConsumed[0]
        const timeOfFirstDrink = firstDrink.timeOfDrink
        return timeOfFirstDrink
    }

    // _____ FUNCTIONS TO HELP CALCULATE EITHER personalDetails or drinksConsumed _____

    function getDrinkFullLife(drinkHalfLife) {
        return Math.round(6.66 * drinkHalfLife)
    }

    function calculateAlcoholGrams(drinkSize, drinkStrength) {
        let alcoholGrams = drinkStrength * (1e3 * drinkSize) * .789
        return alcoholGrams
    }

    function getDrinkFullyAbsorbedTimeAsDateObject(timeConsumed, drinkFullLife) {
        let drinkFullyAbsorbedTimeAsDateObject = setDateObjectSecondsAndMillisecondsToZero(new Date(new Date(timeConsumed).getTime() + 6e4 * drinkFullLife))
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
                    <Text style={styles.currentBACText}>Current BAC: <Text style={styles.redBoldText}>{Number(BAC).toFixed(2)}%</Text></Text>
                </View>
                :
                <Text>Loading...</Text>
            :
            <View style={styles.centered}>
                <Text style={styles.currentBACText}>Current BAC: <Text style={styles.redBoldText}>0.00%</Text></Text>
            </View>
            }
        </View>  
    )
}

export default CurrentBAC