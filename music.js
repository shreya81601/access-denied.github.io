/*=======================================================================================*/
/*FOR BG MUSIC - MUTE BUTTON*/

var music = new Audio('data/bg1.mp3');
var mute = document.getElementById("muteBtn");
var x = document.getElementById("vol");

music.volume = 0.1;

mute.addEventListener("click", function() {
    if (music.muted==true) {
      music.muted=false;
      music.play();
      x.className = "fa fa-volume-up";
    } else {
      music.muted=true;
      music.pause();
      /*x.classList.toggle("fa-volume-off");*/
      x.className = "fa fa-volume-off";
    }
  });

// document.addEventListener("onload", music.play());
