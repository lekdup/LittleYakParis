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