//Accessing our HTML elements
const inputBox=document.getElementById("input-box");
const listContainer=document.querySelector("#list-container")
const button=document.querySelector("button");

//Defining our functions

//a This saves data to localStorage so that our task still show up after refreshing or reopening the browser
const saveData=()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}

// This adds a new Task
const addTask=()=>{
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerText=inputBox.value;
        li.style.fontSize="16px";
        listContainer.appendChild(li);
        let deloption=document.createElement("span");
        deloption.innerHTML="\u00d7";
        li.appendChild(deloption)
    }
    inputBox.value="";
    saveData();
}

// This loads the saved task from the memory
const showTask=()=>{
    listContainer.innerHTML=localStorage.getItem("data");
}

//Attaching event listener for adding Task to the add button and deleting task to delete icon
button.addEventListener("click",addTask);
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

// Calling our show Task functions at the start when program runs
showTask();
