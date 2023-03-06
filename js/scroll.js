const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('.nav2 a')


window.onscroll = () => {

section.forEach(sec =>{

let top = window.scrollY
let offset = sec.offsetTop - 150
let height = sec.offsetHeight
let id = sec.getAttribute('id')

if (top >=offset && top < offset + height){
    navLink.forEach(link =>{
        link.classList.remove('nav2-active')
        document.querySelector('.nav2 a[href*='+ id +']').classList.add('nav2-active')
    })
}


})




}