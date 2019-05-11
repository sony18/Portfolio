// DOM  element cache
const menuIcon_div = document.querySelector('#menu-icon');
const sideNav_ul = document.querySelector('.side-nav');
let intro_p = document.querySelector('#landing .intro');
var nav_ul = document.querySelector("#navbar-nav");
var sideNav_link_a = sideNav_ul.getElementsByTagName("a");
var link_a = nav_ul.getElementsByTagName('a');

// Rotating Menu side menu
menuIcon_div.addEventListener('click', toggleSideNav);
// Set initial state of menu
let showNav = false;
// / show menu or close menu toggle function
function toggleSideNav() {
    if (!showNav) {
        menuIcon_div.classList.add('close');
        sideNav_ul.classList.add('show');
        //set state of nav menu true;
        showNav = true;
    } else {
        menuIcon_div.classList.remove('close');
        sideNav_ul.classList.remove('show');
        //set menu state false;
        showNav = false;
    }
}

// script for typing effect-Landing page
setTimeout(function () {
    intro_p.style.visibility = 'visible';
}, 3000)

// adding active class to current link
console.log(link_a);
// Event listener for navbar list item
for (var i = 0; i < link_a.length; i++) {
    link_a[i].addEventListener('click', function () {
        // get list of active class
        var currentLink = document.querySelectorAll('.active');
        if (currentLink.length > 0) {
            currentLink[0].className = currentLink[0].className.replace('active', "");
        }
        this.className += "active";
    })
}

// // adding active class to Side nav list item
for (var i = 0; i < sideNav_link_a.length; i++) {
    sideNav_link_a[i].addEventListener('click', function () {
        var currentSideNavLink = document.querySelectorAll('.active');
        if (currentSideNavLink.length > 0) {
            currentSideNavLink[0].className = currentSideNavLink[0].className.replace("active", "");
        }
        this.className += "active";
    });
}