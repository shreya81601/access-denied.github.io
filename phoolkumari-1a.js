// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push("Oh, I can’t understand much - I have missed so many classes! And with all the household work, there was no time to revise or do homework. Plus, this grumbling stomach of mine is not helping at all. Oh my, my family must be hungry too…");
text.push("The weight of responsibility bears down on you, forcing you to confront a difficult decision: continue in school to build a better tomorrow, or leave to earn for your family, ensuring their immediate survival at the cost of your education. What do you want to do?");


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


