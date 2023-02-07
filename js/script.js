console.log('carosello')
//recupero le slide ed i due pulsanti
const imgElements = document.getElementsByClassName('slide')
console.log(imgElements)
const rightArrow = document.querySelector('.arrow-right')
const leftArrow = document.querySelector('.arrow-left')

console.log(leftArrow,rightArrow)

let activeSlide = 0

//aggiungo i click event listener ai pulsanti
rightArrow.addEventListener('click', function () {
	console.log('current slide', activeSlide)
    const lastIndex = imgElements.length -1

    //se la lunghezza del contenuto è minore dell'ultimo indice
    // if(activeSlide < lastIndex){
    //nascondo la slide attiva e mostro slide successiva    

	let currentSlide = imgElements[activeSlide]
	currentSlide.classList.remove('active')
        if (activeSlide < lastIndex){
	    activeSlide++
    }
        else{
        activeSlide = 0
        }

	let nextSlide = imgElements[activeSlide]
	nextSlide.classList.add('active')   
}
)
	console.log('next slide', activeSlide)

leftArrow.addEventListener('click', function () {
    console.log('current slide', activeSlide)
    
    // if (activeSlide > 0 ){
    //nascondo la slide attiva e mostro slide precedente
    
    let currentSlide = imgElements[activeSlide]
    currentSlide.classList.remove('active')
    if (activeSlide > 0){
	    activeSlide--
    }
        else{
        activeSlide = imgElements.length - 1
        }   
    
    let prevSlide = imgElements[activeSlide]
    prevSlide.classList.add('active')
    }

)

/// UTILIZZO ARRAY ED INSERIMENTO ELEMENTI NEL DOM DA JS
// const slides = [
//     '.img/aurora.jpg',
//     '.img/Barriera-corallina.jpg',
//     '.img/cappadocia.jpg',
//     '.img/Naples.jpg',
//     '.img/route-66.jpg'
// ]

// const carousel = document.querySelector('.carousel')
// for (let i = 0 ; i < slides.length; i++){
//     const srcImg = slides [i]
//     console.log(srcImg)
//     let slide = document.createElement('div')
//     slide.classList.add('slide')
//     if (i===0){
//         slide.classList.add('active')
//     }
//     let img = document.createElement('img')
//     img.src =slides[i]
//     slide.appendChild(img)
//     carousel.appendChild(slide)
// }



