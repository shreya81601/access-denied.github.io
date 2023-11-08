// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push("I remember sitting beside my grandfather on the fields listening to his farming stories. Oh, what fun it was! But he is sick now and it is the harvest season. I want to help him. Good yield means happy Daadu. But he also says that school will teach me the future of farming. I want to become a big farmer one day.");
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


