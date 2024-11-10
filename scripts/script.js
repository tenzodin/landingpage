// script.js

// ================== Modal Functionality ================== //

// Get modal element
const modal = document.getElementById("signupModal");

// Get all "Sign Up" buttons
const signUpButtons = document.querySelectorAll(".cta-button, .cta-button-2");

// Get the <span> element that closes the modal
const closeButton = document.querySelector(".close-button");

// Function to open the modal
function openModal(event) {
    event.preventDefault(); // Prevent default button behavior
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Add event listeners to all "Sign Up" buttons
signUpButtons.forEach(button => {
    button.addEventListener("click", openModal);
});

// When the user clicks on <span> (x), close the modal
closeButton.addEventListener("click", closeModal);

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Handle form submission
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    // Here you can add code to handle the email, e.g., send to server
    alert(`Thank you for signing up, ${email}!`);
    closeModal();
    signupForm.reset();
});

// ================== Dynamic Year in Footer ================== //

const currentYearSpan = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// ================== Lightbox Functionality ================== //

// Get lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");
const lightboxImages = document.querySelectorAll(".lightbox-image");

// Function to open lightbox
function openLightboxFunc(event) {
    event.preventDefault(); // Prevent default link behavior
    const imgSrc = this.querySelector("img").src;
    const imgAlt = this.querySelector("img").alt;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgAlt;
    lightbox.style.display = "block";
}

// Function to close lightbox
function closeLightboxFunc() {
    lightbox.style.display = "none";
}

// Add event listeners to all lightbox images
lightboxImages.forEach(album => {
    album.addEventListener("click", openLightboxFunc);
});

// When the user clicks on <span> (x), close the lightbox
closeLightbox.addEventListener("click", closeLightboxFunc);

// When the user clicks anywhere outside of the lightbox image, close it
window.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightboxFunc();
    }
});
