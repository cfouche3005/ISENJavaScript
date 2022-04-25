function touch(event){
    const rect = event.target.getBoundingClientRect()
    let pourcentx = (event.clientX-rect.left)/(rect.right-rect.left)*100;
    let pourcenty = (event.clientY-rect.top)/(rect.bottom-rect.top)*100;
    console.log(pourcentx,pourcenty);



    const screen = document.getElementById("screen");
    const screenContext = screen.getContext("2d");
    screenContext.clearRect(0,0,screen.width,screen.height)
    screenContext.beginPath();
    screenContext.fillStyle="grey";
    screenContext.arc(pourcentx*screen.width/100, pourcenty*screen.height/100, 15 ,0,Math.PI*2);
    screenContext.closePath();
    screenContext.fill();



}




function main(){
    const touchpad = document.getElementById("touchpad");
    touchpad.addEventListener('mousemove',touch);

}


main();