const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
const submitButton = document.getElementById("submit-button");
const yearResult = document.getElementById("year-result");
const monthResult = document.getElementById("month-result");
const dayResult = document.getElementById("day-result");

//Calculate age or handle errors
const calcAge = () => {

    let checkedDay = false;
    let checkedMonth = false;
    let checkedYear = false;

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

    /* Day input */
    /* Check if empty string */
    if (dayInput.value === '') {
        dayError.classList.add('input-error');
        dayInput.classList.add('input-error-border');
        dayError.innerHTML = 'This field is required';
    /* Check if value is an interget and not a float */
    } else if (!validateInput(dayInput.value) && !isWholeNumber(dayInput.value)) {
        dayError.classList.add('input-error');
        dayInput.classList.add('input-error-border');
        dayError.innerHTML = 'Must be a valid day';
    /* Check value is greater than 0 and lower than 32 */    
    } else if (dayInput.value > 31 || dayInput.value <= 0){
        dayError.classList.add('input-error');
        dayInput.classList.add('input-error-border');
        dayError.innerHTML = 'Must be a valid day';
    } else {
        checkedDay = true;
    }

    /* Month input */
    /* Check if empty string */
    if (monthInput.value === '') {
        monthError.classList.add('input-error');
        monthInput.classList.add('input-error-border');
        monthError.innerHTML = 'This field is required';
        /* Check if value is an interget and not a float */
    } else if (!validateInput(monthInput.value) && !isWholeNumber(monthInput.value)) {
        monthError.classList.add('input-error');
        monthInput.classList.add('input-error-border');
        monthError.innerHTML = 'Must be a valid Month';
        /* Check value is greater than 0 and lower than 32 */
    } else if (monthInput.value > 12 || monthInput.value <= 0){
        monthError.classList.add('input-error');
        monthInput.classList.add('input-error-border');
        monthError.innerHTML = 'Must be a valid Month';
    } else {
        checkedMonth = true;
    }
    
    /* Year Input */
    const d = new Date();
    const currentYear = d.getFullYear();
    /* Check if empty string */
    if (yearInput.value === '') {
        yearError.classList.add('input-error');
        yearInput.classList.add('input-error-border');
        yearError.innerHTML = 'This field is required';
        /* Check if value is an interget and not a float */
    } else if (!validateInput(yearInput.value) && !isWholeNumber(yearInput.value)) {
        yearError.classList.add('input-error');
        yearInput.classList.add('input-error-border');
        yearError.innerHTML = 'Must be a valid Year';
        /* Check value is greater than 0 and lower than 32 */
    } else if (yearInput.value > currentYear || yearInput.value <= 0){
        yearError.classList.add('input-error');
        yearInput.classList.add('input-error-border');
        yearError.innerHTML = 'Must be a valid Year';
    } else {
        checkedYear = true;
    }

    if (checkedDay && checkedMonth && checkedYear) {

        function calculateAge(day, month, year) {
            const currentDate = new Date();
            const givenDate = new Date(year, month - 1, day);
            let calcYear = currentDate.getFullYear() - givenDate.getFullYear();
            let calcMonth = currentDate.getMonth() - givenDate.getMonth();
            let calcDay = currentDate.getDate() - givenDate.getDate();

            if (calcMonth < 0 || (calcMonth === 0 && calcDay < 0)) {
                calcYear--;
                calcMonth += 12;
            }

            if (calcDay < 0) {
                const lastMonthDate = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1,
                    0
                );
                calcDay += lastMonthDate.getDate();
                calcMonth--;
            }

            return {
                years: calcYear,
                months: calcMonth,
                days: calcDay
            };
        }

        const calcAge = calculateAge(dayInput.value, monthInput.value, yearInput.value);
        yearResult.innerHTML = calcAge.years + '     ';
        monthResult.innerHTML = calcAge.months;
        dayResult.innerHTML = calcAge.days
    }
}
    
submitButton.addEventListener("click", calcAge);

