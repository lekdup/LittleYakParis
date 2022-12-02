// navigation button
const navButton = document.querySelector(".nav-toggle");
const links = document.querySelector((".links"))

navButton.addEventListener('click', () =>{
    const isOpened = navButton.getAttribute('aria-expanded');
    if(isOpened === 'false'){
        navButton.setAttribute('aria-expanded', 'true')
    } else {
        navButton.setAttribute('aria-expanded', 'false')
    }

    links.classList.toggle("show-links")
})