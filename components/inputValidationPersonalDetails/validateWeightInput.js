const validateWeightInput = (personalDetails) => {
    let passes = true

    let weightInKilograms = personalDetails.weight.unit === "kg" ? personalDetails.weight.value : personalDetails.weight.value * 0.45359237

    // max weight -> 700 lbs
    // min weight -> 40 lbs
    if ((weightInKilograms == 0) || (weightInKilograms > 317.5) || (weightInKilograms < 18.14)) {
        passes = false
    }
    
    return passes
}

export default validateWeightInput