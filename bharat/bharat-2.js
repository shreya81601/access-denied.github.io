// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push('I ran towards the field. “Let me help you, Daadu,” panting.<br> I plucked, rolled, cut, and gathered till dusk.<br>“Will we get enough money now?”<br>He did not respond, but his eyes betrayed him - maybe not enough.');
text.push(" <p>I committed to helping him every day for the next month without fail.<br>“Whatever is needed for a good harvest Daadu, you got it!”</p>");
// text.push("What should I do?");


/*=======================================================================================*/
/*FOR TEXTBOX ANIMATIONS - OPEN AND CLOSE TETXBOX*/

let i = 0;

var textbox = document.getElementById("phool-textbox-intro");
var textbox_pos = document.getElementById("textbox_cont");
var text_p = document.getElementById("phool-text-intro");
var nextButton = document.getElementById("phool-text-intro-next");

nextButton.style.opacity = 0;

let height = []

for (let j = 0; j < text.length; j++) {
    text_p.innerHTML = text[j];
    height[j] = textbox.offsetHeight;
    height[j] -= 50;
    console.log(height[j]);
}

text_p.innerHTML = text[0];
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
        // if (i<text.length) { // show next button on choices
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
        // }
        // else {
        //     // nextButton.style.display = "none";
        //     showChoices();
        // }
    }
    });
}

nextButton.addEventListener("click", function() {
    if (i == text.length) {
        location.href = "bharat-fc-3.html";
    }
    else{
        closeTextBox();
    }
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


