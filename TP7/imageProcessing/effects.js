function getPixel(x, y, image,width) {
    let pixel = (4*(width*y+x));
    return [image[pixel],image[pixel+1],image[pixel+2],image[pixel+3]];
}

function setPixel(x, y,image,pixel,width) {
    for (let i = 0; i < 4; i++) {
        image[(4*(width*y+x))+i] = pixel[i]
    }
}

function clone(width, height, oldPixels, newPixels){
    for(let i = 0; i < 4* width*height; i++)
        newPixels[i] = oldPixels[i];
}


function negative(width, height, oldPixels, newPixels){
    let p =[];
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            p = getPixel(j,i,oldPixels,width);
            p[0] = 255-p[0];
            p[1] = 255-p[1];
            p[2] = 255-p[2];
            setPixel(j,i,newPixels,p,width);
        }
    }
}


function mirror(width, height, oldPixels, newPixels){
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            setPixel(j,i,newPixels,getPixel(width-j,i,oldPixels,width),width);
        }
    }
}


function getLuminosity(p){
    return (p[0]+p[1]+p[2])/3;
}
function grayscale(width, height, oldPixels, newPixels){
    let p =[];
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            let px = [];
            p = getPixel(j,i,oldPixels,width);
            px[0] = getLuminosity(p);
            px[1] = getLuminosity(p);
            px[2] = getLuminosity(p);
            px[3]= p[3];
            setPixel(j,i,newPixels,px,width);
        }
    }
}


function contrast(width, height, oldPixels, newPixels, c){
    let p =[];
    let F = ((259*(c+255))/(255*(259-c)));
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            p = getPixel(j,i,oldPixels,width);
            p[0] = ((p[0]-128)*F+128) ;
            p[1] = ((p[1]-128)*F+128);
            p[2] = ((p[2]-128)*F+128);
            setPixel(j,i,newPixels,p,width);
        }
    }
}


function edgeDetection(width, height, oldPixels, newPixels, threshold) {

}


export { clone, negative, mirror, grayscale, contrast, edgeDetection };



