//Accessing our HTML elements
let dateBox=document.querySelector("#date");
let dayBox=document.querySelector("#day");
let monthBox=document.querySelector("#month");
let yearBox=document.querySelector("#year");

//Making an array of days and months since the getDay/getMonth method gives result in numeric value
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

//Initialising our elements with the current Date
let date=new Date().getDate().toString().padStart(2,'0');
let day=days[new Date().getDay()];
let month=months[new Date().getMonth()];
let year=new Date().getFullYear();

dateBox.innerText=date;
dayBox.innerText=day;
monthBox.innerText=month;
yearBox.innerText=year;

//Making sure our program shows correct date and time
setInterval(()=>{
    let date=new Date().getDate().toString().padStart(2,'0');
    let day=days[new Date().getDay()];
    let month=months[new Date().getMonth()];
    let year=new Date().getFullYear();

    dateBox.innerText=date;
    dayBox.innerText=day;
    monthBox.innerText=month;
    yearBox.innerText=year;
},1000)
