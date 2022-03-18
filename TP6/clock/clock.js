setInterval(drawClock,1000)

function drawClock(){

    let canvas = document.getElementById("clock");
    let context = canvas.getContext("2d");
    drawBackground(context);
    for (let i = 1; i < 13; i++ ){
        drawNumber(context,i);
    }

    let now = new Date();
    let hours = now.getHours();
    let  minutes = now.getMinutes();
    let seconds = now.getSeconds();
    drawHoursHand(context,hours,minutes)
    drawMinutesHand(context,minutes)
    drawSecondsHand(context,seconds)
}

function fillRoundedRectangle(context, x, y, width, height, radius){
    context.save();
    context.beginPath();
    context.translate(x,y);
    context.arc(-x+radius,-y+radius,radius,Math.PI,-Math.PI/2);
    context.arc(x-radius,-y+radius,radius,-Math.PI/2,0);
    context.arc(x-radius,y-radius,radius,0,Math.PI/2);
    context.arc(-x+radius,y-radius,radius,Math.PI/2,Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    context.restore();


}

function drawBackground(context) {
    context.save();
    fillRoundedRectangle(context,250,250,500,500,100)
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.beginPath();
    context.arc(250, 250, 225, 0, Math.PI*2);
    context.closePath();
    context.fill();
    context.restore();
}

function drawNumber(context,number) {
    context.save();
    context.beginPath();
    context.translate(250,250);
    context.rotate((Math.PI/6)*number);
    context.translate(0,-165);
    context.textAlign = "center";
    context.font = "50px Arial";
    context.fillText( number,0,0);
    context.restore();

}

function drawHoursHand(context, hours,minutes) {
    context.save();
    context.translate(250,250);
    context.rotate((Math.PI/6)*hours+((Math.PI/360)*minutes));
    context.translate(0,-150);
    context.beginPath();
    context.rect(-2.5,0,5,150);
    context.fill();
    context.closePath();
    context.restore();

}
function drawMinutesHand(context, minutes, seconds){
    context.save();
    context.translate(250,250);
    context.rotate((Math.PI/30)*minutes+((Math.PI/360)*seconds));
    context.translate(0,-190);
    context.beginPath();
    context.rect(-2.5,0,5,190);
    context.fill();
    context.closePath();
    context.restore();

}

function drawSecondsHand(context, secondes){
    context.save();
    context.translate(250,250);
    context.rotate((Math.PI/30)*secondes);
    context.translate(0,-210);
    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "red";
    context.rect(-2.5,0,5,210);
    context.fill();
    context.closePath();
    context.restore();
}

drawClock();

