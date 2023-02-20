//using this as our stylesheet 
import { StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centered: {
      alignItems: 'center',
      padding: "15px",
    },
    modal: {
      flex: 0.75, 
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    // For expandables
    topicQuestion: {
      backgroundColor: '#F5FCFF',
      padding: 20,
    },
    topicQuestionText: {
      fontSize: 16,
      fontWeight: '500',
    },
    topicAnswer: {
      fontSize: 16,
      color: '#606070',
      padding: 10,
    },
    // For buttons on Info Hub main page
    infoHubButton: {
      backgroundColor: '#CF5260',
      padding: 12,
      borderRadius: 8,
      marginBottom: 8,
      marginHorizontal: '1%',
      minWidth: '48%',
      maxWidth: '48%',
      textAlign: 'left'
    },
    infoHubButtonText: {
      // fontFamily: 'Roboto',
      color: 'white'
    },
    twoButtonRow: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },

    // For buttons on Alcohol Types page
    alcoholTypesButton: {
      backgroundColor: '#FFEDD3',
      padding: 12,
      borderRadius: 4,
      marginBottom: 8,
      marginHorizontal: '1%',
      minWidth: '48%',
      textAlign: 'center'
    },
    alcoholTypesButtonText: {
      // fontFamily: 'Roboto',
      color: 'black'
    },
  }
);

