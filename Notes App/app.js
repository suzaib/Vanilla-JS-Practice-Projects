//Accessing our HTML elements
const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

//Defining our functions

// This fetches data from localStorage whenever the program starts
const showNotes=()=>{
    notesContainer.innerHTML=localStorage.getItem("notes");
}

// This is used to update the localStorage whenever called
const updateStorage=()=>{
    localStorage.setItem("notes",notesContainer.innerHTML);
}

//Attaching EventListeners 

// Clicking the create button creates a new div(wrapper) a textarea and an image within it
// We have used a extra div since textarea itself can't contain any child(otherwise we would have stored img inside it);
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("textarea");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    inputBox.setAttribute("placeholder","Make Your Notes here")
    img.src="images/delete.png";
    let wrapper=document.createElement("div");
    wrapper.appendChild(inputBox);
    wrapper.appendChild(img);
    wrapper.classList.add("wrapper");
    notesContainer.appendChild(wrapper);
})

// clicking the delete img deletes that particular note and clicking the textarea allows to edit and save the notes upon editing
notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="TEXTAREA"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach((note)=>{
            note.onkeyup=()=>{
                updateStorage();
            }
        })
    }
})

//Pressing the enter key down moves us to next line while writing a note
document.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

// This function loads our previous notes from the localStorage upon start of program
showNotes();
