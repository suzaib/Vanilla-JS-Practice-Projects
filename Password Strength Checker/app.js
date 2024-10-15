//Accessing our HTML elements
password=document.querySelector("#password");
msg=document.querySelector("#msg");

//As soon as text is entered we execute cases for different password lengths
password.addEventListener("input",()=>{

    //Only show a msg if password input box is not empty
    if(password.value.length>0){

        //Weak password for length less than 4
        if(password.value.length<4){
            msg.innerText="Password is weak";
            msg.style.color="red";
            password.style.borderColor="red"
        }

        //Good password for length between 4 and 8 (4 included)
        else if(password.value.length>=4 && password.value.length<8){
            msg.innerText="Password is good";
            msg.style.color="yellow";
            password.style.borderColor="yellow";
        }

        //Strong password for length greater than 4
        else{
            msg.innerText="Password is strong";
            msg.style.color="green";
            password.style.borderColor="green";
        }
    }

    //No msg shown if password length is 0
    else{
        msg.innerText="";
    }
})


