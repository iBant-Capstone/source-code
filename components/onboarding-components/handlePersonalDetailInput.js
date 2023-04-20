import AsyncStorage from "@react-native-async-storage/async-storage"

//   This function adds an element to the personal details object we're building and moves us to the next page.
//   Once we're done building it we will send the finished object to async storage and move us to a new page.

const handlePersonaDetailInput = async ( personalDetailsSoFar, newKey, newValue, nextPage, navigation ) => {
  try {
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