const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll',active)
active()
function active(){
  const bottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top
    if(top < bottom){
      box.classList.add('show')
    }
    else{
      box.classList.remove('show')
    }
  })
}
