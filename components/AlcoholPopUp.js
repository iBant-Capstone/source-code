import React, {useState} from 'react';
import {Pressable, View, Text } from 'react-native';
import * as StyleSheet from './styles';
import Modal from "react-native-modal";

let styles = StyleSheet.styles;



const Popup = (props) =>
{
   
   let data = undefined;
   if(props.data != undefined) {
        data = props.data[0];
   }
   return(
     
    <View style={styles.modal}>
        <Modal isVisible={props.isOpen} style={styles.modal}>
            <View style={styles.modalContent} >
                {data && <Text style={styles.commonAlcTypeTitle}>{data.alcoholid}</Text>}
                <br/>
                {data && <Text style={styles.title}>{data.description}</Text>}
                <br/>
                {data && <Text style={styles.title}><b>ABV: </b>{data.abv}</Text>}
                <br/>
                {data && <Text style={styles.title}><b>Did you know? </b>{data.funFact}</Text>}
                <br/>
                {data && <Text style={styles.title}><em>{data.tags}</em></Text>}
                <br/>
                <Pressable style={[styles.mainRedButton,styles.centered]} onPress={props.onChangeModal}> 
                    <Text style={styles.mainRedButtonText}><em>Close</em></Text>
                </Pressable>
            </View>
        </Modal>
    </View>
   
    );
}

export default Popup;