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
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    centerContainer: {
        alignItems: 'center',
        padding: "15px",
        justifyContent: 'center',
    },
    alignTextCenter: {
        textAlign: 'center'
    }
})