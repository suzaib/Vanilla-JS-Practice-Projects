// Logic Behind the program: 
// eg: The person's date of birth is 20 Dec 1989 and the current Date is 10 Jan 2010
// We will calculate three things: 
// 1) How many days are remaining in the year the person was born that is 11 days 
// 2) How many days are there until today from the start of the curren year that is 10 days
// 3) How many years have passed in between that is years between 1990 and 2010


//Accessing the html elements
let userInput=document.querySelector("#date");
let calculateButton=document.querySelector(".input-box button");
let msg=document.querySelector(".msg p");

//Making sure the user doesn't enter a date greater than today
userInput.max=new Date().toISOString().split("T")[0];

//Defining our variable to be used
let daysRemaining;
let yearsRemaining;
let daysInMonth;

let i;

let d1,d2;
let m1,m2;
let y1,y2;

let ageFound=false;

//Defining a function to check for leap year: 
//A year is leap year if it is divisible by 4 and if in case it is a century year then it should be divisible by 400 as well for example 1900 isn't a leap year
const checkForLeapYear=(year)=>{
    if(year%100==0){
        if(year%400){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if(year%4==0){
            return true;
        }
        else{
            return false;
        }
    }
}

//Defining a function to calculate days wrt to each month
const calculateDaysAccToMonth=(month,year)=>{
    if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
        daysInMonth=31;
    }
    else if(month==2){
        if(checkForLeapYear(year)){
            daysInMonth=29;
        }
        else{
            daysInMonth=28;
        }
    }
    else {
        daysInMonth=30;
    }
}

//Calculating how many days to come until today from the start of the month
const daysToCome=(date,month,year)=>{
    i=1;
    while(i<month){
        calculateDaysAccToMonth(i,year);
        daysRemaining+=daysInMonth;
        i++;
    }
    daysRemaining+=date;
}

//Calculating days remaining in that particular year when the person was born
const daysRemainingInYear=(date,month,year)=>{
    calculateDaysAccToMonth(month,year);
    daysRemaining=daysInMonth-date;
    while(month<=11){
        month++;
        calculateDaysAccToMonth(month,year);
        daysRemaining+=daysInMonth;
    }
}

//Finally calculating Age
const calculateAge=()=>{
    let birthDate=new Date(userInput.value);
    
    d1=birthDate.getDate();
    m1=birthDate.getMonth()+1;
    y1=birthDate.getFullYear();

    let today=new Date();

    d2=today.getDate();
    m2=today.getMonth()+1;
    y2=today.getFullYear();
    if(d1 && m1 && y1){
        ageFound=true;
        if(y2>y1){
            daysRemainingInYear(d1,m1,y1);
            if(y2-y1>1){
                yearsRemaining=y2-y1-1;
            }
            else{
                yearsRemaining=0;
            }
            daysToCome(d2,m2,y2);
        }
    
        else{
            yearsRemaining=0;
            if(m1<m2){
                calculateDaysAccToMonth(m1,y1);
                daysRemaining=daysInMonth-d1;
                daysRemaining+=d2;
                while(m2>m1+1){
                    calculateDaysAccToMonth(m1+1,y1);
                    daysRemaining+=daysInMonth;
                    m1++;
                }
            }
            else{
                daysRemaining=d2-d1;
            }
        }
    }

    else{
        ageFound=false;
    }
}

//Adding the calculate age functionality to the calculate button defined earlier
calculateButton.addEventListener("click",()=>{
    calculateAge();
    if(ageFound){
        if(daysRemaining>=365){
            daysRemaining=daysRemaining-365;
            yearsRemaining++;
        }
        msg.innerText=`You are ${yearsRemaining} Years old and ${daysRemaining} days old`
    }
    else{
        msg.innerText="Please enter your date correctly";
    }

})
