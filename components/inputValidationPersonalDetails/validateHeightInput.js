
const validateHeightInput = (personalDetails) => {
    let passes = true

    let heightInMeters = personalDetails.height.unit === "cm" ? personalDetails.height.value * 100 : personalDetails.height.value * 0.0254

    // max height -> 8ft 11 inches
    // min height -> 2ft
    if ((heightInMeters == 0) || (heightInMeters > 2.7) || (heightInMeters < 0.61)) {
      passes = false
    }
    
    return passes
}

export default validateHeightInput
