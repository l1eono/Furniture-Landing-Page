
let menuBar = document.querySelector('.bar-menu')

let navMobile = document.querySelector('.nav')

menuBar.addEventListener('click', () => {
    navMobile.classList.toggle('menu-active')
})

// ScrollReveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.hero-bg`, {delay: 500})
sr.reveal(`.hero-left`, {origin: 'left', delay: 500})
sr.reveal(`.whyus`, {delay: 600})
sr.reveal(`.minimalist-banner`, {origin: 'left', delay: 500})
sr.reveal(`.minimalist .container .content-right`, {origin: 'right', delay: 550})
sr.reveal(`.products .container .section-title`, {delay: 500})
sr.reveal(`.service-banner`, {delay: 450})
sr.reveal(`.services .container .content-left`, {origin: 'left', delay: 800})
sr.reveal(`.product-box, .partner-logo, .user-feedback`, {interval: 100, delay: 600})
sr.reveal(`.feedback .section-title`, {delay: 600})
