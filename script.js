if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    artwork: [
      { src: 'album-art.png', sizes: '96x96', type: 'image/png' },
      { src: 'album-art@2x.png', sizes: '192x192', type: 'image/png' },
    ]
  });

  navigator.mediaSession.setActionHandler('play', function() { /* Play music */ });
  navigator.mediaSession.setActionHandler('pause', function() { /* Pause music */ });
  navigator.mediaSession.setActionHandler('previoustrack', function() { /* Previous track */ });
  navigator.mediaSession.setActionHandler('nexttrack', function() { /* Next track */ });
}
