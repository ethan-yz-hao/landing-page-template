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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */



/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const main = document.querySelector('main');
const n_section = main.querySelectorAll('section').length;
const nav_lst_frag = document.createDocumentFragment();

for (let i=0; i <n_section; i++) {
    const lst_item = document.createElement('li');
    lst_item.innerText = `Section ${i+1}`;
    nav_lst_frag.appendChild(lst_item);
}

const nav_lst = document.getElementById('navbar__list');
nav_lst.appendChild(nav_lst_frag);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active