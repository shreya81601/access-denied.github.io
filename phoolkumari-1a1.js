// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push('<p>Yay! The bell rang. But, I stand in an empty room. Where is the meal?</p> <p>"The food yesterday was so bad," a girl whispered behind me.<br>"Let it at least come,” the boy next to her replied.<br>"I will take some home." another girl mumbled.<br>"Only if it is fit to be eaten, you silly Geeta!"</p> <p>My heart started to sink.</p>');
text.push("<p>I decided to approach the teacher.</p> </p>Moved by my plight and courage to ask, she decided to take action and contact the higher authorities to arrange for food.<br>Excitement bubbled up within me as I saw the food arrive.</p>");
text.push("<p>But eww,  what food is this?</p> <p>“I can’t take this home!” quietly exclaimed Geeta. The other children too held their plates, some staring, some scoffing at the worm infested food.</p> <p>A few threw the food, a few picked out the insects and remaining packed for their family in torn polythene bags. What a mess!</p>")
text.push("What should I do?");

var bg = [];
bg.push("url('data/classroom.jpg')");
bg.push("url('data/meal.avif')");
bg.push("url('data/spoilt-food.jpg')");
var bg_cont = document.getElementById("bg_img");


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
var textbox_pos = document.getElementById("textbox_cont");
var text_p = document.getElementById("phool-text-intro");
var nextButton = document.getElementById("phool-text-intro-next");
var choices = document.getElementById("phool-choices-intro");

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
    complete: ()=>{
        changeInnerText();
        openTextBox();
    }
    });
}

function changeInnerText() {
    if (i<text.length) {
        text_p.innerHTML=text[i];
        bg_cont.style.backgroundImage = bg[i];
    }
    if (i==2) {
        textbox.style.top = "5%";
        // textbox_pos.style.textEmphasisPosition = "5%";
        textbox_pos.style.left = null;
        textbox_pos.style.right = "5%";
        // textbox.style.left = "5%";
        // bg_cont.style.backgroundPositionX = "right";
    }
}


