import React from 'react';
import { Text, View, Pressable, TextInput} from 'react-native';
import * as StyleSheet from '../components/styles';
import { Image } from 'react-native';
import { Table, Row, TableWrapper, Cell } from 'react-native-table-component'
import Icon from 'react-native-ionicons';

let styles = StyleSheet.styles;

const Profile = (props) => {
    const [height, onChangeHeight] = React.useState('Input your Height');
    const [weight, onChangeWeight] = React.useState('Input your Weight');

    return (
        <View>
            <View style={styles.row}>
                <Image style={styles.rosieLeftImage} source={require('../assets/avatars/Curious_Rosie_shadow.png')} resizeMode='contain' />
                <Text style={styles.rosieSpeechRight}>Edit your profile information or learn more about BACtracker!</Text>
            </View>

            <View style={styles.aboutButton} >
                <Table>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                        <Cell data={"Height: "} width={100} textStyle={styles.mainRedButtonText} />
                        <TextInput style={styles.input} value={height + "cm"} keyboardType="numeric"/>
                        <Cell data={<Pressable style={styles.profileEditButton}><Text style={styles.profileEditButtonText}>Edit</Text></Pressable>} />
                    </TableWrapper>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                        <Cell data={"Weight: "} width={100} textStyle={styles.mainRedButtonText} />
                        <TextInput style={styles.input} onChangeText={onChangeWeight} value={weight + " kg"} keyboardType="numeric"/>
                        <Cell data={<Pressable style={styles.profileEditButton} ><Text style={styles.profileEditButtonText}>Edit</Text></Pressable>} />
                    </TableWrapper>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                        <Cell data={"Sex: "} width={100} textStyle={styles.mainRedButtonText} />
                        <Cell data={"Insert data here"} width={100} textStyle={styles.mainRedButtonText} />
                        <Cell data={<Pressable style={styles.profileEditButton}><Text style={styles.profileEditButtonText}>Edit</Text></Pressable>} />
                    </TableWrapper>
                </Table>
            </View>
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