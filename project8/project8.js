function showTime(){

let date=new Date();//for generating date

let hours=date.getHours();//0-23
let minutes=date.getMinutes();//0-59
let seconds=date.getSeconds();//0-59


let formatHours = convertFormat(hours);//to convert the time means when its morning it should give AM &opposite

hours= check(hours);//to check that there occur no 21(9)pm,15(3)pm etc.

//done so that it will not have zero in it
hours=addZero(hours);
minutes=addZero(minutes);
seconds=addZero(seconds);
//placing in id for displaying
document.getElementById('clock').innerHTML=`${hours}:${minutes}:${seconds}:${formatHours}`

//function to converting
function convertFormat(time){

    let format="AM";
//condition checking for after 12.
    if(time>=12){
        format="PM"
    }
    return format;//always return as it is a function (used in formatHours);
}





//function for not letting converting into digits agter 12 .
function check(time){

if(time>12){

    time=time-12;
}
if(time==0){
    time=12;

}
return time;

}



//for not having 0;
function addZero(time){

if(time<10){
    time= "0" +time
}

return time;
}




}
showTime()//calling the function in order to run 
setInterval(showTime,1000);//setting interval so that it will run after every 1 second