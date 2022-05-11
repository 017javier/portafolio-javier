const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.header__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');

    if(window.scrollY > 40){
        document.querySelector('.header .navbar').classList.add('active');
    }else{
        document.querySelector('.header .navbar').classList.remove('active');
    }
}

// animation
const sr = ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2500,
    delay: 300
});

sr.reveal('.hero__h1, .hero__h3, .hero__p, .hero__buttons', {
    delay: 2000,
    origin: 'left',
    interval: 400
});
sr.reveal('.hero__img', {
    delay: 1000,
    origin: 'rigth',
    interval: 400,
});
sr.reveal('.titulos', {
    delay: 300,
    origin: 'left',
    interval: 200
});