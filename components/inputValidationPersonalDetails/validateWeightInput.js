const validateWeightInput = (weightData) => {
    let passes = true

    let weightInKilograms = weightData.unit === "kg" ? weightData.value : weightData.value * 0.45359237

    // max weight -> 700 lbs
    // min weight -> 40 lbs
    if ((weightInKilograms == 0) || (weightInKilograms > 317.5) || (weightInKilograms < 18.14)) {
        passes = false
    }
    
    return passes
}

export default validateWeightInput