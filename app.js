let imgDiv = document.getElementById("img")
let button = document.getElementById("dice-roll");

let imgsArray = ["images/dice1.png", "images/dice2.png","images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result
}

button.addEventListener("click", function() {

    let index = getRandomNumber(0, imgsArray.length - 1);
     imgDiv.innerHTML = `<img src="${imgsArray[index]}">`
})
