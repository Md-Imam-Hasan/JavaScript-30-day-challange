const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.strokeStyle = '#BADA55';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'luminosity';
// ctx.globalCompositeOperation = 'exclusion';
// ctx.globalCompositeOperation = 'difference';
// ctx.globalCompositeOperation = 'destination-atop';
ctx.globalCompositeOperation = 'source-out';
// ctx.globalCompositeOperation = 'xor';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue=0;
let i=100;
let isDirection = true;

const draw = (e) => {
  if (!isDrawing) return
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.lineWidth = i;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if(hue>360){
    hue=0;
  }
  if(i>=200||i<=35){
    isDirection=!isDirection;
  }
  if(isDirection){
    i++;
  } else{
    i--;
  }
  console.log(e);
  console.log(i);
}
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);