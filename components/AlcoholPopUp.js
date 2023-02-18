import React, {useState} from 'react';
import {Button, View, Text } from 'react-native';
import * as StyleSheet from './styles';
import Modal from "react-native-modal";

let styles = StyleSheet.styles;

function Popup()
{
    const [isOpen, setIsOpen] = useState(true);

    function onChangeModal() {
        setIsOpen(!isOpen);
    }

    return(
    //import json file based on popup name 
    <View >
        <Modal isVisible={isOpen}>
            <View>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={onChangeModal} />
            </View>
        </Modal>
    </View>
   
    );
}

export default Popup;