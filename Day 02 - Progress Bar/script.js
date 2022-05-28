const progress = document.getElementById('progress')
const previous = document.getElementById('prev')
const next = document.getElementById('next') 
const circles = document.querySelectorAll('.circle')

let activestate = 1 

next.addEventListener('click', ()=>{
  activestate++;

  if(activestate > circles.length){
    activestate = circles.length
  }
  update()

})

previous.addEventListener('click', ()=>{
  activestate--;

  if(activestate < 1){
    activestate = 1
  }
  update()

})

function update(){
  circles.forEach((circle, idx) => {
    if(idx < activestate){
      circle.classList.add('active')
    } else{
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length-1) / (circles.length -1) *100 + '%' ; 

  if(activestate === 1){
    previous.disabled = true
  }
  else if(activestate === 4){
    next.disabled = true
  }
  else{
    previous.disabled = false
    next.disabled = false
  }
}