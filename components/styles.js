//using this as our stylesheet 
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  // popup - related styling 
  popupIcon: {
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',

  },
  modal: {
    flex: 0.75,
    backgroundColor: '#fff',
    padding: 0.25,
    borderRadius: 20,
    justifyContent: 'center',
  },
  modalContent: {
    padding: 25,
  },
  redContainer: {
    backgroundColor: '#CF5260',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexGrow: 1
  },
  pageFillContainer: {
    flex: 1,
    flexDirection: 'column',
    minHeight: windowHeight
  },

  // TEXT INPUT STYLING
  textInput: {
    height: 40,
    width: '40%',
    marginHorizontal: '5%',
    marginBottom: '5%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 12
  },
  textInputContainer: {
    marginHorizontal: '5%',
    marginVertical: '10%'
  },
  textInputLabel: {
    width: '40%',
    marginHorizontal: '5%',
    padding: 7
  },
  largeTextInput: {
    height: 40,
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: '5%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 12
  },
  smallTextInput: {
    height: 40,
    width: '20%',
    marginLeft: '5%',
    marginRight: '2.5%',
    marginBottom: '5%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 12
  },

  // Styling for input type text
  informationTypeLabel: {
    padding: 5,
    justifyContent: 'center'
  },

  // Rosie Related Styling:
  // To place Rosie on left
  rosieLeftImage: {
    width: '48%',
    marginLeft: '5%',
    marginVertical: 10
  },
  rosieRightImage: {
    width: '38%',
    marginRight: '5%',
    marginVertical: 10
  },
  rosieSpeechRight: {
    maxWidth: '40%',
    marginRight: '5%',
    marginLeft: '2%',
    marginVertical: 50
  },
  // Rename later to better reflect purpose
  oneThirdContainer: {
    minWidth: '25%',
    marginLeft: '5%',
    marginVertical: 10,
    height: 100
  },

  // Logo related styling:
  largeLogoWithText: {
    width: "80%",
    height: "80%"
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
  mainRedButtonText: {
    fontFamily: 'Roboto-Medium',
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
  alcoholTypesButtonText: {
    // fontFamily: 'Roboto',
    color: 'black'
  },
  commonAlcTypeTitle: {
    display: 'inline-block',
    fontSize: 24,
    fontWeight: '500',
    marginRight: '5%',
    width: '80%',
  },
  commonAlcTypeSubtext: {
    fontSize: 16,
    color: 'black'
  },

  // ** Profile page/About us pages styling
  // For Profile editting
  profileEditButtonText: {
    color: '#CF5260',
    fontWeight: '500'
  },
  // For about us buttons
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
    margin: 5,
    backgroundColor: 'transparent'
  },
  currentBACText: {
    fontSize: 32,
    paddingVertical: '8%'
  },
  whiteText: {
    color: '#FFFFFF'
  },
  yellowUnderline: {
    borderBottomColor: '#FFB140',
    borderBottomWidth: 3
  },
  onboardingHeaderText: {
    fontSize: 24,
    marginBottom: '10%'
  },

  // For BAC calculator
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
  drinkCardTimeContainer: {
    width: '15%',
    marginLeft: '5%',
    alignContent: "center",
    justifyContent: 'center'
  },
  drinkCardInfoContainer: {
    width: '55%',
    marginHorizontal: '5%',
    justifyContent: 'center'
  },
  drinkCardDeleteContainer: {
    width: '10%',
    marginRight: '5%',
    justifyContent: 'center'
  },
  drinkCardNameText: {
    fontSize: 14,
    fontWeight: 600
  },
  smallText: {
    fontSize: 10
  },
  exIcon: {
    fontSize: 'xx-large',
    color: '#CF5260'
  },

  title: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    width: '50%',
    marginLeft: '5%',
    marginRight: '2%',
    marginVertical: 50
  },
  titleContainer: {
    paddingHorizontal: 6,
    paddingTop: 25,
    backgroundColor: "#CF5260",
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

}
);

