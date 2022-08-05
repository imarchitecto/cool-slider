const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const heightWindow = mainSlide.clientHeight

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlideUp()
})

downBtn.addEventListener('click', () => {
    changeSlideDown()
})

function changeSlideUp() {
    activeSlideIndex++
    if (activeSlideIndex > (slidesCount - 1)) {
        activeSlideIndex = 0
    }
    mainSlide.style.transform = `translateY(-${heightWindow * activeSlideIndex}px)`
    sidebar.style.transform = `translateY(${heightWindow * activeSlideIndex}px`
}

function changeSlideDown() {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
        activeSlideIndex = (slidesCount - 1)
        mainSlide.style.transform = `translateY(-${heightWindow * activeSlideIndex}px)`
        sidebar.style.transform = `translateY(${heightWindow * activeSlideIndex}px`
    } else {
        mainSlide.style.transform = `translateY(-${heightWindow * activeSlideIndex}px)`
        sidebar.style.transform = `translateY(${heightWindow * activeSlideIndex}px`
    }
}