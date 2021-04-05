let card = document.getElementsByClassName("latest-item");
console.log(card);
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
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("slider-dot");
    slideIndex = number;
    if (number > slides.length) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].className += " active";
    dots[slideIndex-1].className += " active";
}