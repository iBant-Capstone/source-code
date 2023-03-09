import React, {useState, useEffect} from 'react';
import { Text, View, Pressable } from 'react-native';
import * as StyleSheet from '../components/styles';
import Popup from "../components/AlcoholPopUp";
let styles = StyleSheet.styles;

// Import json data of alcohols
import data from '../json/alcoholtypes/alcohols.json';

const CommonAlcoholTypes = ({ navigation }) => {
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
    
    
    return(
        <View style={styles.centered}>
            {/* <Text style={styles.Text}>Alcohol Types</Text> */}
            <View style={styles.row}>
                {PressableArrays}
            </View>
        </View>
    );
    
};

export default CommonAlcoholTypes