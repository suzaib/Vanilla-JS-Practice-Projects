//Accessing our HTML elements
const passwordBox=document.querySelector("#passwordcode");
const generatePasswordBtn=document.querySelector("button");
const copyBtn=document.querySelector(".copy");

//Defining Password Length
const length=12;

//Creating several strings that include individual characters from which the password will be made up
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="@#$%^&*()_+~|}{[]></-=";

//Making a string by joining all the previously made strings
const allChars=upperCase+lowerCase+numbers+symbols;

//To create password we choose any random value from our previously made strings
const createPassword=()=>{
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value=password;
}

//To copy our Password
const copyPassword=()=>{
    passwordBox.select();
    passwordBox.setSelectionRange(0,passwordBox.value.length);//Handy for mobile devices
    document.execCommand("copy");
}

//Attaching event Listener to the button to create a new Password on each click
generatePasswordBtn.addEventListener("click",createPassword);

//Attaching Event Listener to copy our Password
copyBtn.addEventListener("click",copyPassword)
