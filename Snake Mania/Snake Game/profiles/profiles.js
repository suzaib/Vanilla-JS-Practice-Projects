//The Profile Page is just a demonstration on how to add or delete a player, I have not used local storage so the player profiles will
// return to normal when refreshed, Also the game and highscore aren't connected to the player profiles

//Accessing our html elements
let main=document.querySelector("main");
let footer=document.querySelector("footer");

let newBtn=document.querySelector("#newBtn");
let editBtn=document.querySelector("#editBtn");
let delBtn=document.querySelector("#delBtn");
let newEntryArea=document.querySelector(".newEntry input");
let createNewPlayerBtn=document.querySelector("#createNewPlayerBtn");
let newEntryBox=document.querySelector(".newEntry");

let backArrow=document.querySelector(".backArrow p");
let frontArrow=document.querySelector(".frontArrow");

let updateNameBox=document.querySelector(".updateNameBox");
let updateNameBtn=document.querySelector(".updateNameBox button");
let updateNameEntry=document.querySelector(".updateNameBox input");
let updateNameBoxValue;
let newPlayer;
let classes;


let players=document.querySelectorAll("main button");

//Setting currently selected player as null
let selectedPlayer=null;

// Functions
const unavailableOptions=()=>{
    editBtn.classList.add("notAvailable");
    delBtn.classList.add("notAvailable");
}

const availableOptions=()=>{
    editBtn.classList.remove("notAvailable");
    delBtn.classList.remove("notAvailable");
}

const availableNew=()=>{
    newBtn.classList.remove("notAvailable");
}

const unavailableNew=()=>{
    newBtn.classList.add("notAvailable");
}

//Updating name
const updateName=()=>{
    updateNameBox.classList.remove("hide");
    main.classList.add("disableSelection");
    footer.classList.add("disableSelection");
    updateNameEntry.value=selectedPlayer.innerText;
}

//Deleting Profile
const delProfile=(selectedPlayer)=>{
    selectedPlayer.remove();
    unavailableOptions();
    availableNew();
}

//Logic
players.forEach((player)=>{
    player.addEventListener("click",()=>{
        if(selectedPlayer){
            if(selectedPlayer===player){
                player.classList.remove("clicked")
                selectedPlayer=null;
                frontArrow.classList.add("notAvailable");
                unavailableOptions();
                availableNew();
            }
            else{
                player.classList.add("clicked");
                selectedPlayer.classList.remove("clicked");
                selectedPlayer=player;
                frontArrow.classList.remove("notAvailable");
                availableOptions();
                unavailableNew();
                console.log("front arrow available");
                classes=frontArrow.getAttribute("class");
                console.log(classes);
            }
        }
        else{
            player.classList.add("clicked");
            selectedPlayer=player;
            frontArrow.classList.remove("notAvailable");
            availableOptions();
            unavailableNew();
            console.log("front arrowavailable");
            classes=frontArrow.getAttribute("class");
            console.log(classes);
        }
    })
})

newEntryArea.addEventListener("keyup",()=>{
    newPlayer=newEntryArea.value;
    if(newPlayer){
        createNewPlayerBtn.classList.remove("notAvailable");
    }
    else{
        createNewPlayerBtn.classList.add("notAvailable");
    }
})

createNewPlayerBtn.addEventListener("click",()=>{
    if(!(createNewPlayerBtn.classList.contains("notAvailable"))){
        newEntryBox.classList.add("hide");
        availableNew();
        let newUser=document.createElement("button");
        newUser.innerText=newPlayer;
        main.appendChild(newUser);
        newEntryArea.value="";
        newPlayer="";
        createNewPlayerBtn.classList.add("notAvailable");
        main.classList.remove("disableSelection");
        footer.classList.remove("disableSelection");
        frontArrow.classList.add("notAvailable");

        //Reattaching Event Listener to newly added Elements

        newUser.addEventListener("click",()=>{
            if(selectedPlayer){
                if(selectedPlayer===newUser){
                    newUser.classList.remove("clicked")
                    selectedPlayer=null;
                    unavailableOptions();
                    availableNew();
                    frontArrow.classList.add("notAvailable");
                }
                else{
                    newUser.classList.add("clicked");
                    selectedPlayer.classList.remove("clicked");
                    selectedPlayer=newUser;
                    availableOptions();
                    unavailableNew();
                    frontArrow.classList.remove("notAvailable");
                }
            }
            else{
                newUser.classList.add("clicked");
                selectedPlayer=newUser;
                availableOptions();
                unavailableNew();
                frontArrow.classList.remove("notAvailable");
            }
        })
    }
})



newBtn.addEventListener("click",()=>{
    if(!(newBtn.classList.contains("notAvailable"))){
        newEntryBox.classList.remove("hide");
        unavailableNew();
        footer.classList.add("disableSelection");
        main.classList.add("disableSelection");
        backArrow.href="";
        frontArrow.classList.add("notAvailable");
    }
})



editBtn.addEventListener("click",()=>{
    if(!(editBtn.classList.contains("notAvailable"))){
        updateName();
        frontArrow.classList.add("notAvailable");
    }
})

delBtn.addEventListener("click",()=>{
    if(selectedPlayer){
        delProfile(selectedPlayer);
        frontArrow.classList.add("notAvailable");
    }
})

backArrow.addEventListener("click",(event)=>{
    event.preventDefault();
    if(main.classList.contains("disableSelection")){
        main.classList.remove("disableSelection");
        footer.classList.remove("disableSelection");

        // Checking whether the user is editing or adding a new Name
        if(newEntryBox.classList.contains("hide")){
            updateNameBox.classList.add("hide");
            updateNameBtn.classList.add("notAvailable");
            availableOptions();
            unavailableNew();
        }

        else{
            newEntryBox.classList.add("hide");
            newEntryArea.value="";
            unavailableOptions();
            availableNew();
        }
    }
    else{
        window.location.href="../index/index.html";
    }

})

updateNameEntry.addEventListener("keyup",()=>{
    if(updateNameEntry.value){
        updateNameBtn.classList.remove("notAvailable");
    }
    else{
        if(!(updateNameBtn.classList.contains("notAvailable"))){
            updateNameBtn.classList.add("notAvailable");
        }
    }
})

updateNameBtn.addEventListener("click",()=>{
    if(!(updateNameBtn.classList.contains("notAvailable"))){
        updateNameBox.classList.add("hide");
        main.classList.remove("disableSelection");
        footer.classList.remove("disableSelection");
        selectedPlayer.innerText=updateNameEntry.value;
        updateNameBtn.classList.add("notAvailable");
        frontArrow.classList.remove("notAvailable");
    }
})

frontArrow.addEventListener("click",()=>{
    if(!(frontArrow.classList.contains("notAvailable"))){
        window.location.href="../index/index.html";
    }
})


// after adding an new element , the functionality to delete it or edit , is not working
