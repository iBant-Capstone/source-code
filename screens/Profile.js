import { Text, View, Pressable, Image, ScrollView, ImageBackground } from "react-native";
import React, { useState } from 'react';
import { Table, TableWrapper, Cell } from 'react-native-table-component'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

// Import styles
import TitleText from '../components/Title';
import { containerStyles } from '../components/styles/containerStyles';
import { buttonStyles } from '../components/styles/buttonStyles';
import { imageStyles } from '../components/styles/imageStyles';
import { textStyles } from '../components/styles/textStyles';

const Profile = (props) => {

    const [personalDetails, setPersonalDetails] = useState({})
    const [hasFocused, setHasFocused] = useState(false);

    // Get the personal details from async storage
    useFocusEffect(
        React.useCallback(() => {
            async function getPersonalDetails() {

                //Define an empty personal details object
                let emptyPD = {
                    height: {
                        unit: '',
                        value: ''
                    },
                    weight: {
                        unit: '',
                        value: ''
                    },
                    sex: ''
                }

                try {
                    // Get the personalDetials from  async storage
                    const personalDetailsAsync = await AsyncStorage.getItem('personalDetails');

                    // Get the parsed version of the personal details (or empy object if we don't have any personal details saved)
                    let personalDetailsParsed = personalDetailsAsync ? JSON.parse(personalDetailsAsync) : emptyPD;

                    // Set our state personalDetails
                    setPersonalDetails(personalDetailsParsed)
                    setHasFocused(true)

                } catch (error) {
                    console.log(error);
                }
            }
            getPersonalDetails();
        }, [])
    );

    return (
      <View style={containerStyles.phoneScreen}>

        <ScrollView style={{ minWidth: "100%" }}>

        <ImageBackground
          source={require("../assets/images/Frame.png")}
          style={imageStyles.backgroundHeading}
          resizeMode="cover"
        >
          <View style={[containerStyles.row]}>
            <TitleText name={"Profile"} />
            <Image
              style={imageStyles.rightImage}
              source={require("../assets/avatars/Curious_Rosie.png")}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>

        {/* Waits for the personaldetails to have been gathered and set before we show the profile section */}
        {hasFocused ? (
          <View style={containerStyles.centerContainer}>
            <View
              style={[
                buttonStyles.alignCenter,
                buttonStyles.redButton,
                buttonStyles.defaultButton,
                buttonStyles.largeButton,
                { marginTop: 32 },
              ]}
            >
              <Table>
                <TableWrapper style={{ flexDirection: "row" }}>
                  <Cell
                    data={"Height: "}
                    width={100}
                    textStyle={textStyles.whiteSemiBoldText}
                  />
                  {/* Different displays based on if personal details are empty, the units are cm, or units are ft*/}
                  {personalDetails["height"]["unit"] === "" ? (
                    <Cell
                      data={"empty"}
                      width={100}
                      textStyle={textStyles.whiteSemiBoldText}
                    />
                  ) : personalDetails["height"]["unit"] === "cm" ? (
                    <Cell
                      data={personalDetails["height"]["value"] + " cm"}
                      width={100}
                      textStyle={textStyles.whiteSemiBoldText}
                    />
                  ) : (
                    <Cell
                      data={
                        Math.floor(
                          Number(personalDetails["height"]["value"]) / 12
                        ) +
                        " ft  " +
                        (personalDetails["height"]["value"] % 12) +
                        " in"
                      }
                      width={100}
                      textStyle={textStyles.whiteSemiBoldText}
                    />
                  )}
                </TableWrapper>
                <TableWrapper style={{ flexDirection: "row" }}>
                  <Cell
                    data={"Weight: "}
                    width={100}
                    textStyle={textStyles.whiteSemiBoldText}
                  />
                  {/* Different displays based on if personal details are empty or not */}
                  {personalDetails["weight"]["value"] === "" ? (
                    <Cell
                      data={"empty"}
                      width={100}
                      textStyle={textStyles.whiteSemiBoldText}
                    />
                  ) : (
                    <Cell
                      data={
                        personalDetails["weight"]["value"] +
                        " " +
                        personalDetails["weight"]["unit"]
                      }
                      width={100}
                      textStyle={textStyles.whiteSemiBoldText}
                    />
                  )}
                  <Cell
                    data={
                      <Pressable
                        style={[
                          buttonStyles.defaultButton,
                          buttonStyles.alignCenter,
                          buttonStyles.whiteButton,
                          buttonStyles.mediumRightButton,
                        ]}
                        width={100}
                        onPress={() =>
                          props.navigation.navigate("EditProfilePage")
                        }
                      >
                        <Text style={textStyles.redSemiBoldText}>Edit</Text>
                      </Pressable>
                    }
                  />
                </TableWrapper>
                <TableWrapper style={{ flexDirection: "row" }}>
                  <Cell
                    data={"Biological Sex: "}
                    width={100}
                    textStyle={textStyles.whiteSemiBoldText}
                  />
                  {/* Different displays based on if personal details are empty or not */}
                  {personalDetails["sex"] === "" ? (
                    <Cell
                      data={"empty"}
                      width={100}
                      textStyle={textStyles.whiteSemiBoldText}
                    />
                  ) : (
                    <Cell
                      data={personalDetails["sex"]}
                      width={100}
                      textStyle={textStyles.whiteSemiBoldText}
                    />
                  )}
                </TableWrapper>
              </Table>
            </View>
          </View>
        ) : (
          <View>
            <Text style={textStyles.text}>Loading...</Text>
          </View>
        )}

        <View style={containerStyles.centerContainer}>
          <Pressable
            style={[
              buttonStyles.alignCenter,
              buttonStyles.redButton,
              buttonStyles.defaultButton,
              buttonStyles.largeButton,
            ]}
            onPress={() => props.navigation.navigate("HowToUse")}
          >
            <Text style={textStyles.whiteSemiBoldText}>How to Use</Text>
          </Pressable>
          <Pressable
            style={[
              buttonStyles.alignCenter,
              buttonStyles.redButton,
              buttonStyles.defaultButton,
              buttonStyles.largeButton,
            ]}
            onPress={() => props.navigation.navigate("OurMission")}
          >
            <Text style={textStyles.whiteSemiBoldText}>Our Mission</Text>
          </Pressable>
          <Pressable
            style={[
              buttonStyles.alignCenter,
              buttonStyles.redButton,
              buttonStyles.defaultButton,
              buttonStyles.largeButton,
            ]}
            onPress={() => props.navigation.navigate("OurSources")}
          >
            <Text style={textStyles.whiteSemiBoldText}>Our Sources</Text>
          </Pressable>
          <Pressable
            style={[
              buttonStyles.alignCenter,
              buttonStyles.redButton,
              buttonStyles.defaultButton,
              buttonStyles.largeButton,
            ]}
            onPress={() => props.navigation.navigate("Disclaimers")}
          >
            <Text style={textStyles.whiteSemiBoldText}>
              Notes and Disclaimers
            </Text>
          </Pressable>
        </View>
        </ScrollView>
      </View>
    );
};

export default Profile