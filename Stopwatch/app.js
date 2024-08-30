//Accessing our HTML elements
let displayTime=document.querySelector("#displayTime");
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let reset=document.querySelector("#reset");

//setting our currentTimer value to null;
let timer=null;

//making variables in an  array 
let [seconds,minutes,hours]=[0,0,0];

//we make a function that increases second count by 1 and adjusts minutes and hours accordingly when seconds reaches 60.
const stopwatch=()=>{
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++
        }
    }

    //here we make sure that every numerical value is atleast two digits , if not we add 0 in front of it
    let h=hours<10 ? "0"+hours:hours;
    let m=minutes<10 ? "0"+minutes:minutes;
    let s=seconds<10 ? "0"+seconds:seconds;

    //and every time this function runs ,it updates the time shown in displayTime element as below
    displayTime.innerText=h+":"+m+":"+s;
}

//This function clears the interval stopping the watch
const watchStop=()=>{
    clearInterval(timer);
}

//This function resets the stopwatch by clearing the interval and then equalling sec, min and hr to 0
const watchReset=()=>{
    clearInterval(timer);
    [seconds,minutes,seconds]=[0,0,0];
    displayTime.innerHTML="00:00:00";
}

//This function starts the watch
const watchStart=()=>{

    //whenever the watchStart function is called it starts an interval , however if more than one interval is running then it will cause problem since two intervals mean
    //the watch will move two times faster as two intervals will be called per second
    //therefore we need to clear the first interval using this if block , before we start a new Interval
    if(timer!==null){
        clearInterval(timer);
    }

    //reInitialising the timer again when starting the watch
    timer=setInterval(stopwatch,1000);
}

//Attaching eventListeners to stop , start and reset our stopwatch
start.addEventListener("click",watchStart);
stop.addEventListener("click",watchStop);
reset.addEventListener("click",watchReset);
