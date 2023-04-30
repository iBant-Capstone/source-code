import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const textStyles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto',
        fontSize: 14
    },
    boldText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14
    },
    whiteSemiBoldText: {
        fontFamily: 'Roboto-Medium',
        color: 'white'
    },
    whiteText: {
        fontFamily: 'Roboto',
        color: 'white'
    },
    redSemiBoldText: {
        fontFamily: 'Roboto-Medium',
        color: '#CF5260'
    },
    redSemiBoldLargeText: {
        fontFamily: 'Roboto-Medium',
        color: '#CF5260',
        fontSize: 17
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontFamily: 'Roboto-Bold',
        width: '50%',
        marginLeft: '5%',
        marginRight: '2%',
        marginVertical: 50
    },
    smallText: {
        fontSize: 10
    },
    size16: {
        fontSize: 16
    },
    headerText: {
        fontSize: 24,
        marginBottom: '10%'
    },
    link: { // here atm
        textDecorationLine: 'underline',
        color: '#387780',
        margin: 5
    },

    selectedOption: {
        borderBottomColor: '#FFB140',
        borderBottomWidth: 3
    },

    unselectedOption: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 3
    },

    // For information hub topic pages
    questionText: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium',
        color: '#CF5361',
        marginRight: '5%',
        width: '80%',
    },
    answerText: {
        paragraph: {
            fontFamily: 'Roboto',
            fontSize: 14,
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: '#F2C0C5',
            marginTop: 0,
            marginBottom: 0
        },
        bullet_list: {
            fontFamily: 'Roboto',
            fontSize: 14,
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: '#F2C0C5',
            marginTop: 0,
            marginBottom: 0
        },
        ordered_list: {
            fontFamily: 'Roboto',
            fontSize: 14,
            paddingHorizontal: 15,
            paddingVertical: 10,
            width: windowWidth * 0.92,
            backgroundColor: '#F2C0C5',
            marginTop: 0,
            marginBottom: 0,
        },
        link: {
            textDecorationLine: 'underline',
            color: '#387780',
            margin: 5
        }

    },

    // For current BAC page
    currentBACText: {
        fontSize: 14,
        // paddingVertical: '8%',
        fontWeight: 600
    },
    currentBACNumber: {
        fontSize: 44,
        // paddingVertical: '8%',
        fontWeight: 600
    },

    // For How to Use page
    iconExplanationText: {
        maxWidth: '73%',
        marginHorizontal: '5%',
        paddingVertical: '15px'
    },

    // For addDrinkCards
    addDrinkCardTitle: {
        fontSize: 16,
        color: "#383838"
    },
    addDrinkCardSubtitle: {
        fontSize: 12,
        color: "#383838"
    }

})