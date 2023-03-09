const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('.nav2 a')
const homeBtn = document.querySelector('.home-btn')


window.onscroll = () => {

section.forEach(sec =>{

let top = window.scrollY
let offset = sec.offsetTop - 250
let height = sec.offsetHeight
let id = sec.getAttribute('id')

if (top >=offset && top < offset + height){
    navLink.forEach(link =>{
        link.classList.remove('nav2-active')
        document.querySelector('.nav2 a[href*='+ id +']').classList.add('nav2-active')
    })
}


})

if (scrollY >= 300){
    homeBtn.classList.add('home-btn-up')
}
else {
    homeBtn.classList.remove('home-btn-up')
}
console.log(scrollY)

}