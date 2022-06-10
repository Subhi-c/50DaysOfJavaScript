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
  text.style.opacity = scale(load,0,100,1,0);
  loading.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

const scale = (num,in_min,in_max,out_min,out_max) =>{
  return((num - in_min)*(out_max - out_min)) / (in_max - in_min) + out_min
}