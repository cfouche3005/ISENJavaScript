function randomComponent() {
    return Math.floor(Math.random() * 255);
}

function randomColor() {
    return `rgb(${randomComponent()},${randomComponent()},${randomComponent()})`
}

function changeColor(event) {
    event.target.style.backgroundColor = randomColor();
}

function main() {
    let colorButton = document.getElementById("colorButton");
    colorButton.addEventListener("click", changeColor);

}


main();