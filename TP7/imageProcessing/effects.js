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
    let p =[];
    let dg = 0;
    let dd = 0;
    let df = 0;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            if (x == 0 || x == width ){
                dd = (getLuminosity(p=getPixel(x,y-1,oldPixels,width))-getLuminosity(p=getPixel(x,y+1,oldPixels,width)));
                df = Math.abs(dd);
            }else{
                if (y == 0 || y == height ){
                    dg = (getLuminosity(p=getPixel(x-1,y,oldPixels,width))-getLuminosity(p=getPixel(x+1,y,oldPixels,width)));
                    df = Math.abs(dg);
                }else{
                    dg = (getLuminosity(p=getPixel(x-1,y,oldPixels,width))-getLuminosity(p=getPixel(x+1,y,oldPixels,width)));
                    Math.abs(dg);
                    dd = (getLuminosity(p=getPixel(x,y-1,oldPixels,width))-getLuminosity(p=getPixel(x,y+1,oldPixels,width)));
                    Math.abs(dd);
                    df = dg + dd;
                }
            }

            if (df > threshold){
                p=[0,0,0,255];
                setPixel(x,y,newPixels,p,width);
            }else{
                p=[255,255,255,255];
                setPixel(x,y,newPixels,p,width);
            }
        }
    }
}


export { clone, negative, mirror, grayscale, contrast, edgeDetection };
