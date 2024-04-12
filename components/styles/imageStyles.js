import { StyleSheet } from 'react-native'
// Currently commented out, but should be used in future when app is available on mobile
import { Dimensions } from 'react-native';

// Get height dimension of window
const windowHeight = Dimensions.get('window').height;
const windowWidth = 375; // Dimensions.get('window').width;

// Styling for images - Rosie, logo, icons, and other visual elements included
export const imageStyles = StyleSheet.create({
  // Images - Rosie
  leftImage: {
    width: "40%",
    marginRight: "5%",
    marginLeft: "5%",
    marginVertical: "10%",
  },
  rightImage: {
    width: "38%",
    marginRight: "5%",
    marginBottom: "2%",
  },
  largeCenterImage: {
    width: "80%",
    minHeight: "50%",
    marginBottom: "10%",
  },
  medCenterImage: {
    minHeight: "25%",
    minWidth: "35%",
    marginVertical: "10%",
  },
  // Standard drink image
  standardDrinksImage: {
    width: windowWidth * 0.792,
    minHeight: windowHeight * 0.55,
    alignSelf: "center",
    resizeMode: "center",
  },

  // Logos
  largeLogo: {
    height: "80%",
    marginBottom: 0,
  },

  // Icons
  dropdownIcon: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: "10%",
    color: "#606070",
    fontSize: 16,
  },
  howToIcon: {
    fontSize: "xxx-large",
  },
  deleteIcon: {
    fontSize: "x-large",
    color: "#CF5260",
  },
  // Info hub page
  hubIcon: {
    width: "35%",
    marginBottom: "10%",
    tintColor: "white",
  },
  topicIcon: {
    tintColor: "white",
  },
  backgroundHeading: {
    flex: 1,
    maxWidth: "163",
    // height: "375",
    maxHeight: "375",
    // width: "178.13",
    // height: "375px"
  },
});