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