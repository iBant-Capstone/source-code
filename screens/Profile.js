import { Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as StyleSheet from '../components/styles';
import { Image } from 'react-native';
import { Table, Row, TableWrapper, Cell } from 'react-native-table-component'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'

let styles = StyleSheet.styles;

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
                    console.log("1" + personalDetailsAsync)
        
                    // Get the parsed version of the personal details (or empy object if we don't have any personal details saved)
                    let personalDetailsParsed = personalDetailsAsync ? JSON.parse(personalDetailsAsync) : emptyPD;
                    console.log("2" + JSON.stringify(personalDetailsParsed))

                    // Set our state personalDetails
                    setPersonalDetails(personalDetailsParsed)
                    setHasFocused(true)

                    console.log("3" + JSON.stringify(personalDetails))

                    } catch (error) {
                    console.log(error);
                }
            }
            getPersonalDetails();
        }, [])
    );

    return (
        <View>
            <View style={styles.row}>
                <Image style={styles.rosieLeftImage} source={require('../assets/avatars/Curious_Rosie_shadow.png')} resizeMode='contain' />
                <Text style={styles.rosieSpeechRight}>Edit your profile information or learn more about BACtracker!</Text>
            </View>

            {/* Waits for the personaldetails to have been gathered and set before we show the profile section */}
            {hasFocused ?
                <View style={styles.aboutButton} >
                    <Table>
                        <TableWrapper style={{ flexDirection: 'row' }}>
                            <Cell data={"Height: "} width={100} textStyle={styles.mainRedButtonText} />
                            {/* Different displays based off of cm and in */}
                            {personalDetails["height"]["unit"] === 'cm' ?
                                <Cell data={personalDetails["height"]["value"] + " cm"} width={100} textStyle={styles.mainRedButtonText} />
                                :
                                <Cell data={Math.floor((Number(personalDetails["height"]["value"]) / 12)) + " ft  " + personalDetails["height"]["value"] % 12 + " in"} width={100} textStyle={styles.mainRedButtonText} />
                            }
                        </TableWrapper>
                        <TableWrapper style={{ flexDirection: 'row' }}>
                            <Cell data={"Weight: "} width={100} textStyle={styles.mainRedButtonText} />
                            <Cell data={personalDetails["weight"]["value"] + " " + personalDetails["weight"]["unit"]} width={100} textStyle={styles.mainRedButtonText} />
                            <Cell data={<Pressable style={styles.profileEditButton} onPress={() => props.navigation.navigate('EditProfilePage')} ><Text style={styles.profileEditButtonText}>Edit</Text></Pressable>} />
                        </TableWrapper>
                        <TableWrapper style={{ flexDirection: 'row' }}>
                            <Cell data={"Sex: "} width={100} textStyle={styles.mainRedButtonText} />
                            <Cell data={personalDetails["sex"]} width={100} textStyle={styles.mainRedButtonText} />
                        </TableWrapper>
                    </Table>
                </View>
                :
                <View><Text>Loading...</Text></View>
            }

            <View style={styles.centered}>
                <Pressable
                    style={styles.aboutButton}
                    onPress={() => props.navigation.navigate('HowToUse')}
                >
                    <Text style={styles.mainRedButtonText}>How to Use</Text>
                </Pressable>
                <Pressable
                    style={styles.aboutButton}
                    onPress={() => props.navigation.navigate('OurMission')}
                >
                    <Text style={styles.mainRedButtonText}>Our Mission</Text>
                </Pressable>
                <Pressable
                    style={styles.aboutButton}
                    onPress={() => props.navigation.navigate('OurSources')}
                >
                    <Text style={styles.mainRedButtonText}>Our Sources</Text>
                </Pressable>
            </View>
        </View>
    );
};



export default Profile