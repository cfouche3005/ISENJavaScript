function touch(event){
    let rect = event.target.getBoundingClientRect()
    let x = (event.clientX-rect.left)/(rect.right-rect.left)*100;
    let y = (event.clientY-rect.top)/(rect.bottom-rect.top)*100;
    console.log(x,y);
    let screen = document.getElementById("screen");
    let screenContext = screen.getContext("2d");
    screenContext.clearRect(0,0,screen.width,screen.height)
    screenContext.beginPath();
    screenContext.fillStyle="grey";
    screenContext.arc(x*rect.width, y*rect.height, 30,0,Math.PI*2);
    screenContext.closePath();
    screenContext.fill();



}




function main(){
    let touchpad = document.getElementById("touchpad");
    touchpad.addEventListener('mousemove',touch);

}


main();