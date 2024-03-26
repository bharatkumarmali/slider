const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.images')
const length = images.length;

let slideNumber = 1;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}

const firstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const privSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 800}px)`;
    slideNumber--;
}

const lastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    slideNumber = length;
}

right.addEventListener('click', () => {
    slideNumber < length ? nextSlide() : firstSlide();
})

left.addEventListener('click', () => {
    slideNumber > 1 ? privSlide() : lastSlide();
})