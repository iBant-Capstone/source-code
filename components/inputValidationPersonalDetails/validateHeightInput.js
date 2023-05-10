
const validateHeightInput = (heightData) => {
    let passes = false

    if (heightData.unit == "ft") {
      if (heightData.ft < 8 && heightData.ft > 2 && heightData.in < 12 && heightData.in >= 0) {
        passes = true
      }
    }

    if (heightData.unit == "cm") {
      if (heightData.cm > 61 && heightData.cm < 270) {
        passes = true
      }
    }

    return passes
}

export default validateHeightInput
