// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push("<p>Oh no, why is there no teacher here?</p> <p>I look around me. The classroom isn’t in order. Many students are out playing in the ground, some are idly waiting, some are studying.</p>");
text.push("<p>Just as I opened my book to study, Jeetu Bhaiya barged in panting. “His father…” Jeetu leaned closer, “...committed suicide. He couldn't pay off his loan.”</p>");
text.push('<p>Oh no, my Daadu is also a farmer. Does he also have loans?<br>His image flashed before my eyes.</p>');
text.push("What should I do?");


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


/*=======================================================================================*/
/*FOR TEXTBOX ANIMATIONS - OPEN AND CLOSE TETXBOX*/

let i = 0;

var textbox = document.getElementById("phool-textbox-intro");
var text_p = document.getElementById("phool-text-intro");
var nextButton = document.getElementById("phool-text-intro-next");
var choices = document.getElementById("phool-choices-intro");
var image = document.getElementById("thought");

nextButton.style.opacity = 0;
choices.style.opacity = 0;
choices.style.display = "none";

let height = []

for (let j = 0; j < text.length; j++) {
    if (j == text.length - 1) { // i.e. choices page 
        choices.style.display = "block";
    }
    text_p.innerHTML = text[j];
    height[j] = textbox.offsetHeight;
    height[j] -= 50;
    console.log(height[j]);
}

text_p.innerHTML = text[0];
choices.style.display = "none";
image.style.display = "none";
image.style.opacity = "0";
textbox.style.height = "0%";
textbox.style.paddingTop = "0";
textbox.style.paddingBottom = "0";


openWideTextBox();

function openWideTextBox() {
    anime.timeline({
        easing: "easeInOutSine",
    })
    .add({
    targets: textbox,
    width: ["0%", "100%"],
    // height: ["0%", "0%"],
    direction: "forward",
    delay: 100,
    duration: 500,
    complete: ()=> {
        openTextBox();
    }
    });
}

function openTextBox() {
    console.log("textbox opening");

    anime.timeline({
        easing: "easeInOutSine",
    })
    // to open eyes - for text 1
    .add({
    targets: textbox,
    height: ["0%", height[i]+"px"],
    paddingTop: ["0", "35px"],
    paddingBottom: ["0", "35px"],
    direction: "forward",
    delay: 3,
    duration: 500,
    easing: "easeInOutSine",
    complete: ()=> {
        // console.log("print"),
        i++;
        if (i<text.length) { // show next button on choices
            if (i==3) {
                image.style.display = "block";
                anime.timeline({
                    targets: image, // make next button appear
                }).add({
                    opacity: [0, 1],
                    direction: "forward",
                    delay: 3,
                    duration: 300,
                    easing: "easeInOutSine",
                    complete: ()=> {
                        nextButton.style.display = "block";
                        anime.timeline({
                            targets: nextButton, // make next button appear
                        }).add({
                            opacity: [0, 1],
                            direction: "forward",
                            delay: 300,
                            duration: 500,
                            easing: "easeInOutSine",
                        });
                    }
                });
            }
            else {
                nextButton.style.display = "block";
                anime.timeline({
                    targets: nextButton, // make next button appear
                }).add({
                    opacity: [0, 1],
                    direction: "forward",
                    delay: 300,
                    duration: 500,
                    easing: "easeInOutSine",
                });
            }
        }
        else {
            // nextButton.style.display = "none";
            showChoices();
        }
    }
    });
}

nextButton.addEventListener("click", function() {
    closeTextBox();
})

function closeTextBox() {
    // i++;

    console.log("textbox closed");
    nextButton.style.opacity = 0; // make opacity 0 before closing
    nextButton.style.display = "none";

    anime.timeline({
        easing: "easeInOutSine",
    })
    // to close eyes - for text 1
    .add({
    targets: textbox,
    height: ["0%"],
    paddingTop: ["35px", "0"],
    paddingBottom: ["35px", "0"],
    direction: "forward",
    delay: 3,
    duration: 500,
    complete: ()=>{
        changeInnerText();
        openTextBox();
    }
    });
}

function changeInnerText() {
    if (i<text.length) {
        text_p.innerHTML=text[i];
    }
}