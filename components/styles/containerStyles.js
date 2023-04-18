// This is the stylesheet with container styles
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

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
    redContainer: { // combine with centerwhite
        backgroundColor: '#CF5260',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
    howToIconContainer: {
        width: '12%',
        marginLeft: '5%',
        alignContent: "center",
        paddingVertical: '6%'
      },
    alignTextCenter: {
        textAlign: 'center'
    }
})