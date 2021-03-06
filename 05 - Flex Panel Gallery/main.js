const panels = document.querySelectorAll('.panel');

function openPanel() {
  console.log('ok');
  this.classList.toggle('open')
}
function openActive(e) {
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active')
  }
}
panels.forEach(panel => {
  panel.addEventListener('click', openPanel);
  panel.addEventListener('transitionend', openActive);
})