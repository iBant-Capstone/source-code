import { StyleSheet } from 'react-native'

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
    redSemiBoldText: {
        fontFamily: 'Roboto-Medium',
        color: '#CF5260'
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

    // For information hub topic pages
    questionText: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium',
        color: '#CF5361',
        marginRight: '5%',
        width: '80%',
    },
    answerText: {
        body: {
            fontFamily: 'Roboto',
            fontSize: 14,
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: '#F2C0C5'
        },
        link: {
            textDecorationLine: 'underline',
            color: '#387780',
            margin: 5
        }

    },

    // For current BAC page
    currentBACText: {
        fontSize: 32,
        paddingVertical: '8%'
    },

    // For How to Use page
    iconExplanationText: {
        maxWidth: '73%',
        marginHorizontal: '5%',
        paddingVertical: '15px'
    },

})