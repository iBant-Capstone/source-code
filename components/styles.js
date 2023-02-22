//using this as our stylesheet 
import { StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap'
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
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderBottomColor: '#E9E9E9',
      borderBottomWidth: 1
    },
    topicQuestionText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#CF5361',
      // marginHorizontal: '5%',
      marginRight: '5%',
      width: '80%',
    },
    topicAnswer: {
      fontSize: 14,
      color: '#000000',
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: '#F2C0C5'
    },
    expandedQuestion: {
      backgroundColor: '#F2C0C5',
      paddingHorizontal: 15,
      paddingVertical: 10
    },
    // For down/up arrow for question toggle
    questionIcon :{
      paddingHorizontal: 15,
      paddingVertical: 10,
      width: '10%',
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

    // For images
    standardDrinkImg: {
      width: 340,
      height: 507,
      marginTop: '5%'
    },

    // For about us buttons
    aboutButton: {
      backgroundColor: '#CF5260',
      padding: 12,
      borderRadius: 8,
      marginBottom: 8,
      marginHorizontal: '5%',
      width: '90%',
      textAlign: 'center'
    },

    // To place Rosie on left
    rosieLeftImage: {
      width: '40%', 
      marginLeft: '5%'
    },
    rosieSpeechRight: {
      maxWidth: '45%', 
      marginHorizontal: '5%', 
      marginVertical:'20%'
    },
    // For info hub pages with special components
    specialInfoItem: {
      marginHorizontal: 15,
      marginVertical: 10
    },
    // Table
    tableText: {
      margin: 6,
      fontSize: 14
    },
    headStyle: { 
      height: 35,
      textAlign: "center",
      backgroundColor: '#DF8B94'
    },
    
  }
);

