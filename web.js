burger = document.querySelector('.burger');
logo = document.querySelector('.logo');
container1 = document.querySelector('.container1');
nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    container1.classList.toggle('v-class-resp');
    logo.classList.toggle('v-class-resp');
    nav.classList.toggle('v-class-resp');
});


