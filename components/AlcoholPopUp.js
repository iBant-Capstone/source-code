import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import Modal from "react-native-modal";

// Import styles
import { buttonStyles } from './styles/buttonStyles';
import { alcoholPopupStyles } from './styles/alcoholPopupStyles';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

import { containerStyles } from './styles/containerStyles';

const Popup = (props) => {
    let data = undefined;
    if (props.data != undefined) {
        data = props.data[0];
    }
    return (
        <Modal isVisible={props.isOpen} style={[alcoholPopupStyles.modal, containerStyles.phoneScreen]}>
            <View style={alcoholPopupStyles.content} >

                <Pressable style={buttonStyles.alignRight} onPress={props.onChangeModal}>
                    <Ionicons name={"close"} size={30} color={"gray"} />
                </Pressable>

                <View style={{display: "flex", flexDirection:"row", alignContent:'center', paddingBottom: 10}} >
                    {data && <Image style={{ height: 50, width: 50 }} source={require('../assets/alcohol-icons/' + data.icon)} />}
                    {data && <Text style={alcoholPopupStyles.title}>{data.alcoholid}</Text>}
                    <br />
                </View>

                {data && <Text style={alcoholPopupStyles.text}>{data.description}</Text>}
                <br />
                {data && <Text style={alcoholPopupStyles.text}><strong>Alcohol By Volume (ABV): </strong>{data.abv}</Text>}
                <br />
                {data && <Text style={alcoholPopupStyles.text}><strong>Did you know? </strong>{data.funFact}</Text>}
                <br />
            </View>
        </Modal>
    );
}

export default Popup;