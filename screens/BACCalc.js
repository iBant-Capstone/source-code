import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView, Pressable, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import components
import CalcDrinkCards from '../components/BACCalc-components/CalcDrinkCards';
import CurrentBAC from '../components/BACCalc-components/CurrentBAC';
import BACDetails from '../components/BACCalc-components/BACDetails'
import AddDrinkButton from '../components/BACCalc-components/AddDrinkButton';
import GetHomeSafelySection from '../components/BACCalc-components/GetHomeSafelySection';
import BACHowToPopUp from '../components/BACHowToPopUp';
import EmergencyContactButton from '../components/EmergencyContact_button';
import ContactList from '../components/BACCalc-components/ContactList';

// Import styles
import { containerStyles } from '../components/styles/containerStyles';
import { textStyles } from '../components/styles/textStyles';
import { imageStyles } from '../components/styles/imageStyles';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const BACCalc = ({ navigation, route }) => {

    const [drinks, setDrinks] = useState(route && route.drinks ? route.drinks : null)
    const [personalDetails, setPersonalDetails] = useState(route && route.personalDetails ? route.personalDetails : null)

    const [BAC, setBAC] = useState(null)

    const [drinksReady, changeDrinksReady] = useState(false)
    const [pdReady, changePDReady] = useState(false)


    const handleSetBAC = useCallback((newBAC) => {
        setBAC(newBAC)
    }, [])

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
        <ScrollView style={containerStyles.phoneScreen}>
          <View
            style={[
              containerStyles.fillToBottomContainer,
              containerStyles.phoneScreen,
            ]}
          >
            <ImageBackground
              source={require("../assets/images/Frame.png")}
              style={{ width: "375", height: "163" }}
              resizeMode="cover"
            >
              <View
                style={[
                  containerStyles.reverseRow,
                  { height: 36, padding: 16, paddingBottom: 0 },
                ]}
              >
                <Pressable onPress={handleModal}>
                  <Ionicons
                    name={"help-circle-outline"}
                    size={30}
                    color={"#9e9e9e"}
                  />
                </Pressable>
                <BACHowToPopUp
                  modalVisible={modalVisible}
                  handleModal={handleModal}
                />
              </View>
              <CurrentBAC
                setBAC={handleSetBAC}
                BAC={BAC}
                drinks={drinks}
                personalDetails={personalDetails}
              />
            </ImageBackground>
            <BACDetails BAC={BAC} />
            <View
              style={[
                containerStyles.centerWhiteContainer,
                containerStyles.redContainer,
              ]}
            >
              <AddDrinkButton navigation={navigation} drinks={drinks} />
              <CalcDrinkCards
                drinks={drinks}
                setBAC={handleSetBAC}
                changeDrinksReady={handleChangeDrinksReady}
              />
              <EmergencyContactButton onPress={() => navigation.navigate('ContactList')} />
              <GetHomeSafelySection BAC={BAC} />
            </View>
          </View>
        </ScrollView>
      );
    } else {
        return (
            <View style={containerStyles.phoneScreen}>
                <Text style={textStyles.text}>Loading</Text>
            </View>
        )
    }
}

export default BACCalc
