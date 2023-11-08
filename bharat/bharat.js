// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push("I am, Surya. I am known to have a quick temper, much like my father. I like to hang out with my rowdy gang of friends. Earning a quick buck in street gambling makes me thrilled. I want to sit inside Babu’s government office all day and order people around. But for that, I will have to go to school.");
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


