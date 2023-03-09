<<<<<<< HEAD
import React, {useState} from 'react';
import {Pressable, View, Text, Image } from 'react-native';
import * as StyleSheet from './styles';
=======
import React from 'react';
import { Pressable, View, Text } from 'react-native';
>>>>>>> 2fb00dbbcb36f53d15d7b9f18c20a18874aed277
import Modal from "react-native-modal";

// Import styles
import * as StyleSheet from './styles';
let styles = StyleSheet.styles;

const Popup = (props) => {
    let data = undefined;
    if (props.data != undefined) {
        data = props.data[0];
<<<<<<< HEAD
   }
   console.log(styles.popupIcon)
   return(
        <Modal isVisible={props.isOpen} style={styles.modal}>
            <View style={styles.modalContent} >
               
                    <Image style={styles.popupIcon} source={require('../assets/icons/BACtracker_logo.png')} resizeMode='contain' />
                    {data && <Text style={styles.commonAlcTypeTitle}>{data.alcoholid}</Text>}
               
                <br/>
=======
    }
    return (
        <Modal isVisible={props.isOpen} style={styles.modal}>
            <View style={styles.modalContent} >
                {data && <Text style={styles.commonAlcTypeTitle}>{data.alcoholid}</Text>}
                <br />
>>>>>>> 2fb00dbbcb36f53d15d7b9f18c20a18874aed277
                {data && <Text style={styles.title}>{data.description}</Text>}
                <br />
                {data && <Text style={styles.title}><strong>Alcohol By Volume (ABV): </strong>{data.abv}</Text>}
                <br />
                {data && <Text style={styles.title}><strong>Did you know? </strong>{data.funFact}</Text>}
                <br />
                {data && <Text style={styles.title}><em>{data.tags}</em></Text>}
                <br />
                <Pressable style={[styles.leftRedButton, styles.centered]} onPress={props.onChangeModal}>
                    <Text style={styles.mainRedButtonText}><em>Close</em></Text>
                </Pressable>
            </View>
        </Modal>
    );
}

export default Popup;