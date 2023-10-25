/*=======================================================================================*/
/*LOADING PAGE*/

var startBtn = document.getElementById("button-landing-pg")
var loadingPage = document.getElementById("loading");
var welcText = document.getElementById("welcome");
var music = new Audio('data/bg1.mp3');
var mute = document.getElementById("muteBtn");
var x = document.getElementById("vol");

function fade() {
  loadingPage.style.opacity = "0";
  loadingPage.style.zIndex = "-1";
  welcText.style.opacity = "0";
  welcText.style.zIndex = "-1";
  music.play();
  music.loop = true;
}

startBtn.addEventListener("click", fade);

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

/*function myFunction(x) {
  x.classList.toggle("fa fa-volume-up");
}*/

function on() {
    document.getElementById("disclaimer").style.display = "block";
    console.log("hi");
}

function off() {
    document.getElementById("disclaimer").style.display = "none";
}