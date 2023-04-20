
const validateHeightInput = (heightData) => {
    let passes = true

    console.log(heightData)
    let heightInMeters = heightData.unit === "cm" ? heightData.value / 100 : heightData.value * 0.0254
    console.log("heightInMeters", heightInMeters)
    // max height -> 8ft 11 inches
    // min height -> 2ft
    if ((heightInMeters == 0) || (heightInMeters > 2.7) || (heightInMeters < 0.61)) {
      passes = false
    }

    return passes
}

export default validateHeightInput
