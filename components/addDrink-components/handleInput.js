
const handleInput = (drinks, newDrink, newKey, newValue, nextPage, navigation ) => {
    newDrink[newKey] = newValue
    try {
        navigation.navigate(nextPage, { drinks: drinks, newDrink: newDrink})
    } catch (err) {
        console.log(err)
    }
}

export default handleInput