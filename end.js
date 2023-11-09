/*=======================================================================================*/
/*FOR TEXTBOX ANIMATIONS*/

let i = 0;

var text = [];
// text.push("<p>Meet the poor Churiwal farming family where the father is a violent drunk, the mother is a house helper, unable to fend for her children, and the grandfather is too weak to tend to the fields.</p> ");
// text.push("<p>THE THREE CHILDREN?</p> <p>Amidst the gruelling struggle to make ends meet, they juggle between working menial jobs to earn a daily living, shouldering household responsibilities, and attending school.</p> ");

// text.push("<p>Thank you for being a part of our story.</p> <p>If you would like to contribute, donate, make a difference, or share your ideas, stories, or experiences, please contact us below!</p>")
text.push("<p>Thank you for being a part of our story.</p> <p>If you would like to contribute, donate, make a difference, or share your ideas, stories, or experiences, please contact us below!</p><div class='contact'> <a href='mailto:shreya81601@gmail.com' title='Email Now'><i class='fa fa-envelope-open-o'></i> access.denied@gmail.com</a> </div>");



var textbox = document.getElementById("welcome");
var text_p = document.getElementById("sal-text");
var nextButton = document.getElementById("next-btn");
var choices = document.getElementById("phool-choices-intro");

// console.log(choices);

nextButton.style.opacity = 0;
choices.style.opacity = 0;
choices.style.display = "none";

let height = []

for (let j = 0; j < text.length; j++) {
    if (j == text.length - 1) { // i.e. choices page 
        choices.style.display = "flex";
    }
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

    if (i == text.length-1) {
        choices.style.display = "block";
        console.log("here");
    }

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
        if (i<text.length) { // show next button on choices
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
    choices.style.display = "flex";
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
