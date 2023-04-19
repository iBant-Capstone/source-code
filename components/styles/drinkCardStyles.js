import { StyleSheet } from 'react-native'

export const drinkCardStyles = StyleSheet.create({
    drinkCard: {
        backgroundColor: '#FFFFFF',
        padding: 12,
        borderRadius: 4,
        marginBottom: 8,
        marginHorizontal: '5%',
        minWidth: '90%',
        textAlign: 'left',
        flex: 1
      },
      timeContainer: {
        width: '15%',
        marginLeft: '5%',
        alignContent: "center",
        justifyContent: 'center'
      },
      infoContainer: {
        width: '55%',
        marginHorizontal: '5%',
        justifyContent: 'center'
      },
      deleteContainer: {
        width: '10%',
        marginRight: '5%',
        justifyContent: 'center'
      },
})