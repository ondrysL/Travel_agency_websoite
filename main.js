const navMenu = document.getElementById('nav__menu'),
      navToogle = document.getElementById('nav__toogle'),
      navClose = document.getElementById('nav__close')

if(navToogle){
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show__menu')
        navToogle.classList.add('disable')
        navClose.classList.remove('disable')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu')
        navToogle.classList.remove('disable')
        navClose.classList.add('disable')
    })
}