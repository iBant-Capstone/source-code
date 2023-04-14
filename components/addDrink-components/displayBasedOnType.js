
const displayBasedOnType = (types, newDrink, strengthsOrSizes, attributeData ) => {
    let currentTypeOptionIDs = []
    types.map((type) => {
        if (type.title == newDrink.name) {
            currentTypeOptionIDs = type[strengthsOrSizes]
        }
    })
    let optionObjectsBasedOnType = attributeData.filter(option => currentTypeOptionIDs.includes(option.id))
    return optionObjectsBasedOnType
}

export default displayBasedOnType