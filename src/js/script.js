
let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

showSlides(slideIndex);
