let clickCount = 0; // Track the number of times the fingerprint is clicked

document.getElementById("fingerprintIcon").addEventListener("click", function() {
    var statusMessage = document.getElementById("statusMessage");
    var fingerprintImage = document.getElementById("fingerprintImage");
    var loadingSpinner = document.getElementById("loadingSpinner");
    var successCircle = document.getElementById("successCircle");

    // Show spinner, hide fingerprint image, and start loading phase
    fingerprintImage.style.display = "none";
    loadingSpinner.style.display = "block";
    successCircle.classList.remove("show"); // Ensure success tick is hidden at start
    statusMessage.innerText = "Scanning fingerprint...";

    setTimeout(function() {
        loadingSpinner.style.display = "none"; // Hide spinner after loading

        if (clickCount === 0) {
            // First click: store the fingerprint
            statusMessage.innerText = "Fingerprint stored!";
            statusMessage.style.color = "#27ae60";
            clickCount++; // Increment the click count for the next click
            fingerprintImage.style.display = "block"; // Show fingerprint image again
        } else if (clickCount === 1) {
            // Second click: recognize the fingerprint
            successCircle.classList.add("show"); // Show the success circle with the tick
            statusMessage.innerText = "Fingerprint recognized!";
            statusMessage.style.color = "#27ae60";

            // Perform login action after showing success
            setTimeout(function() {
                window.location.href = "dashboard.html"; // Redirect to the dashboard
            }, 2000);
        }
    }, 2000); // Simulate scanning delay with loading (2 seconds)
});
