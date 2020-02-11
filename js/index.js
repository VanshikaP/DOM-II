// Your code goes here
const navbar = document.querySelector('.main-navigation');
navbar.addEventListener('mouseenter', () => {
    navbar.style['background-color'] = 'rgb(32,178,170)';
});
navbar.addEventListener('mouseleave', () => {
    navbar.style.removeProperty('background-color');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(nav => {
    nav.addEventListener('mouseenter', () =>{
        nav.style.color = 'white';
    });
    nav.addEventListener('mouseleave', () =>{
        nav.style.removeProperty('color');
    });
});

const content = document.querySelector('body');
window.addEventListener('resize', () => {
    content.style['background-image'] = 'linear-gradient(to bottom right, papayawhip, lightseagreen)';
    content.style.color = 'white';
});

const home = document.querySelector('.home');
window.addEventListener('scroll', () => {
    home.style['background-image'] = 'linear-gradient(to bottom right, lightseagreen, white)';
});