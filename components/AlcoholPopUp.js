import React, {useState} from 'react';
import {Button, View, Text } from 'react-native';
import * as StyleSheet from './styles';
import Modal from "react-native-modal";

let styles = StyleSheet.styles;

function Popup(props)
{

    
    return(
    //import json file based on popup name 
    <View>
        <Modal isVisible={props.isOpen} style={styles.modal}>
            <View>
            <Text>{"Hello, this is information about " + props.alcoholName + "!"}    </Text>
            <Button title="Close" onPress={props.onChangeModal} />
            </View>
        </Modal>
    </View>
   
    );
}

export default Popup;