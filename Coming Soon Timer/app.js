//Accessing our HTML elements
let daysBox=document.querySelector("#days");
let hoursBox=document.querySelector("#hours");
let minutesBox=document.querySelector("#minutes");
let secondsBox=document.querySelector("#seconds");

//Since we always want our website to show some remaining time , 
//Hence we will have a dynamic target year which is always ahead of current Year
let currentYear=new Date().getFullYear();

//Defining Target year to be greater than 1;
let targetYear=currentYear+1;

//Determing a launch date based on this target year
let launchDate=`Jan 1,${targetYear} 00:00:00`

//The getTime() method gives the times passed (in milliseconds) since unix epoch
//unix epoch is 1 Jan 1970
//hence the launchTime is time passed since 1 Jan 1970
let launchTime=new Date(launchDate).getTime();

let x=setInterval(()=>{

    //The currentTime represents how much time from 1 Jan 1970 has passed 
    //to the execution of this code 
    let currentTime=new Date().getTime();

    //distance now gives the difference between currentTime and launchTime(in milliseconds);
    let distance=launchTime-currentTime;

    //Here we are converting the milliseconds difference to days, hours, minutes, and seconds
    let days=Math.floor(distance/(1000*60*60*24));
    let hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((distance%(1000*60*60))/(1000*60));
    let seconds=Math.floor((distance%(1000*60))/1000);

    //Then we show the days ,hours ,min ,sec remaining
    daysBox.innerText=days;
    hoursBox.innerText=hours;
    minutesBox.innerText=minutes;
    secondsBox.innerText=seconds;

    //In case our launch Time is reached we simply show 00:00:00:00 on screen and clear the interval as well
    //However this will never happen since we have chosen a dynamic launch date
    if(distance<0){
        clearInterval(x);
        daysBox.innerText="00";
        hoursBox.innerText="00";
        minutesBox.innerText="00";
        secondsBox.innerText="00";
    }
},1000)
