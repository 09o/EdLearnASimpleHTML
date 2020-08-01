const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

const slides = document.querySelectorAll('.slide')

var currentIndex = 0

next.addEventListener('click', handleNextClicked)

prev.addEventListener('click', handlePrevClicked)

function handleNextClicked() {

  let current = slides[currentIndex]
  current.classList.remove('current')

  currentIndex++
  if (currentIndex >= slides.length) {
    currentIndex = 0
  }

  slides[currentIndex].classList.add('current')
}

function handlePrevClicked() {
  let current = slides[currentIndex]
  current.classList.remove('current')

  currentIndex--
  if (currentIndex < 0) {
    currentIndex = slides.length - 1
  }

  slides[currentIndex].classList.add('current')
}