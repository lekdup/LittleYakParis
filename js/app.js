// navigation button
const navButton = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector((".links"))

navButton.addEventListener('click', () =>{
    const isOpened = navButton.getAttribute('aria-expanded');
    if(isOpened === 'false'){
        navButton.setAttribute('aria-expanded', 'true')
    } else {
        navButton.setAttribute('aria-expanded', 'false')
    }
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
    // linksContainer.classList.toggle("show-links")
})

// fixed Navbar
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > 0){
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 500){
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
});