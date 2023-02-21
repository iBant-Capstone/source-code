import React, {useState} from 'react';
import { Text, View, Pressable } from 'react-native';
import * as StyleSheet from '../components/styles';
import Popup from "../components/AlcoholPopUp";
let styles = StyleSheet.styles;

const CommonAlcoholTypes = ({ navigation }) => {
    // we need to consolodate this to an object at a later point
    const [isOpenArray, setOpenArray] = useState([
        {alcoholName: "Beer", isPopupOpen: false, index: 0}, 
        {alcoholName: "Wine", isPopupOpen: false, index: 1}, 
        {alcoholName: "Champagne", isPopupOpen: false, index: 2}])


    function changePopup(alcoholName) {
        let currentArray = isOpenArray;
        //console.log(currentArray);
        
        for(let item in currentArray) {
            let alcohol = currentArray[item];
            if(alcohol.alcoholName === alcoholName) {
                currentArray[item].isPopupOpen = !alcohol.isPopupOpen;
                console.log("updated array" , currentArray)
                
            }
        }
        setOpenArray(currentArray);
        // console.log(index);
        // console.log(currentArray[index].isPopupOpen);
        // currentArray[index].isPopupOpen = !currentArray[index].isPopupOpen 
        // console.log(currentArray[index].isPopupOpen);        
    }
    
    function getValue (alcoholName) {
        isOpenArray.filter(alcohol => {if(alcohol.alcoholName === alcoholName) { return alcohol.isOpen;}})
    }


    // const [isBeerOpen, setIsBeerOpen] = useState(false);
    // function onChangeBeerModal() {setIsBeerOpen(!isBeerOpen)};

    // const [isWineOpen, setIsWineOpen] = useState(false);
    // function onChangeWineModal() {setIsWineOpen(!isWineOpen)};

    // const [isChampagneOpen, setIsChampagneOpen] = useState(false);
    // function onChangeChampagneModal() {setIsChampagneOpen(!isChampagneOpen)};
    

    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>Alcohol Types</Text>
            <View style={styles.twoButtonRow}>
                <Pressable
                    style={styles.alcoholTypesButton}
                    onPress={() => changePopup("Beer")}
                    >
                    <Popup isOpen={getValue("Beer")} onChangeModal={() => changePopup("Beer")} alcoholName="Beer"/> 
                    <Text style={styles.alcoholTypesButtonText}>Beer</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => setIsWineOpen(true)}
                    >
                    {/* <Popup isOpen={isWineOpen} onChangeModal={onChangeWineModal} alcoholName="Wine"/> */}
                    <Text style={styles.alcoholTypesButtonText}>Wine</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => setIsChampagneOpen(true)}
                    >
                    {/* <Popup isOpen={isChampagneOpen} onChangeModal={onChangeChampagneModal} alcoholName="Champagne"/> */}
                    <Text style={styles.alcoholTypesButtonText}>Champagne</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => props.navigation.navigate('')}
                    >
                    <Text style={styles.alcoholTypesButtonText}>Hard Cider</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => props.navigation.navigate('')}
                    >
                    <Text style={styles.alcoholTypesButtonText}>Mead</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => props.navigation.navigate('')}
                    >
                    <Text style={styles.alcoholTypesButtonText}>Saké</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CommonAlcoholTypes