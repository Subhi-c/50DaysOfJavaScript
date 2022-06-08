const text = document.querySelector('.loading-text')
const loading = document.querySelector('.loading')

let load = 0;
let int= setInterval( lloading ,30)

function lloading(){
  load++
  if(load > 99){
    clearInterval(int)
  }

  text.innerText = `${load}%`;
}