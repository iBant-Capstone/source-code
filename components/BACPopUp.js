import React from 'react';
import { Pressable, View, Text } from 'react-native';
import Modal from "react-native-modal";

// Import styles
import * as StyleSheet from './styles';
let styles = StyleSheet.styles;

const Popup = (props) => {
    let BAC = props.BAC;
    console.log("BAC: ", BAC); // currently not logging
    let warningText = "";

    const [modalVisible, setModalVisible] = useState(true);

    if (BAC >= 0.08 && BAC < 0.25) {
        warningText = "Your BAC level is at or above the federal legal intoxication level. It is illegal for you to drive or ride a bike. Please consider these alternatives to get home safely: ";
            // Get an Uber (button)
			// Use public transit (button)
			// Ride with a designated driver
			// Call someone you trust
            // Walk
        // TODO: add pressables to modal?
    } else if (BAC < 0.35) {
        warningText = "At this BAC level, you are *severely intoxicated* and are in danger of significant health risks including loss of consciousness and choking/aspirating on vomit. Consuming additional alcohol may lead to danger of death.";
    } else if (BAC >= 0.35) {
        warningText = "At this BAC level, you are *severely intoxicated* and are in danger of death due to coma or respiratory failure. You require immediate medical attention.";
    }

    // TODO: add styling for popup in styles.js
    return (
        // <Modal isVisible={props.isOpen} style={styles.modal}>
        <Modal isVisible={modalVisible} style={styles.modal}>
            <View style={styles.modalContent} >
                {data && <Text style={styles.commonAlcTypeTitle}><strong>WARNING!</strong></Text>}
                <br />
                {data && <Text style={styles.commonAlcTypeSubtext}>Your BAC level is: {BAC}</Text>}
                <br />
                {data && <Text style={styles.commonAlcTypeSubtext}>{warningText}</Text>}
                <br />
                <Pressable style={[styles.leftRedButton, styles.centered]} onPress={() => setModalVisible(!modalVisible)}> 
                {/* onPress={props.onChangeModal} */}
                    <Text style={styles.mainRedButtonText}><em>I understand</em></Text>
                </Pressable>
                {/* TODO (P2): add "Do not show this again" pressable & functionality */}
            </View>
        </Modal>
    );
}

export default Popup;