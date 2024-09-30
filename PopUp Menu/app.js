let submitButton=document.querySelector("#submit");
let okButton=document.querySelector("#ok");
let popup=document.querySelector(".popup")

const openPopup=()=>{
    popup.classList.add("open-popup")
}

const closePopup=()=>{
    popup.classList.remove("open-popup")
}

submitButton.addEventListener("click",openPopup);
okButton.addEventListener("click",closePopup);