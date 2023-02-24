import React, {useState} from 'react';
import {Button, View, Text } from 'react-native';
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
     
    <View>
        <Modal isVisible={props.isOpen} style={styles.modal}>
            <View>
            {data && <Text style={styles.commonAlcTypeTitle}>{data.alcoholid}</Text>}
            <br/>
            {data && <Text style={styles.title}>{data.description}</Text>}
            <br/>
            {data && <Text style={styles.title}><b>ABV: </b>{data.abv}</Text>}
            <br/>
            {data && <Text style={styles.title}><b>Did you know? </b>{data.funFact}</Text>}
            <br/>
            {data && <Text style={styles.title}><em>{data.tags}</em></Text>}
            <Button title="Close" onPress={props.onChangeModal} />
            </View>
        </Modal>
    </View>
   
    );
}

export default Popup;