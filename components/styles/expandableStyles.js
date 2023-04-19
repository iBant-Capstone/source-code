import { StyleSheet } from 'react-native'

export const expandableStyles = StyleSheet.create({
    closed: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomColor: '#E9E9E9',
        borderBottomWidth: 1
    },
    expanded: {
        backgroundColor: '#F2C0C5',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
})