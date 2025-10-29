// Show popup on page load
window.onload = function () {
    document.getElementById("popup").style.display = "flex";
};

// Function to show selected portfolio section
function showPortfolio(type) {
    // Hide popup
    document.getElementById("popup").style.display = "none";

    // Hide all portfolio sections first
    document.querySelectorAll(".portfolio-section").forEach(section => {
        section.style.display = "none";
    });

    // Show the selected section
    document.getElementById(type).style.display = "block";
}
