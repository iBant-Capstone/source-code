import * as React from 'react';
import {Button, View, Text } from 'react-native';
import * as StyleSheet from './styles';
import Modal from "react-native-modal";

let styles = StyleSheet.styles;

const Popup = ({}) => (
    //import json file based on popup name 
    <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
        <Text>Hello!</Text>
        <Button title="Hide modal" onPress={handleModal} />
        </View>
    </Modal>
);

export default Popup;