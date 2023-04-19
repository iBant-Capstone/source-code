import AsyncStorage from "@react-native-async-storage/async-storage"

const handlePersonaDetailInput = async ( personalDetailsSoFar, newKey, newValue, nextPage, navigation ) => {
  try {
    console.log("newValue", newValue)
    personalDetailsSoFar[newKey] = newValue

    // If we've reached the end we push what we've pade to Async Storage
    if (nextPage == "Welcome") {
      let personalDetailsToSend = JSON.stringify(personalDetailsSoFar)
      await AsyncStorage.setItem('personalDetails', personalDetailsToSend)
      navigation.navigate(nextPage)

    // Otherwise we keep moving forward to add more
    } else {
      navigation.navigate(nextPage, { personalDetailsSoFar: personalDetailsSoFar })
    }
    
  } catch (err) {
    console.log(err)
  }
}

export default handlePersonaDetailInput