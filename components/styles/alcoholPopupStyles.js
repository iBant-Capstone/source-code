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
        fontSize: 35,
        fontFamily: 'Roboto-Bold',
        marginLeft: '5%'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto'
    }
})