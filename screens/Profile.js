import { Text, View, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { Table, TableWrapper, Cell } from 'react-native-table-component'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

// Import styles
import { styles } from '../components/styles';
import TitleText from '../components/Title';
import { containerStyles } from '../components/styles/containerStyles';
import { buttonStyles } from '../components/styles/buttonStyles';
import { imageStyles } from '../components/styles/imageStyles';


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
        <View>
            <View style={styles.titleContainer}>
                <TitleText name={"Profile"} />
                <Image style={imageStyles.rightImage} source={require('../assets/avatars/Curious_Rosie.png')} resizeMode='contain' />
            </View>

            {/* Waits for the personaldetails to have been gathered and set before we show the profile section */}
            {hasFocused ?
                <View style={containerStyles.centerContainer}>
                    <Text style={{ marginBottom: 15 }}>Edit your profile information or learn more about BACtracker!</Text>
                    <View style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton, buttonStyles.largeButton]} >
                        <Table>
                            <TableWrapper style={{ flexDirection: 'row' }}>
                                <Cell data={"Height: "} width={100} textStyle={styles.mainRedButtonText} />
                                {/* Different displays based on if personal details are empty, the units are cm, or units are ft*/}
                                {personalDetails["height"]["unit"] === '' ?
                                    <Cell data={"empty"} width={100} textStyle={styles.mainRedButtonText} />
                                    :
                                    (
                                        personalDetails["height"]["unit"] === 'cm' ?
                                            <Cell data={personalDetails["height"]["value"] + " cm"} width={100} textStyle={styles.mainRedButtonText} />
                                            :
                                            <Cell data={Math.floor((Number(personalDetails["height"]["value"]) / 12)) + " ft  " + personalDetails["height"]["value"] % 12 + " in"} width={100} textStyle={styles.mainRedButtonText} />
                                    )
                                }
                            </TableWrapper>
                            <TableWrapper style={{ flexDirection: 'row' }}>
                                <Cell data={"Weight: "} width={100} textStyle={styles.mainRedButtonText} />
                                {/* Different displays based on if personal details are empty or not */}
                                {personalDetails["weight"]["value"] === '' ?
                                    <Cell data={"empty"} width={100} textStyle={styles.mainRedButtonText} />
                                    :
                                    <Cell data={personalDetails["weight"]["value"] + " " + personalDetails["weight"]["unit"]} width={100} textStyle={styles.mainRedButtonText} />
                                }
                                <Cell data={<Pressable style={[buttonStyles.defaultButton, buttonStyles.alignCenter, buttonStyles.whiteButton, buttonStyles.mediumRightButton]} width={100} onPress={() => props.navigation.navigate('EditProfilePage')} ><Text style={styles.profileEditButtonText}>Edit</Text></Pressable>} />
                            </TableWrapper>
                            <TableWrapper style={{ flexDirection: 'row' }}>
                                <Cell data={"Biological Sex: "} width={100} textStyle={styles.mainRedButtonText} />
                                {/* Different displays based on if personal details are empty or not */}
                                {personalDetails["sex"] === '' ?
                                    <Cell data={"empty"} width={100} textStyle={styles.mainRedButtonText} />
                                    :
                                    <Cell data={personalDetails["sex"]} width={100} textStyle={styles.mainRedButtonText} />
                                }
                            </TableWrapper>
                        </Table>
                    </View>
                </View>
                :
                <View><Text>Loading...</Text></View>
            }

            <View style={containerStyles.centerContainer}>
                <Pressable
                    style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton, buttonStyles.largeButton]}
                    onPress={() => props.navigation.navigate('HowToUse')}
                >
                    <Text style={styles.mainRedButtonText}>How to Use</Text>
                </Pressable>
                <Pressable
                    style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton, buttonStyles.largeButton]}
                    onPress={() => props.navigation.navigate('OurMission')}
                >
                    <Text style={styles.mainRedButtonText}>Our Mission</Text>
                </Pressable>
                <Pressable
                    style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton, buttonStyles.largeButton]}
                    onPress={() => props.navigation.navigate('OurSources')}
                >
                    <Text style={styles.mainRedButtonText}>Our Sources</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Profile