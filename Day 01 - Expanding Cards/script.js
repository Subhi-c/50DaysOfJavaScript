const touch = document.querySelectorAll('.card');
touch.forEach(card => {
  card.addEventListener('click',()=>{
    removeActiveClass()
    card.classList.add('active')
  })
})

function removeActiveClass(){
  touch.forEach(card => {
    card.classList.remove('active')
  })
}