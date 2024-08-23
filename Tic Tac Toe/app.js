
// Accessing our elements 
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let turn0=true; /* Player X or Player Y */
let newBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

/* The boxes are labelled from left to right as 0,1,2.. */

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let count=0;

// Handling clicks for each box
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            box.style.color="blue";
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});


//In case the game gets a draw
const gameDraw = () =>{
    msg.innerText="It's a Tie";
    msgContainer.classList.remove("hide");
    disableBoxes();
}


// Disabling the boxes after clicking them
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    };
};

// Enabling the box on newGame
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};


// Showing Winner
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


// Checking for winner
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}


// Reset btn functionality
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    count=0;
    msgContainer.classList.add("hide");
}

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
