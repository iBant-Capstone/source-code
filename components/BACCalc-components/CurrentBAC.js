import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

// Import styles
import { containerStyles } from '../styles/containerStyles';
import { textStyles } from '../styles/textStyles';

const CurrentBAC = ({ BAC, setBAC, drinks, personalDetails }) => {

    let [drinksConsumed, setDrinksConsumed] = useState([])
    let [fullPersonalDetails, setFullPersonalDetails] = useState({})

    // Keeps track of if the drinksConsumed and personalDetails states are both fleshed out with additional info
    let [drinksPDState, setDrinksPDState] = useState(false)

    useEffect(() => {
        async function addToAsyncDataWrapped() {
            await addToAsyncData();
            setDrinksPDState(true)
        }
        addToAsyncDataWrapped()
    }, [])

    // Waits until both the personalDetails and drinksConsumed states are fully set before calculating the BAC
    useEffect(() => {
        if (drinksPDState && JSON.stringify(drinks) !== "[]") {
            setBAC(calculateCurrentBAC())
        }
    }, [drinksPDState])

    async function addToAsyncData() {
        try {
            // ___ DRINKS CONSUMED ___
            const fleshedOutDrinksList = drinks.map((drink) => {
                // change from floz to ml if needed 
                if (drink.size.unit == 'oz') {
                    drink.size = {
                        unit: 'ml',
                        value: drink.size.value * 29.5735296
                    }
                }
                return ({
                    ...drink,
                    drinkFullLife: getDrinkFullLife(drink.halfLife), // TODO evaluate if we need this drinkFullLife if we don't actually touch it
                    drinkAlcoholGrams: calculateAlcoholGrams(drink.size.value, drink.strength),
                    drinkFullyAbsorbedTimeAsDateObject: getDrinkFullyAbsorbedTimeAsDateObject(drink.timeOfDrink, getDrinkFullLife(drink.halfLife)),
                    drinkUnits: 1, // only one drink, TODO try and remove this being needed later
                })
            })
            setDrinksConsumed(fleshedOutDrinksList)

            // ___ PERSONAL DETAILS ___
            // get the right measures for caluclating the widmark factor
            let heightInMeters = personalDetails.height.unit === "cm" ? personalDetails.height.value / 100 : personalDetails.height.value * 0.0254
            let weightInKilograms = calculateWeightKilograms(personalDetails.weight.unit, personalDetails.weight.value)
            let widmarkFactor = 0

            // Calculate the widmark factor based off of sex
            if (personalDetails.sex == 'female') {
                widmarkFactor = calculateWidmarkFactorFemale(heightInMeters, weightInKilograms)
            } else {
                widmarkFactor = calculateWidmarkFactorMale(heightInMeters, weightInKilograms)
            }
            const fleshedOutPersonalDetails = {
                ...personalDetails,
                widmarkFactor: widmarkFactor
            }
            setFullPersonalDetails(fleshedOutPersonalDetails)
        } catch (err) {
            console.log(err)
        }
    }

    // initializes calculating the BAC
    function calculateCurrentBAC() {
        let currentBAC = calculateBAC(setDateObjectSecondsAndMillisecondsToZero(new Date))
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
        let weightInKilograms = calculateWeightKilograms(fullPersonalDetails.weight.unit, fullPersonalDetails.weight.value)
        return (
            (percentAlcoholAbsorbedByMinute - percentAlcoholAbsorbedByMinute2) * drinkAlcoholGrams / (fullPersonalDetails.widmarkFactor * weightInKilograms * 1e3) * 100
        )
    }

    function calculateWeightKilograms(units, value) {
        return "kg" === units ? value : value * 0.45359237

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

    function getTimeOfFirstDrinkAsDateObject() { 
        const firstDrink = drinksConsumed[0]
        const timeOfFirstDrink = firstDrink.timeOfDrink
        return timeOfFirstDrink
    }

    // _____ FUNCTIONS TO HELP CALCULATE EITHER fullPersonalDetails or drinksConsumed 

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

    function calculateWidmarkFactorMale(heightInMeters, weightInKilograms) {
        return .62544 + .13664 * heightInMeters - weightInKilograms * (.00189 + .002425 / (heightInMeters * heightInMeters)) + 1 / (weightInKilograms * (.57986 + 2.54 * heightInMeters - .02255 * 30))
    }

    return (
        <View style={[containerStyles.centerContainer, {paddingTop: 48, paddingBottom: 40}]}>
            <Text style={textStyles.currentBACText}>CURRENT BAC</Text>
            <Text style={[textStyles.redSemiBoldText, textStyles.currentBACNumber]}>{Number(BAC).toFixed(2)}%</Text>
        </View>
    )
}

export default CurrentBAC