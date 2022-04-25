function addSegments(digitId) {
    let digitDiv = document.getElementById(digitId);
    for (let i = 0; i < 7; i++) {
        let html = `<div class="segment segment${i} off"></div>`;
        digitDiv.insertAdjacentHTML('beforeend', html);
    }
    // TODO : compléter

}

function updateDigit(digitId, value) {

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];
    let digitDiv = document.getElementById(digitId);
    for (let i = 0; i < 7; i++) {
        if (segmentStates[value][i] == 1) {
            let html = `segment segment${i} on`;
            digitDiv.children[i].className = html;
        } else {
            let html = `segment segment${i} off`;
            digitDiv.children[i].className = html;
        }
    }
    // TODO : compléter
}

function updateDigitTime() {
    let now = new Date();
    let hourstens = String(now.getHours())[0];
    let hoursunits = String(now.getHours())[1];
    let minutestens = String(now.getMinutes())[0];
    let minutesunits = String(now.getMinutes())[1];

    updateDigit("hours-tens", hourstens);
    updateDigit("hours-units", hoursunits);
    updateDigit("minutes-tens", minutestens);
    updateDigit("minutes-units", minutesunits);

}

function updatePoint() {
    let now = new Date();
    let seconds = now.getSeconds();
    let digitpoint = document.getElementById("colon");
    if (seconds % 2 == 0) {
        let html = `colon off`;
        digitpoint.className = html;
    } else {
        let html = `colon on`;
        digitpoint.className = html;
    }

}

function init() {
    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
    // TODO : compléter
}

function main() {

    init();
    setInterval(updateDigitTime, 1000);
    setInterval(updatePoint, 1000)

    // TODO : compléter
}


main();
