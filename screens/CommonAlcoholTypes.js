import React, {useState, useEffect} from 'react';
import { Text, View, Pressable } from 'react-native';

// Import components
import Popup from "../components/AlcoholPopUp";
import TitleText from '../components/Title';

// Import styles
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;

// Import json data of alcohols
import data from '../json/alcoholtypes/alcohols.json';

const CommonAlcoholTypes = ({ navigation }) => {
    // Create states for different alcohol types
    const [isOpenArray, setOpenArray] = useState([]);
    const [alcData, setAlcData] = useState();

    useEffect(() => {
        let initialState = data.map(function(alcohol){
            return (
                {"alcoholName": alcohol.alcoholid, "isPopupOpen": false}
            );
        } );
        setOpenArray(initialState);
    }, []);
    
    // Get the data of given alcohol name
    function getData (alcoholName) {
        // filter the data to match the alcohol name 
        let alcohol = data.filter(a => a.alcoholid === alcoholName);
        return alcohol;
    }

    // Change popup open state of given alcohol type
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
    
    // Get whether the alcohol type is open or not
    function getValue (alcoholName) {
        for (let item in isOpenArray) {
            let alcohol = isOpenArray[item];
            if(alcohol.alcoholName === alcoholName) {
                return isOpenArray[item].isPopupOpen 
            }
        }
    }

    // Calls the popup for alcohol type given
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

    // Create alcohol type buttons
    let PressableArrays = data.map(function(alcohol){
            return (
                <Pressable key={alcohol.alcoholid}
                    style={styles.alcoholTypesButton}
                    onPress={() => {changePopup(alcohol.alcoholid); // toggles isOpen 
                    }}
                    >
                    {callPopUp(alcohol.alcoholid)}
                    <Text style={styles.alcoholTypesButtonText}>{alcohol.alcoholid}</Text>
                </Pressable>
            );
        } );
    
    // Page to return
    return(
        <View>
            <View style={styles.titleContainer}>
                <TitleText name={"Common Alcohol Types"}/>
            </View>
            <View style={[styles.row, styles.centered]}>
                {PressableArrays}
            </View>
        </View>
    );
    
};

export default CommonAlcoholTypes