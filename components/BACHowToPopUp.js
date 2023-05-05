import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Modal from "react-native-modal";

// Import styles
import { buttonStyles } from './styles/buttonStyles';
import { textStyles } from './styles/textStyles';
import { BACPopupStyles } from './styles/BACPopupStyles';
import { containerStyles } from './styles/containerStyles';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const BACHowToPopUp = (props) => {
    return (
        <Modal isVisible={props.modalVisible} style={[BACPopupStyles.modal, containerStyles.phoneScreen]}>
            <View style={BACPopupStyles.content} >
                <Pressable style={buttonStyles.alignRight} onPress={props.handleModal}>
                    <Ionicons name={"close"} size={30} color={"gray"} />
                </Pressable>
                <Text style={[textStyles.redSemiBoldText, BACPopupStyles.title]}><strong>What is this page about?</strong></Text>
                <br />
                <Text style={[textStyles.redSemiBoldText, BACPopupStyles.text]}><strong>What does BAC mean? </strong></Text>
                <Text style={BACPopupStyles.text}>BAC stands for <strong>Blood Alcohol Concentration</strong> and refers to the percent of alcohol (ethyl alcohol or ethanol) in a person's blood stream.</Text>
                <br />
                <Text style={[textStyles.redSemiBoldText, BACPopupStyles.text]}><strong>How can I use this BAC Calculator? </strong></Text>
                <Text style={BACPopupStyles.text}>You can press the <strong>Add drinks button</strong> to experiment with adding drinks of different types, strengths, and sizes. You can choose from our pre-set options or input custom values!</Text>
                <Text style={BACPopupStyles.text}><strong>NOTE:</strong> your inputted time refers to when you consumed your drink <strong>relative to now</strong>, and your inputted hunger level refers to how hungry you were <strong>when you consumed the drink</strong>.</Text>
                <br />
                <Text style={[textStyles.redSemiBoldText, BACPopupStyles.text]}><strong>How do we calculate your BAC? </strong></Text>
                <Text style={BACPopupStyles.text}>We use an algorithm from drunkcalc.com that utilizes the <strong>Widmark Formula</strong> to calculate your BAC based on your added drinks and inputted body metrics (height, weight, and sex).</Text>
                <br />
            </View>
        </Modal>
    );
}

export default BACHowToPopUp;
