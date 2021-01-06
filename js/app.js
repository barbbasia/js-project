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

document.addEventListener('DOMContentLoaded', function () {

    /**
     * Define Global Variables
     *
     */

    const allSections = document.querySelectorAll('[data-nav]');

    /**
     * End Global Variables
     * Start Helper Functions
     *
     */

    const t0 = performance.now();

    /**
     * End Helper Functions
     * Begin Main Functions
     *
     */

// build the nav
// Add class 'active' to section when near top of viewport
// Set sections as active

    function sectionInViewport(section) {
        const bounding = section.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            // bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            // bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const menu = document.getElementsByClassName('navbar__menu');

    document.addEventListener('scroll', function (event) {
        event.preventDefault();
        menu[0].classList.remove('hidden');
        for (let i = 0; i < allSections.length; i++) {
            const senctionNo = i + 1;
            const linkedButton = document.querySelector('[data-nav=\'' + senctionNo + '\']');
            if (sectionInViewport(allSections[i])) {
                linkedButton.classList.add('active-button');
                allSections[i].classList.add('your-active-class');
            } else {
                linkedButton.classList.remove('active-button');
                allSections[i].classList.remove('your-active-class');
            }
        }

        setTimeout(function hideMenu() {
            menu[0].classList.add('hidden');
        }, 10000);

    }, true);

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click

    function respondToTheClick(event) {
        event.preventDefault();
        if (event.target.nodeName === 'DIV') {
            console.log('A button was clicked. Content: ' + event.target.textContent + ', Leading to Section ' + event.target.dataset.nav);
            const elData = event.target.dataset.nav;
            const linkedSection = document.querySelector('[data-nav=\'Section ' + elData + '\']');
            const top = linkedSection.offsetTop - 50; //Getting Y position of the target element
            window.scrollTo({
                top: top,
                id: linkedSection.id,
                behavior: 'smooth'
            });
        } else {
            console.log('you\'ve missed the button and clicked: ' + event.target.nodeName);
        }
    }

    const navMenu = document.getElementById('navbar__list');
    navMenu.addEventListener('click', respondToTheClick);

    /**
     * End Main Functions
     * Begin Events
     *
     */

// Build menu

    const navList = document.getElementById('navbar__list');
    for (let i = 1; i <= allSections.length; i++) {
        const sectionTitle = allSections[i - 1].querySelector('h2');
        const htmlContent = '<li class=\'navbar__menu li\'><div class=\'navbar__menu menu__link\' data-nav=\'' + i + '\'>' + sectionTitle.textContent + '</div></li>';
        navList.insertAdjacentHTML('beforeend', htmlContent);
    }

    const t1 = performance.now();
    console.log('This code took ' + (t1 - t0) + ' milliseconds.');

}); //end of DOMContentLoaded event listener
