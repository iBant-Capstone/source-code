import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Modal from "react-native-modal";

// Import styles
import { buttonStyles } from './styles/buttonStyles';
import { textStyles } from './styles/textStyles';
import { popupStyles } from './styles/popupStyles';

const BACHowToPopUp = (props) => {
    return (
        <Modal isVisible={props.modalVisible} style={popupStyles.modal}> 
            <View style={popupStyles.content} >
                <Text style={[textStyles.redSemiBoldText, popupStyles.title]}><strong>What is this page about?</strong></Text>
                <br/>
                <Text style={[textStyles.redSemiBoldText, popupStyles.text]}><strong>What does BAC mean? </strong></Text>
                <Text style={popupStyles.text}>BAC stands for <strong>Blood Alcohol Concentration</strong> and refers to the percent of alcohol (ethyl alcohol or ethanol) in a person's blood stream.</Text>
                <br/>
                <Text style={[textStyles.redSemiBoldText, popupStyles.text]}><strong>How can I use this BAC Calculator? </strong></Text>
                <Text style={popupStyles.text}>You can press the <strong>Add drinks button</strong> to experiment with adding drinks of different types, strengths, and sizes. You can choose from our pre-set options or input custom values!</Text>
                <Text style={popupStyles.text}>Note that your inputted time refers to when you consumed your drink relative to now, and your inputted hunger level refers to how hungry you were when you consumed the drink.</Text>
                <br/>
                <Text style={[textStyles.redSemiBoldText, popupStyles.text]}><strong>How do we calculate your BAC? </strong></Text>
                <Text style={popupStyles.text}>We use an algorithm from drunkcalc.com that utilizes the Widmark Formula to calculate your BAC based on your added drinks and inputted body metrics (height, weight, and sex).</Text>
                <br/>
                {/* <Text style={[textStyles.redSemiBoldText, popupStyles.text]}><strong>Medical disclaimer: </strong></Text>
                <Text style={popupStyles.text}>These BAC calculations may not be completely accurate and can change over time. This app is not meant to substitute the advice of a licensed medical professional. <strong>Please use this resource with caution!</strong> </Text> */}

                <br/>
                <Pressable style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton]} onPress={props.handleModal}>
                    <Text style={textStyles.whiteSemiBoldText}><em>Close</em></Text>
                </Pressable>
            </View>
        </Modal>
    );
}

export default BACHowToPopUp;
