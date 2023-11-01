// THIS IS SPECIFIC JAVASCRIPT FILE FOR EACH PAGE - WHICH STORES STORY CONTENT AND CHOICES

var text = [];
text.push('Yay! The bell rang. I will get my meal now. But time passed. Where is the meal?<br>"The food yesterday was so bad," a girl whispered behind me.<br>"Let it at least come,” the boy next to her replied.<br>"I will take some home,” another girl mumbled.<br>"Only if it is fit to be eaten, you silly Geeta!"<br>My heart started to sink.');
text.push("What should I do?")

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


