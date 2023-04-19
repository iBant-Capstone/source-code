
const validateSexInput = (sex) => {
    let passes = true

    if (sex == '') {
        passes = false
    }

    return passes
}

export default validateSexInput
