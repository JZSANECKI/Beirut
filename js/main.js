const menuSections = document.querySelectorAll('.menu-section')
const menuTabs = document.querySelectorAll('.menu-tab')
const showInfo = id => {
    
   console.log(id); 


   menuSections.forEach(section => section.style.display ='none')
  
   menuTabs.forEach(tab => tab.classList.remove('menu-tab-active'))

   document.getElementById(id).style.display='block'
   const currentActiveButton = document.querySelector(`[data-id=${id}]`)
   currentActiveButton.classList.add('menu-tab-active')
 
}
const box = document.querySelector('header');
const width = box.offsetWidth;
const headerCenter = document.querySelector('.prawy-add')

const center = () =>{
   headerCenter.style.left = width/2 + "px"
}
center ()
console.log(width)
