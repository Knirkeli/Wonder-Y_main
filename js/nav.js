// run code after dom content has loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Get all the links in the navigation menu
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each link
    for (var i =0; i < navLinks.length; i++) {
        //check if the link's href is the same as the current page
        var linkPath = navLinks[i].getAttribute('href');
        if (linkPath !== '/') {
            linkPath = '/' + linkPath;
        }
        if (linkPath == window.location.pathname) {
            //add the active class to the link
            navLinks[i].classList.add('active');
        } else {
            //remove the active class from the link
            navLinks[i].classList.remove('active');
        }
    }
});