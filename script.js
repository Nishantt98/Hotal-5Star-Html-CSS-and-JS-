const slides = document.querySelectorAll('.Slide');
let counter = 0;
slides.forEach((Slide, index) => {
    Slide.style.left = `${index * 100}%`

}
)

const goprev = () => {
    counter--;
    slideimage()
  
}
const gonext = () => {
    counter++;
    slideimage()
}

const slideimage = () => {
    slides.forEach((Slide) => {
        Slide.style.transform = `translateX(-${counter * 100}%)`
    }
)
}
