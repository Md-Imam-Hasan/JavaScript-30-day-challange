// selecting all neccessary dom element
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('.player__slider');
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');
// console.dir(video);

// add functionality
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function changePlayButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percnet = (video.currentTime/video.duration)*100;
  progressBar.style.flexBasis = `${percnet}%`
}

function scrub(e){
  const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
  video.currentTime = scrubTime;
}

// hook up the eventlistener
video.addEventListener('click', togglePlay);
video.addEventListener('play', changePlayButton);
video.addEventListener('pause', changePlayButton);
video.addEventListener('progress', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButton.forEach(button => button.addEventListener('click', skip));
range.forEach(slide => slide.addEventListener('change', handleRangeUpdate))
range.forEach(slide => slide.addEventListener('mousemove', handleRangeUpdate))
let mouseDown = false
progress.addEventListener('mousemove',(e)=>mouseDown && scrub(e));
progress.addEventListener('mousedown',()=>mouseDown = true);
progress.addEventListener('mouseup',()=>mouseDown = false);