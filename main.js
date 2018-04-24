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

        // If only one person, hide the word "per person" from the display
        document.getElementById("per-person").style.display = "none";
    } else {
        document.getElementById("per-person").style.display = "block";
    }

    // Calculate the tip amount, then divide by number of people.
    var tipTotal = (billAmount * service) / peopleCount;

    // Round to two decimals
    tipTotal = Math.round(tipTotal * 100) / 100;

    // Always display 2 decimal places
    tipTotal = tipTotal.toFixed(2);

    // Print the total onto the page
    document.getElementById("tip-display").style.display = "block";
    document.getElementById("tip").innerHTML = tipTotal;
}

// Hide the tip section on initial load
document.getElementById("tip-display").style.display = "none";

// Click to call the function
document.getElementById("calc-button").onclick = function() {
    calculateTip();
};
