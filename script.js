const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
const submitButton = document.getElementById("submit-button");

//Calculate age or handle errors
const calcAge = () => {


    /* =====RESEARCH THIS CODE ================================================================
    
    */
    function validateInput(value) {
        // Convert the input value to an integer using parseInt
        var intValue = parseInt(value);

        // Check if the parsed value is a number and it is the same as the original value
        if (!isNaN(intValue) && intValue.toString() === value) {
            // Input value is a valid integer
            return true;
        } else {
            // Input value is not a valid integer
            return false;
        }
    }


    function isWholeNumber(value) {
        return value % 1 === 0;
    }

    /* ======================================================================================== */





    
    
    /* Check if empty string */
    if (dayInput.value === '') {
        dayError.innerHTML = 'This field is required';
    /* Check if value is an interget and not a float */
    } else if (!validateInput(dayInput.value) && !isWholeNumber(dayInput.value)) {
        dayError.innerHTML = 'Must be a valid day';
    /* Check value is greater than 0 and lower than 32 */    
    } else if (dayInput.value > 31 || dayInput.value <= 0) 
        dayError.innerHTML = 'Must be a valid day';
    {

    }

}
    



submitButton.addEventListener("click", calcAge);

