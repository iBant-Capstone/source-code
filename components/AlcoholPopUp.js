import React, {useState} from 'react';
import {Pressable, View, Text, Image } from 'react-native';
import * as StyleSheet from './styles';
import Modal from "react-native-modal";

let styles = StyleSheet.styles;



const Popup = (props) =>
{
   
   let data = undefined;
   if(props.data != undefined) {
        data = props.data[0];
   }
   console.log(styles.popupIcon)
   return(
        <Modal isVisible={props.isOpen} style={styles.modal}>
            <View style={styles.modalContent} >
               
                    <Image style={styles.popupIcon} source={require('../assets/icons/BACtracker_logo.png')} resizeMode='contain' />
                    {data && <Text style={styles.commonAlcTypeTitle}>{data.alcoholid}</Text>}
               
                <br/>
                {data && <Text style={styles.title}>{data.description}</Text>}
                <br/>
                {data && <Text style={styles.title}><strong>Alcohol By Volume (ABV): </strong>{data.abv}</Text>}
                <br/>
                {data && <Text style={styles.title}><strong>Did you know? </strong>{data.funFact}</Text>}
                <br/>
                {data && <Text style={styles.title}><em>{data.tags}</em></Text>}
                <br/>
                <Pressable style={[styles.mainRedButton,styles.centered]} onPress={props.onChangeModal}> 
                    <Text style={styles.mainRedButtonText}><em>Close</em></Text>
                </Pressable>
            </View>
        </Modal>   
    );
}

export default Popup;