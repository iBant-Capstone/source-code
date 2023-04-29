import { StyleSheet } from 'react-native'

export const buttonStyles = StyleSheet.create({
    // Button styles
    defaultButton: {
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        marginHorizontal: '1%'
    }, 
    // Coloring buttons
    redButton: {
        backgroundColor: '#CF5260',
        width: '48%'
    },
    whiteButton: {
        backgroundColor: '#FFFFFF',
        minWidth: '30%'
    },
    // Red border - used for alcohol types
    redBorderButton: {
        borderColor: '#CF5260', 
        borderWidth: 1, 
        width: '48%' 
    },
    // Sizing buttons
    // Large button
    largeButton: {
        marginHorizontal: '5%',
        width: '90%',
    },
    // Relatively medium sized button that has a larger left margin
    mediumRightButton: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        marginLeft: '25%', //new
        marginRight: '5%', // new
        width: '70%', // new
        textAlign: 'center',
    },

    //// For hunger button selections - default is pressed state
    hungerButton: {
        marginBottom: '5%',
        marginHorizontal: '5%',
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#CF5260'
    },
    // For when hunger button is not selected
    hungerButtonNotSelected: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CF5260'
    },

    //// For AMPM buttons - default is pressed state
    // For the not selected AM PM
    AMPMButtonNotSelected: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CF5260'
    },
    AMPMButton: {
        backgroundColor: '#CF5260',
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: '5%',
        marginHorizontal: '2.5%',
        width: '15%',
        alignItems: 'center',
    },

    //// For radio buttons - default is pressed state
    radioButton: {
        backgroundColor: '#FFB140',
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 8,
        maxHeight: 30,
        marginHorizontal: '5%',
        minWidth: '10%',
        textAlign: 'center'
    },
    // For not selected radio button
    radioButtonNotSelected: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#FFB140'
    },
    // Button text alignment
    alignLeft: {
        textAlign: 'left'
    },
    alignCenter: {
        textAlign: 'center'
    },
    alignRight: {
        textAlign: 'right'
    }
})