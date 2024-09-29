//Accessing Our HTML Elements
let exitBtn=document.querySelector("#exitBtn");
let soundBtn=document.querySelector("#soundBtn i");
let theme=new Audio("../music/aurora.mp3");

//We set Sound as OFF in the beginning by default
let soundOn=false;

//Attaching event Listener to toggle the icon and enable/disable sound
soundBtn.addEventListener("click",(event)=>{
    soundBtn.className="";
    theme.loop=true;
    if(soundOn==true){
        soundBtn.classList.add("fa-solid","fa-volume-xmark")
        theme.pause();
        soundOn=false;
    }
    else if(soundOn==false){
        soundBtn.classList.add("fa-solid","fa-volume-high");
        theme.play();
        soundOn=true;
    }
})

//Attaching Event Listener to close the window
exitBtn.addEventListener("click",()=>{
    window.close()

    //Modern Browsers Impose restriction and hence window can't be closed by window.close()
    alert("Please close the window manually")
})