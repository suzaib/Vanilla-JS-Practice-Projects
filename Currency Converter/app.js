//Accessing our HTML elements
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


//This url will be used to fetch the API
const BASE_URL="https://v6.exchangerate-api.com/v6/9835a8c069d63d062cc0de11/latest"

//Here we loop through both the select tags defined earlier
for(let select of dropdowns){

    //We also loop through each currCode from our countryList in code.js
    for(currCode in countryList){

        //We now fill up the select tag with newOptions each with a separate currency code
        newOption=document.createElement("option");
        newOption.value=currCode;
        newOption.innerText=currCode;

        //Here we make sure that USD is selected by default in the from tab
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }

        //Here we make sure that INR is selected by default in the to tab
        if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }

        //The newOption created is now appended to the select tag
        select.append(newOption);
    }

    //We also need to change the flag as soon as the options in the select tab are changed
    select.addEventListener("change",(event)=>{
        updateFlag(event.target);
    });
}

//Here is the function to updateExchangeRates , since it fetches data from an external API therefore we have made it async
const updateExchangeRates=async ()=>{
    let amount=document.querySelector(".amount input")
    let amtVal=amount.value;

    if(amtVal==="" || amtVal<0){
        amtVal=1;
        amount.value=1;
    }

    //Defining a pattern that will test the input values to be a strict numerical value
    const numberPattern=/^[0-9]+(\.[0-9]+)?$/;
        //  / is used to wrap the expression
        //  ^ determines the how the pattern will start
        //  [0-9]+ tells that one or more digits should match 0-9
        //  \. we can't use . since it matches with any character, therfore \. , it makes sure it mathes only when a literal dot is there
        //  ? means the argument before it was optional
        //  $ tell the pattern should end here


    if(numberPattern.test(amtVal)){

        //Here we have our URL that will fetch us the current rates
        const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}`
        let response=await fetch(URL);
        let data=await response.json();
        let rate=data.conversion_rates[toCurr.value.toUpperCase()];

        //Now we display the finalAmount on the basis of data recieved
        let finalAmount=amtVal*rate;
        msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
    }

    // In case the input was strictly not a number , then the innerText will display the problem 
    else{
        msg.innerText="Please input a valid integer"
    }




}

//A function to opdate flags
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

//Attaching eventListener to update Exchange rates
btn.addEventListener("click",(event)=>{

    //pressing the btn refreshes the page by default , therefore that behaviour needs to be prevented
    event.preventDefault();
    updateExchangeRates();

})

//We call the updateExhangeRates function as soon as the window is loaded to show some default exchange rates
window.addEventListener("load",updateExchangeRates)
