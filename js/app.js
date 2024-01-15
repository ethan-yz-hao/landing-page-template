/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const main = document.querySelector('main');
const sections = main.querySelectorAll('section');
const n_section = sections.length;
const nav_lst_frag = document.createDocumentFragment();
const nav_lst = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// build the nav
for (let i=0; i <n_section; i++) {
    const lst_item = document.createElement('li');
    lst_item.innerText = `Section ${i+1}`;
    lst_item.className = 'menu__link'
    nav_lst_frag.appendChild(lst_item);
}
nav_lst.appendChild(nav_lst_frag);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToSection(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
    const section_name = evt.target.innerText;
    document.querySelector(`section[data-nav="${section_name}"]`).scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
nav_lst.addEventListener('click', scrollToSection);

// Set sections as active
function makeActive(){
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 200 && box.bottom >= 300) {
            if (! section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class')
            }
        } else {
            if (section.classList.contains('your-active-class')) {
                section.classList.remove('your-active-class')
            }
        }
    }
}
document.addEventListener("scroll", makeActive)