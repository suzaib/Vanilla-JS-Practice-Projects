//Accessing our HTML elements
let eye=document.querySelector("img");
let input=document.querySelector("input")
let passwordHidden=true;

//Attaching the eventListener to the eye icon
eye.addEventListener("click",()=>{
    if(passwordHidden===true){
        eye.src="images/eye-open.png";
        passwordHidden=false;
        input.type="text";
    }
    else {
        eye.src="images/eye-close.png";
        passwordHidden=true;
        input.type="password";
    }
})
