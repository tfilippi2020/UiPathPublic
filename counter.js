const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const ctrDisplay = document.getElementById('count');
const resetBtn = document.getElementById('reset');

let counter = 0;

const setCtrValue = async() => {
  ctrDisplay.innerHTML = counter;
}
setCtrValue();

incrementBtn.addEventListener('click',async ()=>{
  counter++;
  setCtrValue();
})

decrementBtn.addEventListener('click',async ()=>{
  counter--;
  setCtrValue();
})

resetBtn.addEventListener('click',async ()=>{
  counter=0;
  setCtrValue();
})
