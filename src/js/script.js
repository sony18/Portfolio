// DOM  element cache
const menuIcon_div = document.querySelector('#menu-icon');
const sideNav_ul = document.querySelector('.side-nav');
let intro_h2 = document.querySelector('#landing .intro');
var nav_ul = document.querySelector("#navbar-nav");
var sideNav_link_a = sideNav_ul.querySelectorAll("a");
var link_a = nav_ul.querySelectorAll('a');

// Rotating Menu side menu
menuIcon_div.addEventListener('click', toggleSideNav);
let showNav = false;
// / show menu & close menu toggle function
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

//  typing effect-Landing page
setTimeout(function () {
    intro_h2.style.visibility = 'visible';
},100)


// Remove class function
const removeActiveClass =()=>{
  return  link_a.forEach(link => link.classList.remove('active'))
}
const removeSidenavActiveClass=()=>{
    return  sideNav_link_a.forEach(link => link.classList.remove('active'))
  }

 const updateActiveClass=(e)=>{
    console.log(e.target.parentElement.parentNode.id)
    if( e.target.parentElement.parentNode.id === 'navbar-nav'){
        removeActiveClass();
        e.target.classList.add('active')
    }else if (e.target.parentElement.parentNode.id ==='side-nav' ){

    removeSidenavActiveClass();
    e.target.classList.add('active')
    }
}
// Event listener
nav_ul.addEventListener('click', updateActiveClass )
sideNav_ul.addEventListener( 'click', updateActiveClass )


