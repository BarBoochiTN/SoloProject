var songs = ["./songs/song1.mp3","./songs/song2.mp3","./songs/song3.mp3","./songs/song4.mp3","./songs/song5.mp3", "./songs/song6.mp3","./songs/song7.mp3","./songs/song8.mp3","./songs/song9.mp3", "./songs/song10.mp3"];
  
  var currentSong = 0;
  function playNextSong() {
    document.getElementById("audio").src = songs[currentSong];

    document.getElementById("audio").play();
    currentSong = (currentSong + 1) % songs.length;
  }
  document.getElementById("play").addEventListener("click", playNextSong);


  