let audioContext;
let audioElement;
let track;

document.addEventListener('DOMContentLoaded', () => {
  audioElement = document.getElementById('player');

  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  track = audioContext.createMediaElementSource(audioElement);
  track.connect(audioContext.destination);

  // Set up Media Session API for controls
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: 'bhojpuri song',
      artist: 'neelkamal',
      album: 'Album Name',
      artwork: [
        { src: 'https://vfy.netlify.app/img/logo.png', sizes: '96x96', type: 'image/png' },
        { src: 'https://vfy.netlify.app/img/logo.png', sizes: '192x192', type: 'image/png' },
      ]
    });

    navigator.mediaSession.setActionHandler('play', function() { audioElement.play(); });
    navigator.mediaSession.setActionHandler('pause', function() { audioElement.pause(); });
    navigator.mediaSession.setActionHandler('previoustrack', function() { /* Previous track */ });
    navigator.mediaSession.setActionHandler('nexttrack', function() { /* Next track */ });
  }

  // Play audio when the user interacts with the page
  document.getElementById('playButton').addEventListener('click', () => {
    audioContext.resume().then(() => {
      audioElement.play();
    });
  });
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    audioContext.suspend();
  } else if (document.visibilityState === 'visible') {
    audioContext.resume();
  }
});
