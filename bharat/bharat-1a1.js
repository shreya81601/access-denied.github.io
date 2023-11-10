// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
// text.push("<p>Another hour goes by. The class is more chaotic than ever.</p> <p>“So, this is how it is going to be every day?” Surya asked the teacher.<br>“Yes, beta. Just yesterday Mishra Sir was stabbed by a boy in class 11.”</p> <p>Surya’s eyes widened in shock. “Stabbed?”</p>");
text.push("“Is the teacher not coming again?” I ask Jeetu.<br>“Oh, she had to go for election duty. She will come after a few weeks.”<br>“What? They are on leave again? They just went for some other duty a month back!”<br>I was disheartened. ");
text.push("Government school teachers are also government employees. They are absent from school for 2 - 2.5 months due to election duty, census collection and various other administrative tasks and training. This further causes student dropouts.");
text.push("“Will she bring storybooks?”<br>Jeetu shrugged. “Most days, she just sits and does admin work. She doesn't teach much… You can read that book there on the shelf.”<br>“Ah, that has pages missing.”<br>“At least we have that much.”");
// text.push("<p>I opened a book and started studying.</p> <p>“This is not making any sense to me, Jeetu. Can you explain?”“Oh this, we learnt it last year. How do you not know?”“They never taught us.”“How did you pass your exam then? This was a major chunk on it.”“What do you mean? They never fail us. Even if we write nothing on the exam…<br>I don’t need to learn to pass.”</p>");

var bg = [];
bg.push("url('../data/empty-hall.jpeg')");
bg.push("url('../data/dyk.jpg')");
bg.push("url('../data/empty-hall.jpeg')");
var bg_cont = document.getElementById("bg_img");


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
        location.href = "bharat-1a1b.html";
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
        bg_cont.style.backgroundImage = bg[i];
    }
    // if (i==3) {
    //     bg_cont.style.bottom = null;
    //     bg_cont.style.top = "0%";
    // }
}



