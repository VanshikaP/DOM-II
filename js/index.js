// Your code goes here
const navbar = document.querySelector('.main-navigation');
navbar.addEventListener('click', (event) => {
    navbar.style['background-color'] = 'rgb(32,178,170)';
    event.stopPropagation();
    
});

const navArea = document.querySelector('nav');
navArea.addEventListener('click', (event) => {
    navArea.style['background-color'] = 'lightseagreen';
    event.stopPropagation();
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(nav => {
    nav.addEventListener('mouseenter', (event) =>{
        event.preventDefault();
        nav.style.color = 'white';
        nav.style.background = 'lightseagreen';
    });
    nav.addEventListener('mouseleave', (event) =>{
        nav.style.removeProperty('color');
        nav.style.removeProperty('background');
    });
});

const content = document.querySelector('body');
window.addEventListener('resize', (event) => {
    content.style['background-image'] = 'linear-gradient(to bottom right, papayawhip, hotpink)';
});

const home = document.querySelector('.home');
window.addEventListener('scroll', (event) => {
    home.style['background-image'] = 'linear-gradient(to bottom right, lightseagreen, white)';
});

window.addEventListener('keypress', () =>{
    home.style.border = 'thick solid red';
    home.style.color = 'white';
});
window.addEventListener('keyup', () => {
    home.style.removeProperty('border');
    home.style.removeProperty('color');
});
window.addEventListener('contextmenu', () => {
    alert('You have pressed right click');
})

const mainHeading = document.querySelector('.intro h2');
mainHeading.addEventListener('click', () => {
    mainHeading.style['text-shadow'] = '2px 2px 5px green';
});

const mainImg = document.querySelector('.intro img');
mainImg.addEventListener('dblclick', () => {
    mainImg.style['box-shadow'] = '2px 2px 10px lightseagreen';
});

let dragArea = document.createElement('div');
dragArea.textContent = 'Drag Heading Here';
dragArea.style['font-size'] = '20px';
dragArea.style.background = 'white';
dragArea.style.width = '70%';
dragArea.style.margin = '10px auto';
dragArea.style.height = '80px';
dragArea.style['border-radius'] = '10px';
document.querySelector('.content-section').append(dragArea);

const heading = document.querySelectorAll('.content-section h2');
heading.forEach(h => {
    h.setAttribute('draggable', 'true');
    h.setAttribute('id', 'dragtarget');
});

document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
  });
  
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  });