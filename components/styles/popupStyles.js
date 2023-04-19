import { StyleSheet } from "react-native"

export const popupStyles = StyleSheet.create({
    modal: {
        flex: 0.75,
        backgroundColor: '#fff',
        padding: 0.25,
        borderRadius: 20,
        justifyContent: 'center',
    },
    content: {
        padding: 25,
    },
    // Text within
    title: {
        display: 'inline-block',
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        marginRight: '5%',
        width: '80%',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto'
    },

})