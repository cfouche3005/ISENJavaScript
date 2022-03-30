import * as dom from "./domFunctions.js"

function fromP1ToP10Test(){

    selectElements(dom.fromP1ToP10());
}

function fromP10ToP8Test(){

    selectElements(dom.fromP10ToP8());
}

function fromP6ToP2Test(){

    selectElements(dom.fromP6ToP2());
}

function search1Test(){

    selectElements(dom.search1());
}

function search2Test(){

    selectElements(dom.search2());
}

function search3Test(){

    selectElements(dom.search3());
}

function getElementByIdTest(id){

    selectElements(dom.getElementById(id));
}

function selectElements(elements){

    if(!elements){  // does nothing on null or undefined
        return;
    }
    // maps an element to an array of one element if necessary
    if(!elements.length){
        elements = [elements];
    }

    for(let element of elements){

        if(element && element.className && element.className.indexOf("selected") < 0){
            element.className += " selected";
        }
    }

}

// note : selectElements (utility function for internal use only) is not exported
export { fromP1ToP10Test, fromP10ToP8Test, fromP6ToP2Test, search1Test, search2Test, search3Test, getElementByIdTest };


