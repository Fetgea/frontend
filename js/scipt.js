let card = document.getElementsByClassName("latest-item");
[].forEach.call(card, (elem) => {
    let mainLink = elem.querySelector(".latest-link");
    elem.addEventListener("click", handleClick.bind(null, mainLink));
})


function handleClick(mainLink) {
    const noTextSelected = !window.getSelection().toString();
    if (noTextSelected) {
        mainLink.click();
    }
}


function showSlides(number) {
    let counter;
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("slider-dot");
    slideIndex = number;
    if (number > slides.length) {
        slideIndex = slides.length;
    }
    for (counter = 0; counter < slides.length; counter++) {
        slides[counter].className = slides[counter].className.replace(" active", "");
    }
    for (counter = 0; counter < dots.length; counter++) {
        dots[counter].className = dots[counter].className.replace(" active", "");
    }
    slides[slideIndex - 1].className += " active";
    dots[slideIndex - 1].className += " active";
}