import { StyleSheet } from "react-native"

// styling for Common Alcohol Types popups (AlcoholPopUp.js)
export const alcoholPopupStyles = StyleSheet.create({
    modal: {
        flex: 0.55,
        backgroundColor: '#fff',
        padding: 0.25,
        borderRadius: 20,
        justifyContent: 'center'
    },
    content: {
        padding: 25
    },
    // Text within
    title: {
        display: 'inline-block',
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        marginRight: '5%',
        width: '80%'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto'
    },

})