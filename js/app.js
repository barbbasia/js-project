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

//this works
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


// Scroll to anchor ID using scrollTO event


    /**
     * End Main Functions
     * Begin Events
     *
     */

    function sectionInViewport(section) {
        const bounding = section.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    document.addEventListener('scroll', function () {
        console.log("you've clicked document");
        for (let i = 0; i < allSections.length; i++) {
            // const h1 = document.querySelector('h1');
            if (sectionInViewport(allSections[i])) {
                console.log(allSections[i] + 'IS in the viewport!');
                allSections[i].classList.add("your-active-class");
            } else {
                console.log(allSections[i] + 'NOT in the viewport!');
                allSections[i].classList.remove("your-active-class");
            }
        }
    }, true)

// Build menu 

    const navList = document.getElementById('navbar__list');
    for (let i = 1; i <= allSections.length; i++) {
        const linkSection = "#section" + i;
        const sectionTitle = allSections[i - 1].querySelector('h2');
        const htmlContent = "<li class=\"navbar__menu li\"><a class=\".navbar__menu .menu__link\" href=" + linkSection + ">" + sectionTitle.textContent + "</a></li>";
        navList.insertAdjacentHTML('beforeend', htmlContent);
    }

// Scroll to section on link click

// Set sections as active


//extra functions, might be helpful:

    const t1 = performance.now();
    console.log('This code took ' + (t1 - t0) + ' milliseconds.');


}); //end of DOMContentLoaded event listener