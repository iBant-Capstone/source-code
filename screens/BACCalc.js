import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import components
import CalcDrinkCards from '../components/BACCalc-components/CalcDrinkCards';
import CurrentBAC from '../components/BACCalc-components/CurrentBAC';
import InsideOut from '../components/BACCalc-components/InsideOut';
import BACDetails from '../components/BACCalc-components/BACDetails'
import AddDrinkButton from '../components/BACCalc-components/AddDrinkButton';
import ClearDrinksButton from '../components/BACCalc-components/ClearDrinksButton';
import GetHomeSafelySection from '../components/BACCalc-components/GetHomeSafelySection';
import PersonalDetailsIncorrect from '../components/BACCalc-components/PersonalDetailsIncorrect';
import BACHowToPopUp from '../components/BACHowToPopUp';

// Import styles
import { containerStyles } from '../components/styles/containerStyles';
import { textStyles } from '../components/styles/textStyles';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const BACCalc = ({ navigation, route }) => {

    const [drinks, setDrinks] = useState(route && route.drinks ? route.drinks : null)
    const [personalDetails, setPersonalDetails] = useState(route && route.personalDetails ? route.personalDetails : null)

    const [BAC, setBAC] = useState(null)
    const [onInside, setOnInside] = useState(true)

    const [drinksReady, changeDrinksReady] = useState(false)
    const [pdReady, changePDReady] = useState(false)

    const handleSetBAC = useCallback((newBAC) => {
        setBAC(newBAC)
    }, [])

    const handleSetOnInside = useCallback((state) => {
        setOnInside(state)
    })

    const handleChangeDrinksReady = useCallback((state) => {
        changeDrinksReady(state)
    })

    const [modalVisible, setModalVisible] = useState(false); // setting states for BACHowToPopUp
    function handleModal() {
        setModalVisible(!modalVisible);
    }

    // When the route changes we reset the states that determine whether or not we render components
    useEffect(() => {
        changeDrinksReady(false)
        changePDReady(false)
    }, [route])

    // useEffects update the drinks or personal details state if needed
    useEffect(() => {
        if (!drinksReady) {
            const getAsyncDrinks = async () => {
                try {
                    const asyncStorageData = await AsyncStorage.getItem("drinks")
                    const asyncStorageParsed = asyncStorageData !== null ? JSON.parse(asyncStorageData) : []
                    setDrinks(asyncStorageParsed)
                } catch (err) {
                    console.log(err)
                }
            }
            getAsyncDrinks()
        }
    }, [drinksReady])

    useEffect(() => {
        if (!pdReady) {
            const getAsyncPersonalDetails = async () => {
                try {
                    const asyncStorageData = await AsyncStorage.getItem("personalDetails")
                    const asyncStorageParsed = asyncStorageData !== null ? JSON.parse(asyncStorageData) : []
                    setPersonalDetails(asyncStorageParsed)
                } catch (err) {
                    console.log(err)
                }
            }
            getAsyncPersonalDetails()
        }
    }, [pdReady])


    // useEffects check that both drinks and personal details have been loaded from async storage correctly
    useEffect(() => {
        if (drinks !== null) {
            changeDrinksReady(true)
        }
    }, [drinks])

    useEffect(() => {
        // console.log("1. personalDetails", personalDetails)
        if (personalDetails !== null) {
            // console.log("2. personalDetails", personalDetails)
            // check if the personal details have been inputted in by the user
            if (personalDetails.height.value != 0 & personalDetails.weight.value != 0 & personalDetails.sex != '') {
                // console.log("3. personalDetails", personalDetails)
                changePDReady(true)
            }
        }
    }, [personalDetails])

    if (drinksReady && pdReady) {
        return (
            <ScrollView>
                <View style={containerStyles.fillToBottomContainer}>
                    <View style={[containerStyles.reverseRow, { height: 36, padding: 16, paddingBottom: 0 }]}>
                        <Pressable onPress={handleModal}>
                            <Ionicons name={"help-circle-outline"} size={40} color={"black"} />
                        </Pressable>
                        <BACHowToPopUp modalVisible={modalVisible}
                            handleModal={handleModal} />
                    </View>
                    <CurrentBAC setBAC={handleSetBAC} BAC={BAC} drinks={drinks} personalDetails={personalDetails} />
                    {/* <InsideOut onInside={onInside} setOnInside={handleSetOnInside} BAC={BAC} /> */}
                    <BACDetails BAC={BAC} />
                    <View style={[containerStyles.centerWhiteContainer, containerStyles.redContainer]}>
                        <AddDrinkButton navigation={navigation} drinks={drinks} />
                        <CalcDrinkCards drinks={drinks} setBAC={handleSetBAC} changeDrinksReady={handleChangeDrinksReady} />
                        {/* <ClearDrinksButton setBAC={handleSetBAC} changeDrinksReady={handleChangeDrinksReady} /> */}
                        <GetHomeSafelySection BAC={BAC} />
                    </View>
                </View>
            </ScrollView >
        );
    } else if (drinksReady && !pdReady) {
        return (<PersonalDetailsIncorrect navigation={navigation} />)
    } else {
        return (
            <View>
                <Text style={textStyles.text}>Loading</Text>
            </View>
        )
    }
}

export default BACCalc
