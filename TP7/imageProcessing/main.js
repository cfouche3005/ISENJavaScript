import { applyEffect } from "./launcher.js"
import { clone, negative, mirror, grayscale, contrast, edgeDetection } from "./effects.js"

function main(){
    //applyEffect("lena.png", clone);
    //applyEffect("lena.png", negative);
    //applyEffect("lena.png", mirror);
    applyEffect("lena.png", grayscale);
    //applyEffect("lena.png", contrast, 150);
    //applyEffect("lena.png", contrast, -150);
    //applyEffect("lena.png", edgeDetection, 50);

}

main();

