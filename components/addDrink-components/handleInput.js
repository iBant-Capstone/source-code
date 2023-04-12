import AsyncStorage from "@react-native-async-storage/async-storage"

const handleInput = async (drinks, newDrink, newKey, newValue, nextPage, navigation ) => {
    newDrink[newKey] = newValue
    try {
        if (nextPage == 'BACCalc') {
            drinks.push(newDrink)
            let drinksToSend = JSON.stringify(drinks)
            await AsyncStorage.setItem('drinks', drinksToSend)
        }
        navigation.navigate(nextPage, { drinks: drinks, newDrink: newDrink})
    } catch (err) {
        console.log(err)
    }
}

export default handleInput