let slideIndex = 0; // Initialize slide index
showSlides(); // Display the first slide

function showSlides() {
    let slides = document.getElementsByClassName("mySlides"); // Get all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++; // Increment slide index
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to first slide if index exceeds number of slides
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 3500); // Change slide every 3 seconds
}
