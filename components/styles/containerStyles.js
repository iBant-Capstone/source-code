// This is the stylesheet with container styles
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const containerStyles = StyleSheet.create({
    centerWhiteContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftContainer: {
        flex: 1,
        padding: '15px',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    redContainer: {
        backgroundColor: '#CF5260',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: "flex-start"
    },
    centerContainer: {
        alignItems: 'center',
        padding: "15px",
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    fillToBottomContainer: {
        flex: 1,
        flexDirection: 'column',
        minHeight: windowHeight
    },
    rightHalfContainer: {
        maxWidth: '40%',
        marginRight: '5%',
        marginLeft: '2%',
        marginVertical: 50
    },
    threeColumnContainer: {
        minWidth: '25%',
        marginLeft: '5%',
        marginVertical: 10,
        height: 100
    },
    // For titles on pages
    titleContainer: {
        paddingHorizontal: 6,
        paddingTop: 25,
        backgroundColor: "#CF5260",
        width: '100%'
    },
    // For icons in how to page
    howToIconContainer: {
        width: '12%',
        marginLeft: '5%',
        alignContent: "center",
        paddingVertical: '6%'
    },

    // For special topics
    specialInfoItem: {
        marginHorizontal: 15, 
        paddingVertical: 10,
        width: windowWidth * 0.84
      },

    // Extra padding
    leftTopPadding: {
        paddingLeft: 15,
        paddingTop: 15
    },
    horizontalPadding: {
        paddingHorizontal: 15
    },

    alignTextCenter: {
        textAlign: 'center'
    },

    flexAndAlignItemsCenter: {
        display: "flex",
        alignItems: "center"
    }
})