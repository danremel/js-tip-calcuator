var calculateTip = function() {
    // Linking variables with form values
    var billAmount = document.getElementById("bill-amount").value;
    var service = document.getElementById("select-service").value;
    var peopleCount = document.getElementById("people-count").value;

    // Calculate the tip amount, then divide by number of people.
    var tipTotal = (billAmount * service) / peopleCount;
}
