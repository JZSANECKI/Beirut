const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('.nav2 a')
const callBtn = document.querySelector('.call-btn')


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

if (scrollY >= 150){
    callBtn.classList.add('call-btn-up')
}
else {
    callBtn.classList.remove('call-btn-up')
}
console.log(scrollY)

}