/**
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
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
const header = document.querySelector('header.main__hero');

// Go to Top li
const goto_top = document.createElement('li');
goto_top.innerText = `Go To Top`;
goto_top.className = 'menu__link';

/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// build the nav
for (let i=0; i <n_section; i++) {
    const lst_item = document.createElement('li');
    lst_item.innerText = `Section ${i+1}`;
    lst_item.className = 'menu__link';
    lst_item.setAttribute('data-nav', `Section ${i+1}`);
    nav_lst_frag.appendChild(lst_item);
}
nav_lst.appendChild(nav_lst_frag);

// Scroll to anchor ID using scrollTO event
function scrollToSection(evt) {
    const section_name = evt.target.getAttribute('data-nav');
    document.querySelector(`section[data-nav="${section_name}"]`).scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
nav_lst.addEventListener('click', scrollToSection);

// Set sections as active
function makeSectionActive(){
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 200 && box.bottom >= 300) {
            if (! section.classList.contains('section-active')) {
                section.classList.add('section-active');
            }
        } else {
            if (section.classList.contains('section-active')) {
                section.classList.remove('section-active');
            }
        }
    }
}
document.addEventListener("scroll", makeSectionActive);

// Set navbar as active
function makeNavBarActive(){
    let ifFound = false;
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        const section_name = section.getAttribute('data-nav');
        const li = document.querySelector(`li[data-nav="${section_name}"]`);
        if (ifFound) {
            if (li.classList.contains('navbar-active')) {
                li.classList.remove('navbar-active');
            }
            continue;
        }
        if (box.bottom >= 300) {
            if (! li.classList.contains('navbar-active')) {
                li.classList.add('navbar-active');
            }
            ifFound = true;
        } else {
            if (li.classList.contains('navbar-active')) {
                li.classList.remove('navbar-active');
            }
        }
    }
}
document.addEventListener("scroll", makeNavBarActive);


// Add go to top
function checkTop() {
    const box = header.getBoundingClientRect();
    if (box.bottom <= 50) {
        if (! nav_lst.contains(goto_top)) {
            nav_lst.insertBefore(goto_top, nav_lst.firstChild);
        }
    } else {
        if (nav_lst.contains(goto_top)) {
            nav_lst.removeChild(goto_top);
        }
    }}
document.addEventListener('scroll', checkTop);

// Scroll to top
function scrollToTop() {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}
goto_top.addEventListener('click', scrollToTop);