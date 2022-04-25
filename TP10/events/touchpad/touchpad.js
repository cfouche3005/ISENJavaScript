function touch(event){
    let rect = event.target.getBoundingClientRect()
    let pourcentx = (event.clientX-rect.left)/(rect.right-rect.left)*100;
    let pourcenty = (event.clientY-rect.top)/(rect.bottom-rect.top)*100;
    console.log(pourcentx,pourcenty);
    let screen = document.getElementById("screen");
    let screenContext = screen.getContext("2d");
    screenContext.clearRect(0,0,screen.width,screen.height)
    screenContext.beginPath();
    screenContext.fillStyle="grey";
    screenContext.arc(pourcentx*screen.width/100, pourcenty*screen.height/100,  30,0,Math.PI*2);
    screenContext.closePath();
    screenContext.fill();



}




function main(){
    let touchpad = document.getElementById("touchpad");
    touchpad.addEventListener('mousemove',touch);

}


main();