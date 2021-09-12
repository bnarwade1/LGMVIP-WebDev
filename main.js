const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
function scrollHeader(){
    const scrollTop=document.getElementById('header')
    if(this.scrollY >=200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
function scrollTop(){
    const nav=document.getElementById('scroll-top')
    if(this.scrollY >=560) scrollTop.classList.add('scroll-top');else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


//previosuly selected theme
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


//we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

// we validate if user previously choose a theme
if(selectedTheme){
    //if the validation is fulfilled we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add':'remove'](iconTheme)
}


//activate deactivate theme manually with the button
themeButton.addEventListener('click',()=>{
    //add or remove dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the current theme and icon that user chooses
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

//scroll animation
const sr= ScrollReveal({
    origin:'top',
    distance:'30px',
    duration: 2000,
    reset:true  
});
sr.reveal('.home__data, .home__img,.about__data, .about__img,.services__content, .menu__content, .contact__data, .contact__button, .footer__content',{
    interval:200
})










