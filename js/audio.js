const audio = document.getElementById('audio');
const btn = document.getElementById('playPauseBtn');

// Set initial icon based on autoplay
if (audio.paused) {
  btn.textContent = '►'; // Play icon
} else {
  btn.textContent = '❚❚'; // Pause icon
}

// Toggle play/pause on button click
btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Update button icon based on playback state
audio.addEventListener('play', () => {
  btn.textContent = '❚❚';
});

audio.addEventListener('pause', () => {
  btn.textContent = '►';
});