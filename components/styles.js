//using this as our stylesheet 
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  // Styling components for overall items
  centerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 1,
    // paddingHorizontal: '15px',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  centered: {
    alignItems: 'center',
    padding: "15px",
    justifyContent: 'center',
  },
  modal: {
    flex: 0.75,
    backgroundColor: '#fff',
    padding: 0.25,
    borderRadius: 20,
  },
  modalContent: {
    padding: 25,
  },

  // Rosie Related Styling:
  // To place Rosie on left
  rosieLeftImage: {
    width: '48%',
    marginLeft: '5%',
    marginVertical: 10
  },
  rosieSpeechRight: {
    maxWidth: '40%',
    marginRight: '5%',
    marginLeft: '2%',
    marginVertical: 50
  },

  // Logo related styling:
  largeLogoWithText: {
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: '10%'
  },

  // **Info Hub page(s) styling: 
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
  questionIcon: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '10%',
  },
  // For info hub pages with special components
  specialInfoItem: {
    marginHorizontal: 15,
    marginVertical: 10
  },
  // For buttons - red
  mainRedButton: {
    backgroundColor: '#CF5260',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    marginHorizontal: '1%',
    minWidth: '48%',
    maxWidth: '48%',
    textAlign: 'left'
  },
  mainRedButtonText: {
    // fontFamily: 'Roboto',
    color: 'white'
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
  tableId: {
    margin: 6,
    fontWeight: '600'
  },
  // Image
  standardDrinkImg: {
    width: 340,
    height: 425,
    marginTop: '5%'
  },
  // For Alcohol Types page
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
  commonAlcTypeTitle: {
    fontSize: 24,
    fontWeight: '500',
    marginRight: '5%',
    width: '80%',
  },

  // ** Profile page/About us pages styling
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
  aboutSubtitle: {
    fontSize: 16,
    color: '#CF5260',
    fontWeight: "500"
  },
  // How to Use page icons
  howToIcon: {
    fontSize: 'xxx-large'
  },
  howToIconContainer: {
    width: '12%',
    marginLeft: '5%',
    alignContent: "center",
    paddingVertical: '6%'
  },
  howToIconText: {
    maxWidth: '73%',
    marginHorizontal: '5%',
    paddingVertical: '15px' 
  },
  // Text styling
  redBoldText: {
    fontWeight: '600',
    color: '#CF5260'
  },
  link: {
    textDecorationLine: 'underline',
    color: '#387780',
    fontSize: 14,
    margin: 5
  },
}
);

