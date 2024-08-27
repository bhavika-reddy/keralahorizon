document.addEventListener("DOMContentLoaded", function () {
    const closePopupButton = document.getElementById("closePopup");
    const overlay = document.getElementById("overlay");

    // Display the popup when the page is loaded
    overlay.style.display = "flex";

    // Close the popup when the close button is clicked
    closePopupButton.addEventListener("click", function () {
        overlay.style.display = "none";
    });
});
