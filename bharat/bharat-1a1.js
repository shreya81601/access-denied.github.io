// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
// text.push("<p>Another hour goes by. The class is more chaotic than ever.</p> <p>“So, this is how it is going to be every day?” Surya asked the teacher.<br>“Yes, beta. Just yesterday Mishra Sir was stabbed by a boy in class 11.”</p> <p>Surya’s eyes widened in shock. “Stabbed?”</p>");
text.push("<p>Hesitantly, “Ma’am, we won't study today?”</p> <p>“How can I teach in such chaos?” the teacher screeched at me.<br>Learning requires discipline and I refuse to enforce it here.<br>“Just yesterday Mishra Sir was stabbed by a boy in class 11. He asked for the boy’s homework. The boy had not done it and felt ashamed. So…</p> <p>He’s still in the hospital.”</p>");
// text.push("What should I do?");



/*=======================================================================================*/
/*FOR TEXTBOX ANIMATIONS - OPEN AND CLOSE TETXBOX*/

let i = 0;

var textbox = document.getElementById("phool-textbox-intro");
var textbox_pos = document.getElementById("textbox_cont");
var text_p = document.getElementById("phool-text-intro");
var nextButton = document.getElementById("phool-text-intro-next");
var choices = document.getElementById("phool-choices-intro");

nextButton.style.opacity = 0;
choices.style.opacity = 0;
choices.style.display = "none";

let height = []

for (let j = 0; j < text.length; j++) {
    // if (j == text.length - 1) { // i.e. choices page 
    //     choices.style.display = "block";
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
        location.href = "surya-factcheck-1.html";
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
        // bg_cont.style.backgroundImage = bg[i];
    }
}



