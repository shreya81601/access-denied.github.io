// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push("I stared at the high ceiling. It's been an hour. The teacher is still not teaching. Children are running around, laughing, playing, fighting, making so much noise.");
// text.push("<p>“Ma’am, we don’t have lessons today?”</p> <p>“How can I teach in such chaos?” the teacher screeched at him.</p> <p>Surya looked around at the children - laughing, fighting, playing games, making noise, none studying.</p>");
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


