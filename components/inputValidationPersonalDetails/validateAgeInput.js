const validateAgeInput = (ageData) => {
    // Check if the input is not empty and can be parsed as a date
    if (!ageData || isNaN(Date.parse(ageData))) {
        return false;
    }
    return true;
}
export default validateAgeInput;