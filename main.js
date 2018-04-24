var calculateTip = function() {
    // Linking variables with form values
    var billAmount = document.getElementById("bill-amount").value;
    var service = document.getElementById("select-service").value;
    var peopleCount = document.getElementById("people-count").value;

    // Validate input entry
    if (billAmount === "" || service === 0) {
        alert("You must enter all values.");
        return;
    }
    // If people input is left blank, assume there is one person
    if (peopleCount === "" || peopleCount <= 1) {
        peopleCount = 1;
    }

    // Calculate the tip amount, then divide by number of people.
    var tipTotal = (billAmount * service) / peopleCount;
    // Round to two decimals
    tipTotal = Math.round(tipTotal * 100) / 100;

    console.log(tipTotal);
}

// Click to call the function
document.getElementById("calc-button").onclick = function() {
    calculateTip();
};
