console.log('carosello')

const imgElements = document.getElementsByClassName('slide')
console.log(imgElements)
const rightArrow = document.querySelector('.arrow-right')
const leftArrow = document.querySelector('.arrow-left')

console.log(leftArrow,rightArrow)
let activeSlide = 0

rightArrow.addEventListener('click', function () {
	console.log('current slide', activeSlide)

	let currentSlide = imgElements[activeSlide]
	currentSlide.classList.remove('active')

	activeSlide++

	let nextSlide = imgElements[activeSlide]
	nextSlide.classList.add('active')
    if (activeSlide>activeSlide.lenght)
    console.log(activeSlide)
}
)
	console.log('next slide', activeSlide)

leftArrow.addEventListener('click', function () {
    console.log('current slide', activeSlide)
    
    let currentSlide = imgElements[activeSlide]
    currentSlide.classList.remove('active')
    
    activeSlide--
    
    let prevSlide = imgElements[activeSlide]
    prevSlide.classList.add('active')
}
)