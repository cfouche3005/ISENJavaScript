function press(event) {
    let keyDOM = document.getElementById(`key-${event.key}`);
    keyDOM.classList.remove("released");
    keyDOM.classList.add("pressed");
}

function released(event) {
    let keyDOM = document.getElementById(`key-${event.key}`);
    keyDOM.classList.remove("pressed");
    keyDOM.classList.add("released");
}

function main(){
    const body = document.body;
    body.addEventListener('keydown',press);
    body.addEventListener('keyup',released);
}


main();