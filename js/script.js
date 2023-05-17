
let offerSliderPrev = document.querySelector('.offer__slider-prev')
let offerSliderNext = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')
let currentSlide = document.querySelector('.current')
let totalSlides = document.querySelector('.total')
let slideIndex = 0

function showSlides() {
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(el => el.classList.add('hide'))
    slides[slideIndex].classList.remove('hide')
    slides[slideIndex].classList.add('fade')
    currentSlide.innerHTML = slideIndex + 1
}

showSlides()
totalSlides.innerHTML = slides.length

offerSliderNext.onclick = () => {
    slideIndex++
    showSlides()
}

offerSliderPrev.onclick = () => {
    slideIndex--
    showSlides()
}

// Modal

let modalButtons = document.querySelectorAll('[data-modal]')
let modal = document.querySelector('.modal')
let closeModal = document.querySelector('[data-close]')

modalButtons.forEach(button => {
    button.onclick = ('click', () => {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    })
})

closeModal.onclick = ('click', () => {
    modal.classList.remove('show')
    modal.classList.add('hide')
    document.body.style.overflow = ''
})




// kartinki
let tabsc = document.querySelectorAll('.tabheader__item')
let tabsContent =document.querySelectorAll('.tabcontent')
let tabParent = document.querySelector('.tabheader__items')

    function hideContent() {
        tabsContent.forEach((elem) => {
            elem.classList.add('hide')
            elem.classList.remove('show')
            elem.classList.remove('fade')
        })

        tabsc.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        })
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide')
        tabsContent[i].classList.add('show', 'fade')
        tabsc[i].classList.add('tabheader__item_active')
    }
    
    hideContent()
    showTabContent(0)

    tabsc.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            hideContent()
            showTabContent(index) 
        })
    })



// ADD
    
let modalOverlay = document.querySelector('.modal-overlay');
let modalCloseBtn = document.querySelector('.modal-close-btn'); 
    
    modalCloseBtn.onclick = () => {
            modalOverlay.style.display = 'none'
        }
        
        // !RANDOM
        let spanRromo = document.querySelector('.pr')
        function getPromo() {
                let getRandomCharacter = (characters) => characters[Math.floor(Math.random() * characters.length)]
            
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numbers = '0123456789'
    let random = ''

    for (let i = 0; i < 4; i++) {
            random += getRandomCharacter(letters)
            random += getRandomCharacter(numbers)
        }
    return random;
}

let promo = getPromo()
console.log(promo)
spanRromo.innerHTML = promo


function showModalOnScroll() {
    
    if ((window.innerHeight + window.pageYOffset) >= document.documentElement.scrollHeight) {
    
      if (!document.querySelector('.modal-overlay.show')) {
       
        let modal = document.querySelector('.modal-overlay')
        
        modal.classList.add('show')
      }
    }
  }
  
  window.addEventListener('scroll', showModalOnScroll);
  
  













// let btn  = document.querySelectorAll('.btn');
// // let modalOverlay = document.querySelector('.modal-overlay');
// let modal = document.querySelector('.modal');

// let modalCloseBtn = document.querySelector('.modal__close');


// btn.onclick = () => {
//     modal.style.display = 'block'
// }

// modalCloseBtn.onclick = () => {
//     modal.style.display = 'none'
// }
// let btn  = document.querySelectorAll('.btn');
// let modalOverlay = document.querySelector('.modal-overlay')
// let modalCloseBtn = document.querySelector('.close-icon')


// btn.onclick = () => {
//     modalOverlay.style.display = 'block'
// }

// modalCloseBtn.onclick = () => {
//     modalOverlay.style.display = 'none'
// }














