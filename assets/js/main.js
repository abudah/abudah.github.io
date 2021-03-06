/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    })
    // HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections= document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)
console.log("Here is the element:")
console.log(sections)
function scrollActive() {
    const scrollY = window.pageYOffset
     Array.prototype.forEach.call(sections,current => {
     const sectionHeight = current.offsetHeight
     const sectionTop = current.offsetTop - 50
     sectionId = current.getAttribute('id')
     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
     } else {
          document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })


}