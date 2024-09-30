password=document.querySelector("#password");
msg=document.querySelector("#msg");

password.addEventListener("input",()=>{
    if(password.value.length>0){
        if(password.value.length<4){
            msg.innerText="Password is weak";
            msg.style.color="red";
            password.style.borderColor="red"
        }
        else if(password.value.length>=4 && password.value.length<8){
            msg.innerText="Password is good";
            msg.style.color="yellow";
            password.style.borderColor="yellow";
        }
        else{
            msg.innerText="Password is strong";
            msg.style.color="green";
            password.style.borderColor="green";
        }
    }
    else{
        msg.innerText="";
    }
})


