/*=======================================================================================*/
/*LOADING PAGE*/

var startBtn = document.getElementById("button-landing-pg")
var loadingPage = document.getElementById("loading");
var welcText = document.getElementById("welcome");

// var music = new Audio('data/bg1.mp3');
// var mute = document.getElementById("muteBtn");
// var x = document.getElementById("vol");

var visited = false;
music.volume = 0.1;

// if (visited == false) {
//   loadingPage.display = "block";
//   visited = true;
// }
// else {
//   loadingPage.display = "none";
// }

// if (!sessionStorage.getItem('visited')) {
//   // Show the landing text
//   loadingPage.display = "block";
//   // Set the visited flag in sessionStorage
//   sessionStorage.setItem('visited', 'true');
// }
// else {
//   loadingPage.display = "none";
// }

if (sessionStorage.getItem('visited')) {
  // console.log("hi i am in visited");
  loadingPage.style.display = "none";
  // console.log(sessionStorage.getItem('visited'));
  fade();
}
else {
  loadingPage.style.display = "block";
  // console.log("hi i am unvistied");
  sessionStorage.setItem('visited', 'true');
  // console.log(sessionStorage.getItem('visited'));
}

function fade() {
  loadingPage.style.opacity = "0";
  loadingPage.style.zIndex = "-1";
  welcText.style.opacity = "0";
  welcText.style.zIndex = "-1";
  music.play();
  music.loop = true;
}

startBtn.addEventListener("click", fade);

// mute.addEventListener("click", function() {
//     if (music.muted==true) {
//       music.muted=false;
//       music.play();
//       x.className = "fa fa-volume-up";
//     } else {
//       music.muted=true;
//       music.pause();
//       /*x.classList.toggle("fa-volume-off");*/
//       x.className = "fa fa-volume-off";
//     }
//   });

function on() {
    document.getElementById("disclaimer").style.display = "block";
    console.log("hi");
}

function off() {
    document.getElementById("disclaimer").style.display = "none";
}