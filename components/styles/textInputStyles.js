import { StyleSheet } from 'react-native'

export const textInputStyles = StyleSheet.create({
    // Default text input
    textInput: {
        height: 40,
        width: '40%',
        marginHorizontal: '5%',
        marginBottom: '5%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 12
    },
    // Different sizes
    largeTextInput: {
        width: '90%'
    },
    smallTextInput: {
        width: '20%',
        marginLeft: '5%',
        marginRight: '2.5%'
    },
    // Label
    label: {
        width: '40%',
        marginHorizontal: '5%',
        padding: 7
    }
})