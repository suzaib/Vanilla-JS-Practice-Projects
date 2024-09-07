//Accessing our HTML elements
let nameError=document.querySelector("#name-error");
let phoneError=document.querySelector("#phone-error");
let emailError=document.querySelector("#email-error");
let messageError=document.querySelector("#message-error");
let submitError=document.querySelector("#submit-error");
let nameBox=document.querySelector("#contact-name");
let phoneBox=document.querySelector("#contact-phone");
let emailBox=document.querySelector("#contact-email");
let messageBox=document.querySelector("#contact-message");
let submitButton=document.querySelector("button");

//Defining our variables
let name;
let phone;
let email;
let message;

//This functions checks if the user has entered his full Name or not (two names separated by a space)
const validateName=()=>{
    name=nameBox.value;
    if(name.length==0){
        nameError.innerText="Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        // ^ denotes the start of string checking
        // [A-Za-z]* = 0 or more alphabets checking
        // [A-Za-z]+ = 1 or more alphabets checking
        // [A-Za-z]  = 1 alphabet checking 
        // \s denotes space and {n} denotes how many
        // $ calls for stop checking;
        nameError.innerText="Write full name";
        return false;
    }

    //Showing the green checkbox if name is correct
    nameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

//This checks for the phone number (only 10 numeric digits)
const validatePhone=()=>{
    phone=phoneBox.value;

    if(phone.length==0){
        phoneError.innerText='Phone No. is required';
        return false;
    }

    if(phone.length!=10){
        phoneError.innerText="Phone No should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerText='Only digits';
        return false;
    }

    //Showing the green checkbox
    phoneError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

//This checks for typical email pattern
const validateEmail=()=>{
    email=emailBox.value;

    if(email.length==0){
        emailError.innerText="Email is required";
        return false;
    }

    //[A-Za-z0-9] checks for alphanumeric sequence right at start
    //[\.\-_A-Za-z0-9]* means 0 or more alphanumeric letters but that also include _ . - 
    //[@] checks for @ symbol
    //[A-Za-z] checks for alphabets only
    //\. checks for a literal dot . 
    //[a-z]{2-4} checks for small alphabets with 2-4 letters
    if(!email.match(/^[A-Za-z0-9][\.\-_A-Za-z0-9]*[@][A-Za-z]+\.[a-z]{2,4}$/)){
        emailError.innerText="Email Invalid";
        return false;
    }

    //Showing the green checkbox
    emailError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true;
}

//Checks for the length of the message to be atleast 30 letters
const validateMessage=()=>{
    message=messageBox.value;
    requiredCharacters=30;
    charactersLeft=requiredCharacters-message.length;

    if(charactersLeft>0){
        messageError.innerText=charactersLeft+" more characters required";
        return false;
    }

    //Showing the green checkbox
    messageError.innerHTML='<i class="fas fa-check-circle"></i>"';
    return true;
}

//This functions here checks for all the functions previously written whether they return a true / false value
const validateForm=()=>{
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.innerText='Please fix the error to submit';
        submitError.style.display='block';
        setTimeout(()=>{
            submitError.style.display='none';
        },3000);
        return false;
    }
}

//Now attaching eventListeners to out elements
nameBox.addEventListener("keyup",validateName);
phoneBox.addEventListener("keyup",validatePhone);
emailBox.addEventListener("keyup",validateEmail);
messageBox.addEventListener("keyup",validateMessage);
submitButton.addEventListener("click",validateForm);

//Since pressing enter key by default submits the form therefore it needs to be prevented
document.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        event.preventDefault();
    }
    console.log(event.key);
})
