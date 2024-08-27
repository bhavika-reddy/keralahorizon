function openBookingPopup() {
    var bookingPopup = document.getElementById("bookingPopup");
    var overlay = document.getElementById("overlay");

    bookingPopup.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling on the main page
}

function closeBookingPopup() {
    var bookingPopup = document.getElementById("bookingPopup");
    var overlay = document.getElementById("overlay");

    bookingPopup.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling on the main page
}