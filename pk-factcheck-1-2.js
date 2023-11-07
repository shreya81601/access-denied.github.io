/*=======================================================================================*/
/*FOR TEXTBOX ANIMATIONS*/

let i = 0;

var text = [];
// text.push("<h1>DID YOU KNOW?</h1> <p>The Government of India implemented the midday meal policy to provide FREE LUNCHES to all students, just like Phoolkumari, as an incentive to come to school. Yet, there are frequent instances where the meals fail to reach schools or are unfit for consumption, eroding the policy's credibility and purpose.</p>");
// text.push("As Phoolkumari, what do you want to do?");
text.push("<img src='data/pk-fc-1-3.png' alt='pk-fc-1' width='100%'>");
// text.push("");

var textbox = document.getElementById("welcome");
var text_p = document.getElementById("sal-text");
var nextButton = document.getElementById("next-btn");
var choices = document.getElementById("phool-choices-intro");

// console.log(choices);

nextButton.style.opacity = 0;
choices.style.display = "none";

let height = []

for (let j = 0; j < text.length; j++) {
    // if (j == text.length - 1) { // i.e. choices page 
    //     // choices.style.display = "block";
    // }
    text_p.innerHTML = text[j];
    height[j] = textbox.offsetHeight;
    height[j] -= 50;
    console.log(height[j]);
}

text_p.innerHTML = text[0];
choices.style.display = "none";
textbox.style.height = "0%";
textbox.style.paddingTop = "0";
textbox.style.paddingBottom = "0";

openTextBox();

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
    duration: 700,
    easing: "easeInOutSine",
    opacity: [0, 1],
    complete: ()=> {
        // console.log("print"),
        i++;
        console.log(i);
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
        //     textbox.style.borderTop = "1px solid white";
        //     textbox.style.borderBottom = "1px solid white";
        //     showChoices();
        // }
    }
    });
}

nextButton.addEventListener("click", function() {
    if (i == text.length) {
        location.href = "phoolkumari-1a1-2.html";
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
    opacity: [1, 0],
    complete: ()=>{
        changeInnerText();
        openTextBox();
    }
    });
}

function changeInnerText() {
    if (i<text.length) {
        text_p.innerHTML=text[i];
        // height = textbox.offsetHeight;
        // console.log("text length="+text.length+"i="+i);
    }
    // textbox.style.display = "none";
    // textbox.style.height = "auto";
    // height = textbox.offsetHeight;
    // console.log(height);
    // textbox.style.display = "block";
}

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
    .add({
        targets: '#phool-intro3',
        opacity: [0, 1],
        direction: "forward",
        // delay: anime.stagger(300),
        delay: 100,
        duration: 1000,
    })
}
