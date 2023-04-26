import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Modal from "react-native-modal";

// Import styles
import { buttonStyles } from './styles/buttonStyles';
import { textStyles } from './styles/textStyles';
import { popupStyles } from './styles/popupStyles';

const Popup = (props) => {
    let data = undefined;
    if (props.data != undefined) {
        data = props.data[0];
    }
    // let icon = data.icon;
    return (
        <Modal isVisible={props.isOpen} style={popupStyles.modal}>
            <View style={popupStyles.content} >
                {/* TO DO: figure out how to access data icon */}
                {/* {data && <Image style={{height: 40, width: 40, marginLeft: 16}} source={require('../assets/alcohol-icons/' + data.icon)} />} */}                
                {data && <Text style={popupStyles.title}>{data.alcoholid}</Text>}
                <br />
                {data && <Text style={popupStyles.text}>{data.description}</Text>}
                <br />
                {data && <Text style={popupStyles.text}><strong>Alcohol By Volume (ABV): </strong>{data.abv}</Text>}
                <br />
                {data && <Text style={popupStyles.text}><strong>Did you know? </strong>{data.funFact}</Text>}
                <br />
                {/* {data && <Text style={popupStyles.text}><em>{data.tags}</em></Text>}
                <br /> */}
                <Pressable style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]} onPress={props.onChangeModal}>
                    <Text style={textStyles.whiteSemiBoldText}><em>Close</em></Text>
                </Pressable>
            </View>
        </Modal>
    );
}

export default Popup;