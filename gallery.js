const galleryButton = document.getElementById('gallery');
const frameContainer = document.getElementById('framecontainer');
const closeButton2 = document.getElementById('closeButton2');

// Show the iframe container when the "Gallery" button is clicked
galleryButton.addEventListener('click', () => {
    frameContainer.style.display = 'flex'; // Display the container
});

// Hide the iframe container when the close button is clicked
closeButton2.addEventListener('click', () => {
    frameContainer.style.display = 'none'; // Hide the container
});