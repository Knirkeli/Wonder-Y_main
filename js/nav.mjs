/**
 * This event listener waits for the DOM content to be fully loaded.
 * Once loaded, it gets all the links in the navigation menu and checks if their href is the same as the current page's pathname.
 * If it is, it adds the 'active' class to the link.
 * If not, it removes the 'active' class from the link.
 */
document.addEventListener('DOMContentLoaded', (event) => {
    /**
     * Get all the links in the navigation menu.
     * @type {NodeListOf<Element>}
     */
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each link
    for (var i =0; i < navLinks.length; i++) {
        /**
         * Check if the link's href is the same as the current page.
         * @type {string}
         */
        var linkPath = navLinks[i].getAttribute('href');
        if (linkPath !== '/') {
            linkPath = '/' + linkPath;
        }
        if (linkPath == window.location.pathname) {
            // Add the 'active' class to the link
            navLinks[i].classList.add('active');
        } else {
            // Remove the 'active' class from the link
            navLinks[i].classList.remove('active');
        }
    }
});