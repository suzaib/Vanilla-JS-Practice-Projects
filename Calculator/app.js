// Accessing our html elements
let displayBox=document.querySelector("#displayBox");
let btns=document.querySelectorAll(".btn");

// Making arrays of specific types
let numbers=["1","2","3","4","5","6","7","8","9","0","00"];
let operators=["+","-","*","/"];


// Functions
const handleBtnClick=(event)=>{
    let displayVal=displayBox.value
    let btnVal=event.target.value;
    let lastChar=displayVal.charAt(displayVal.length-1);
    if(operators.includes(btnVal)){
        //This is being done to avoid expressions like 8**+..
        if(operators.includes(lastChar) || lastChar==="."){
            return;
        }
        displayVal+=btnVal;
    }
    else if(numbers.includes(btnVal)){
        displayVal+=btnVal;
    }
    else if(btnVal==="AC"){
        displayVal="";
    }
    else if(btnVal==="DE"){
        displayVal=displayVal.slice(0,-1);
    }
    else if(btnVal==="."){
        //This is being done to avoid expressions like 8**+..
        if(lastChar==="." || operators.includes(lastChar) || displayVal.includes(".")){
            return;
        }
        displayVal+=btnVal;
    }
    else if(btnVal==="="){
        //Making an array of characters of the string
        const chars=displayVal.split("");
        if(chars.some(char=>operators.includes(char)) && numbers.includes(lastChar)){
            displayVal=eval(displayVal);
        }
        else{
            return
        }
    }
    displayBox.value=displayVal;
    displayVal=String(displayVal);
}
btns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>handleBtnClick(event))
})
