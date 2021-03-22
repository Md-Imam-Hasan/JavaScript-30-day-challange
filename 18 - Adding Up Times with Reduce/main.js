const timeNodeList = [...document.querySelectorAll('[data-time]')];

const seconds = timeNodeList
.map(node=>node.dataset.time)
.map(timeCode=>{
  const [mins,secs]= timeCode.split(':').map(parseFloat);
  return mins*60+secs;
})
.reduce((total,seconds)=>total+seconds,0);

let secondsLeft = seconds;

const hour = Math.floor(secondsLeft/3600);
secondsLeft%=3600;

const mins = Math.floor(secondsLeft/60);
secondsLeft%=60;

console.log(hour,mins,secondsLeft);