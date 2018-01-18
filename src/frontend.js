function displayNumber(number) {
    let placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = number;
}

const dice = new Dice(6);
const button = document.getElementById("button");

button.addEventListener('click', () => {
    let result = dice.roll();
    displayNumber(result);
});