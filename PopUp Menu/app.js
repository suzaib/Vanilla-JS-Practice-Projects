//Accessing our HTML elements
let submitButton=document.querySelector("#submit");
let okButton=document.querySelector("#ok");
let popup=document.querySelector(".popup")

//Function to open popup by adding class "open-popup"
const openPopup=()=>{
    popup.classList.add("open-popup")
}

//Function to close popup by removing the class "open-popup"
const closePopup=()=>{
    popup.classList.remove("open-popup")
}

//Attaching Event Listeners to submit Button to call openPopup function to open popup on click
submitButton.addEventListener("click",openPopup);

//Attaching Event Listener to close button of popup to call the closePopup function on click
okButton.addEventListener("click",closePopup);
