

//nav item hover effect
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const line = $('.line')
const links = $$('.nav-link')
const nav = $('.nav')
let lineHeight = 5

links.forEach(link => {
    link.addEventListener( 'mouseenter' , (e) => {
        console.log(link.parentElement.parentElement.offsetWidth);
        line.style.width = `${link.offsetWidth}px`
        line.style.top = `${link.offsetHeight + lineHeight}px`
        line.style.right = `${link.parentElement.parentElement.offsetWidth - (link.offsetLeft + link.offsetWidth)}px`
    })
    nav.addEventListener('mouseleave' , () => {
        line.style.width = 0
    })
});


// product hover effect
const products = $$('.product')
products.forEach(product => {
    product.addEventListener('mouseenter' , () => {
        $('.product.focus').classList.remove('focus')
        
        product.classList.add('focus')
    })
})


// see more
const seeMore = $('#see-more')
const seeMoreSection = $('.potw-see-more')

seeMore.setAttribute('onclick' , 'show()')
function show () {
    seeMoreSection.style.display = 'block'
    seeMore.innerText = 'Hide away'
    seeMore.setAttribute('onclick' , 'hide()')
    qtyOverlay.style.opacity = 0
    qtyOverlay.style.visibility = 'hidden'
}
function hide () {
    seeMoreSection.style.display = 'none'
    seeMore.innerText = 'See more'
    seeMore.setAttribute('onclick' , 'show()')
    qtyOverlay.style.opacity = 1
    qtyOverlay.style.visibility = 'visible'
}


// show quantity on overlay
const qtyOverlay = $('.qty-overlay')
const qtyShow = $('.qty-show')
const [...seeMoreProducts] = $$('.potw-see-more .product')
qtyShow.innerText = `+${seeMoreProducts.length}`


// count-down timer
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 50000)
const hoursElm = $('.hours')
const minutesElm = $('.minutes')
const secondsElm = $('.seconds')
let countdownInterval

function countdown () {
    const now = new Date().getTime()
    const countdown = new Date(countdownDate).getTime()
    const different = (countdown - now) / 1000

    let hours = Math.floor(different / (60 * 60))
    let minutes = Math.floor(different % (60 * 60) / 60)
    let seconds = Math.floor(different % 60)

    hours < 10 ? hours = `0${hours}` : hours
    minutes < 10 ? minutes = `0${minutes}` : minutes
    seconds < 10 ? seconds = `0${seconds}` : seconds
    
    let htmls = ''
    htmls = `
        <span class="hours">${hours}</span>:
        <span class="minutes">${minutes}</span>:
        <span class="seconds">${seconds}</span>
    `

    hours == 0 && minutes == 0 && seconds == 0 ? $('.display').outerHTML = 'Time out' : $('.display').innerHTML = htmls
}

window.addEventListener( 'load' , () => {
    countdownInterval = setInterval(countdown, 1000)
})