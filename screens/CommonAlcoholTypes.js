import React, {useState} from 'react';
import { Text, View, Pressable } from 'react-native';
import * as StyleSheet from '../components/styles';
import Popup from "../components/AlcoholPopUp";
let styles = StyleSheet.styles;

const CommonAlcoholTypes = ({ navigation }) => {
    // we need to consolodate this to an object at a later point
    const [isBeerOpen, setIsBeerOpen] = useState(false);
    function onChangeBeerModal() {setIsBeerOpen(!isBeerOpen)};

    const [isWineOpen, setIsWineOpen] = useState(false);
    function onChangeWineModal() {setIsWineOpen(!isWineOpen)};

    const [isChampagneOpen, setIsChampagneOpen] = useState(false);
    function onChangeChampagneModal() {setIsChampagneOpen(!isChampagneOpen)};
    

    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>Alcohol Types</Text>
            <View style={styles.twoButtonRow}>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => setIsBeerOpen(true)}
                    >
                    <Popup isOpen={isBeerOpen} onChangeModal={onChangeBeerModal} alcoholName="Beer"/>
                    <Text style={styles.alcoholTypesButtonText}>Beer</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => setIsWineOpen(true)}
                    >
                    <Popup isOpen={isWineOpen} onChangeModal={onChangeWineModal} alcoholName="Wine"/>
                    <Text style={styles.alcoholTypesButtonText}>Wine</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => setIsChampagneOpen(true)}
                    >
                    <Popup isOpen={isChampagneOpen} onChangeModal={onChangeChampagneModal} alcoholName="Champagne"/>
                    <Text style={styles.alcoholTypesButtonText}>Champagne</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CommonAlcoholTypes