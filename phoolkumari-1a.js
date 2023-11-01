// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push("In the crowded classroom, you try to focus on the teacher's words, but your mind is clouded with a whirlwind of thoughts. The lessons seem to drift past you, leaving you feeling utterly lost and disconnected. You've missed so many classes that catching up feels impossible, especially without the time to revise or do homework. ");
text.push("Furthermore, hunger gnaws at your stomach. As you sit there, your thoughts drift to your family at home. They must be very hungry too. While you will get your midday meal in a few hours, they won’t.");
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


