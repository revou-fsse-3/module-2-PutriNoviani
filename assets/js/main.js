/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__data, home__form-group,.footer__container`)
sr.reveal(`.join__form`, {origin: 'right'})
sr.reveal(`.join__data`, {origin: 'left'})
sr.reveal('.home__form-group', { origin: 'top', distance: '50px', duration: 1500, delay: 200 });
sr.reveal('.about__container', { origin: 'top', distance: '50px', duration: 1500, delay: 200 });
sr.reveal(`.popular__card`, {interval: 200})

// Find all input elements in class "input__group"
const inputElements = document.querySelectorAll('.input__group input');
// Loop through each input element
inputElements.forEach(inputElement => {
    inputElement.addEventListener('focus', () => {
        // Focus enters the input
        inputElement.nextElementSibling.style.top = '0';
        inputElement.nextElementSibling.style.fontSize = '0.8rem';
    });

    inputElement.addEventListener('blur', () => {
        // Focus exits the input
        if (inputElement.value === '') {
            inputElement.nextElementSibling.style.top = '50%';
            inputElement.nextElementSibling.style.fontSize = 'var(--h3-font-size)';
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const dateInput = document.getElementById('date');
    const travelTypeSelect = document.getElementById('travel-type');
    const searchButton = document.getElementById('search-button');

    // Get a reference to the "search-button" element by its ID
    searchButton.addEventListener('click', function (e) {
        if (!dateInput.checkValidity() || travelTypeSelect.value === "") {
            alert('Please fill in the required fields: Date and Travel Type');
            e.preventDefault();
        } else {
            alert('Success in submitting'); // Displays a success message if validation is met
            form.reset(); // Reset the form to its initial (empty) state
        }
    });
});










