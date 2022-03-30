// ---------------- Part 2 -------------------

function fromP1ToP10(){

    let p1 = document.getElementById("p1");

    // TODO :  navigate in the DOM tree from p1 to the paragraph identified by "p10"
    //let p10 = p1.nextElementSibling.nextElementSibling.nextElementSibling;
    let p10 = p1.parentElement.children[3];
    return p10;

}

function fromP10ToP8(){

    let p10 = document.getElementById("p10");

    // TODO :  navigate in the DOM tree from p10 to the paragraph identified by "p8"
    //let p8 =  p10.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild;
    let p8 =  p10.parentElement.children[2].children[1].children[0];

    return p8;

}


function fromP6ToP2(){

    let p6 = document.getElementById("p6");

    // TODO : navigate in the DOM tree from p6 to the paragraph identified by "p2"
    //let p2 = p6.parentElement.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild;
    let p2 = p6.parentElement.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild;

    return p2;

}

// ---------------- Part 3 -------------------

function search1(){

    let elements = document.querySelectorAll(".green");       // TODO : initialize elements

    return elements;
}

function search2(){

    let elements = document.querySelectorAll("p~p");      // TODO : initialize elements
    return elements;
}

function search3(){

    let elements = document.querySelectorAll(".red+p");;       // TODO : initialize elements
    return elements;
}


// ---------------- Optional -------------------

function getElementById(id){

    return getElementByIdRec(id, document);
}

function getElementByIdRec(id, element){

    // TODO : implement

    return null;
}

// note : getElementByIdRec (utility function for internal use only) is not exported
export { fromP1ToP10, fromP10ToP8, fromP6ToP2, search1, search2, search3, getElementById };









