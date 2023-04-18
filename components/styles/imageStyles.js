import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

// Get height dimension of window
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// Styling for images - Rosie, logo, icons, and other visual elements included
export const imageStyles = StyleSheet.create({
    // Images - Rosie
    leftImage: {
        width: '40%',
        marginRight: '5%',
        marginLeft: '5%',
        marginVertical: '10%'
    },
    rightImage: {
        width: '38%',
        marginRight: '5%',
        marginVertical: '10%'
    },
    largeCenterImage:{
        width: "80%",
        minHeight: "50%",
        marginBottom: "10%"
    },
    // Standard drink image
    standardDrinksImage: {
        width: windowWidth*0.9, // use dimensions? 340
        height: windowHeight*0.64, // 425
        marginTop: '5%'
    },

    // Logos
    largeLogo: {
        height: "80%",
        marginBottom: 0
    },

    // Icons
    dropdownIcon: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '10%',
        color: '#606070',
        fontSize: 16
    },
    howToIcon: {
        fontSize: 'xxx-large'
    },
    deleteIcon: { // Put this in after pulling
        fontSize: 'xx-large',
        color: '#CF5260'
    },

})