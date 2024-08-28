//Accessing our HTML elements
let selectField=document.querySelector("#selectField");
let selectText=document.querySelector("#selectText");
let list=document.querySelector("#list");
let arrow=document.querySelector("#arrow");
let options=document.querySelectorAll(".options");

//Attaching eventlistener to each of the options available in the selectMenu
options.forEach((option)=>{
    option.addEventListener("click",()=>{
        selectText.innerText=option.innerText;

        //toggle method keeps switching classes in between (if hide was in classList ,it will be removed and if it was not in classList then it will be added)
        list.classList.toggle("hide");
        arrow.classList.toggle("rotate");
    })
})

//Attaching eventListener to the selectField 
selectField.addEventListener("click",()=>{
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
})
