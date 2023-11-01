/*=======================================================================================*/
/*FOR BG MUSIC - MUTE BUTTON*/

// var music = new Audio('data/bg1.mp3');
// var mute = document.getElementById("muteBtn");
// var x = document.getElementById("vol");
// music.volume = 0.1;

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

// document.addEventListener("onload", function() {
//     music.muted=false;
//     music.play();
//     x.className = "fa fa-volume-up";
// });

// document.addEventListener("onload", music.play());


  /*=======================================================================================*/
/*FOR TEXTBOX ANIMATIONS*/

// let i = 0;

var text = [];
text.push("In the small village of Jalarpida, you, young fifteen-year-old Phool Kumari, with eyes far older than your age, find yourself perched on the edge of an unforgiving dichotomy. The worn-out textbooks in your modest room whisper promises of a better life, while the colorful bundle of balloons in your small hands bare the weight of your family's hunger.");
text.push("Unfortunately, last week too, your father once again resorted to violence, assaulting your mother and seizing her meager earnings for his alcohol addiction. In the echoing confines of your dimly-lit home, your mother's wearied voice, grumbled, \"No money for food. Figure out dinner yourselves.\"");
text.push("Her words hang heavy in the air, a constant reminder of your family's ongoing battle with poverty and desperation. You have 3 younger siblings also depending upon you.<br><br>What do you want to do?");
// console.log(text);



// SHIFTED ALL OF THIS CODE TO textbox.insertAdjacentElement. THE INDIVIDUAL NAME_FILES.JS HOLD ONLY TEXT - STORY DATA AND CHOICES ANAIMATION


// var textbox = document.getElementById("phool-textbox-intro");
// var text_p = document.getElementById("phool-text-intro");
// var nextButton = document.getElementById("phool-text-intro-next");
// var choices = document.getElementById("phool-choices-intro");

// nextButton.style.opacity = 0;
// choices.style.opacity = 0;
// choices.style.display = "none";

// // let height = textbox.offsetHeight;
// // height -= 50;
// // console.log(height);

// let height = []

// for (let j = 0; j < text.length; j++) {
//     if (j == text.length - 1) { // i.e. choices page 
//         choices.style.display = "block";
//     }
//     text_p.innerHTML = text[j];
//     height[j] = textbox.offsetHeight;
//     height[j] -= 50;
//     console.log(height[j]);
// }

// text_p.innerHTML = text[0];
// choices.style.display = "none";
// textbox.style.height = "0%";
// textbox.style.paddingTop = "0";
// textbox.style.paddingBottom = "0";


// openWideTextBox();

// function openWideTextBox() {
//     anime.timeline({
//         easing: "easeInOutSine",
//     })
//     .add({
//     targets: textbox,
//     width: ["0%", "100%"],
//     // height: ["0%", "0%"],
//     direction: "forward",
//     delay: 100,
//     duration: 500,
//     complete: ()=> {
//         openTextBox();
//     }
//     });
// }

// function openTextBox() {
//     console.log("textbox opening");

//     anime.timeline({
//         easing: "easeInOutSine",
//     })
//     // to open eyes - for text 1
//     .add({
//     targets: textbox,
//     height: ["0%", height[i]+"px"],
//     paddingTop: ["0", "35px"],
//     paddingBottom: ["0", "35px"],
//     direction: "forward",
//     delay: 3,
//     duration: 500,
//     easing: "easeInOutSine",
//     complete: ()=> {
//         // console.log("print"),
//         i++;
//         if (i<text.length) { // show next button on choices
//             nextButton.style.display = "block";
//             anime.timeline({
//                 targets: nextButton, // make next button appear
//             }).add({
//                 opacity: [0, 1],
//                 direction: "forward",
//                 delay: 300,
//                 duration: 500,
//                 easing: "easeInOutSine",
//             });
//         }
//         else {
//             // nextButton.style.display = "none";
//             showChoices();
//         }
//     }
//     });
// }

// nextButton.addEventListener("click", function() {
//     closeTextBox();
// })

// function closeTextBox() {
//     // i++;

//     console.log("textbox closed");
//     nextButton.style.opacity = 0; // make opacity 0 before closing
//     nextButton.style.display = "none";

//     anime.timeline({
//         easing: "easeInOutSine",
//     })
//     // to close eyes - for text 1
//     .add({
//     targets: textbox,
//     height: ["0%"],
//     paddingTop: ["35px", "0"],
//     paddingBottom: ["35px", "0"],
//     direction: "forward",
//     delay: 3,
//     duration: 500,
//     complete: ()=>{
//         changeInnerText();
//         openTextBox();
//     }
//     });
// }

// function changeInnerText() {
//     if (i<text.length) {
//         text_p.innerHTML=text[i];
//         // height = textbox.offsetHeight;
//         // console.log("text length="+text.length+"i="+i);
//     }
//     // textbox.style.display = "none";
//     // textbox.style.height = "auto";
//     // height = textbox.offsetHeight;
//     // console.log(height);
//     // textbox.style.display = "block";
// }

function showChoices() {
    choices.style.display = "block";
    choices.style.opacity = 1;
    anime.timeline({
        easing: "easeInOutSine"
    })
    .add({
        targets: '#phool-intro1',
        opacity: [0, 1],
        direction: "forward",
        // delay: anime.stagger(300),
        delay: 500,
        duration: 1000,
    })
    .add({
        targets: '#phool-intro2',
        opacity: [0, 1],
        direction: "forward",
        // delay: anime.stagger(300),
        delay: 100,
        duration: 1000,
    })
}

// // close eyes - transition to text 2
// tl.add({
// targets: welcomeElement,
// height: ["40%", "0%"],
// direction: "reverse",
// delay: 3000,
// duration: 300,
// easing: "easeInOutSine",
// });

// // open eyes - text 2
// tl.add({
// targets: welcomeElement,
// height: ["0%", "40%"],
// direction: "forward",
// delay: 3,
// duration: 300,
// easing: "easeInOutSine",
// update: function () {
//     setWelcomeText(
//     "You are invited to follow the stories of a few characters"
//     );
// },
// });
// // close eyes - text 2
// tl.add({
// targets: welcomeElement,
// height: ["40%", "0%"],
// direction: "reverse",
// delay: 3000,
// duration: 300,
// easing: "easeInOutSine",
// });

// // open eyes - text 3
// tl.add({
// targets: welcomeElement,
// height: ["0%", "40%"],
// direction: "forward",
// delay: 3,
// duration: 300,
// easing: "easeInOutSine",
// update: function () {
//     setWelcomeText(
//     "Your decisions and choices will effect their lives. CHOOSE WISELY!"
//     );
// },
// });
// // close eyes - text 3
// tl.add({
// targets: welcomeElement,
// height: ["40%", "0%"],
// direction: "reverse",
// delay: 3000,
// duration: 300,
// easing: "easeInOutSine",
// });