
const validateSexInput = (personalDetails) => {
    let passes = true

    let sex = personalDetails.sex

    if (sex == '') {
        passes = false
    }

    return passes
}

export default validateSexInput
