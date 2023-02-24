import React, {useState, useEffect} from 'react';
import { Text, View, Pressable } from 'react-native';
import * as StyleSheet from '../components/styles';
import Popup from "../components/AlcoholPopUp";
let styles = StyleSheet.styles;

// Import json data of alcohols
import data from '../json/alcoholtypes/alcohols.json';



const CommonAlcoholTypes = ({ navigation }) => {
    // we need to consolodate this to an object at a later point
    const [isOpenArray, setOpenArray] = useState([]);
    const [alcData, setAlcData] = useState();

    useEffect(() => {
        const initialState = [      
            {alcoholName: "Beer", isPopupOpen: false, index: 0},       
            {alcoholName: "Standard Wine", isPopupOpen: false, index: 1},       
            {alcoholName: "Champagne", isPopupOpen: false, index: 2},
            {alcoholName: "Hard Cider", isPopupOpen: false, index: 3},       
            {alcoholName: "Mead", isPopupOpen: false, index: 4},       
            {alcoholName: "Saké", isPopupOpen: false, index: 5},
            {alcoholName: "Gin", isPopupOpen: false, index: 6},
            {alcoholName: "Brandy", isPopupOpen: false, index: 7},
            {alcoholName: "Whiskey", isPopupOpen: false, index: 8},
            {alcoholName: "Rum", isPopupOpen: false, index: 9},
            {alcoholName: "Tequila", isPopupOpen: false, index: 10},
            {alcoholName: "Vodka", isPopupOpen: false, index: 11},
            {alcoholName: "Absinthe", isPopupOpen: false, index: 12},
            {alcoholName: "Everclear", isPopupOpen: false, index: 13}   
        ];
        setOpenArray(initialState);
    }, []);
    
    function getData (alcoholName) {
        // filter the data to match the alcohol name 
        let alcohol = data.filter(a => a.alcoholid === alcoholName);
        
        return alcohol;
    }

    function changePopup(alcoholName) {
        setAlcData(getData(alcoholName));
        let currentArray = isOpenArray.slice(); 
       
        
        for(let item in currentArray) {
            let alcohol = currentArray[item];
            if(alcohol.alcoholName === alcoholName) {
                currentArray[item].isPopupOpen = !alcohol.isPopupOpen;
                
                
            }
        }
        setOpenArray(currentArray);
    }
    
    function getValue (alcoholName) {
        for (let item in isOpenArray) {
            let alcohol = isOpenArray[item];
            if(alcohol.alcoholName === alcoholName) {
                return isOpenArray[item].isPopupOpen 
            }
        }
    }

    function callPopUp(alcoholName) {
        
        return (
            <View>
                <Popup isOpen={getValue(alcoholName)} 
                 onChangeModal={() => changePopup(alcoholName)} 
                 alcoholName={alcoholName}
                 data={alcData}/>
            </View>
       
        );
        
    }
    
    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>Alcohol Types</Text>
            <View style={styles.row}>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Beer"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Beer")}
                    <Text style={styles.alcoholTypesButtonText}>Beer</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Standard Wine"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Standard Wine")}
                    <Text style={styles.alcoholTypesButtonText}>Standard Wine</Text>
                </Pressable>
                <Pressable
                     style={styles.alcoholTypesButton}
                     onPress={() => {changePopup("Champagne"); // toggles isOpen 
                     }}
                     >
                     {callPopUp("Champagne")}
                    <Text style={styles.alcoholTypesButtonText}>Champagne</Text>
                </Pressable>
                <Pressable
                     style={styles.alcoholTypesButton}
                     onPress={() => {changePopup("Hard Cider"); // toggles isOpen 
                     }}
                     >
                     {callPopUp("Hard Cider")}
                     <Text style={styles.alcoholTypesButtonText}>Hard Cider</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Mead"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Mead")}
                    <Text style={styles.alcoholTypesButtonText}>Mead</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Saké"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Saké")}
                    <Text style={styles.alcoholTypesButtonText}>Saké</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Gin"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Gin")}
                    <Text style={styles.alcoholTypesButtonText}>Gin</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Brandy"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Brandy")}
                    <Text style={styles.alcoholTypesButtonText}>Brandy</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Whiskey"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Whiskey")}
                    <Text style={styles.alcoholTypesButtonText}>Whiskey</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Rum"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Rum")}
                    <Text style={styles.alcoholTypesButtonText}>Rum</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Tequila"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Tequila")}
                    <Text style={styles.alcoholTypesButtonText}>Tequila</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Vodka"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Vodka")}
                    <Text style={styles.alcoholTypesButtonText}>Vodka</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Absinthe"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Absinthe")}
                    <Text style={styles.alcoholTypesButtonText}>Absinthe</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup("Everclear"); // toggles isOpen 
                    }}
                    >
                    {callPopUp("Everclear")}
                    <Text style={styles.alcoholTypesButtonText}>Everclear</Text>
                </Pressable>
            </View>
        </View>
    );
    
};

export default CommonAlcoholTypes